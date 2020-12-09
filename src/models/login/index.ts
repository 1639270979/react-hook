import request from '../../services/lib/request'
import { ILogin } from './type'

export function fetchLogin(params: ILogin) {
  request.$get('/user',params)
}