import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { Modal, message } from 'antd'

export const Config = process.env.REACT_APP_RUNTIME !== 'production'
  ? {
    BASE_URL: window.location.origin
  }
  : {
    BASE_URL: '""'
  }

const http:AxiosInstance = Axios.create({    //创建Axios实例，在这里可以设置请求的默认配置
  timeout: 10000, // 设置超时时间10s
  withCredentials: true,
  baseURL: Config.BASE_URL
})

// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
http.defaults.headers.post['Content-Type'] = 'application/json'

http.interceptors.response.use(undefined, function (error) {
  if (error.response) {
    return error.response
  }
})

export interface IResponse<T> {
  code: number
  data: T
  msg: string
}

const errCode: {[name: number]: string} = {
  403: '没有登录权限, 请重新登录！',
  405: '没有操作权限!',
  502: '接口502',
  500: '接口500',
  404: '接口404',
  20006: '已有登录操作在进行,当前不能进行该操作',
  50002: '操作错误, 包含敏感词',
  60002: '已存在任务，间隔必须大于10分钟'
}

class Request {
  private count = 0 //错误弹窗次数
  private getData<T extends IResponse<any>>(response: AxiosResponse<T>): T['data'] {
    //需要全局统一处理的错误 在这里先处理
    const err = response.data.code || response.status || -1
    if(Object.keys(errCode).indexOf(String(err)) > -1) {
      const msg = errCode[err];

      if([404, 500, 502].includes(err)) {
        message.error(response.request.responseURL + ' ' + msg)
        throw {
          code: response.status
        }
      } else {
        if(this.count > 0) {
          //避免多次错误弹窗
          this.count = 0
        } else {
          this.count += 1
          Modal.warning({
            title: '温馨提醒',
            content: msg,
            onOk() {
              const basename = process.env.REACT_APP_BASENAME || process.env.PUBLIC_URL || ''
              data.code === 403 && window.location.assign(`${basename}/login`)
            }
          })
        }
      }
    }
    const { data } = response
    if (data.code === 0) {
      return data.data
    } else {
      throw data
    }
  }

  /* 统一封装get请求 */
  public async $get<T>(url:string, params?:any, config?:AxiosRequestConfig): Promise<T> {
      return this.getData(
        await http({
          method: 'get',
          url: this.adornUrl() + url,
          params,
          ...config
        })
      )
  }

  /* 统一封装post请求  */
  public async $post<T>(url:string, data?:any, config?:AxiosRequestConfig): Promise<T> {
    return this.getData(
      await http({
          method: 'post',
          url: this.adornUrl() + url,
          data,
          ...config
      })
    )
  }

  /**处理代理 */
  public adornUrl(): string {
    var proxyApi: string = '/proxyXcn'

    // 本地环境 && 开启代理, 接口前缀统一使用[/group-control/]前缀做代理拦截!
    return  process.env.REACT_APP_RUNTIME !== 'production' ? proxyApi : ''
  }
}
export default new Request()