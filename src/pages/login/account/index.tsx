import React, { useCallback } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import './account.scss'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { fetchLogin } from "../../../models/login"

export default function Account() {

  const onFinish = useCallback(async (values) => {
    const data = await fetchLogin(values)
    console.log(data)
  },[])

  return (
    <Form
      name="normal_login"
      className="account-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input prefix={<UserOutlined translate="no" className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input
          prefix={<LockOutlined translate="no" className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="#" onClick={() => {return false;}}>
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        <div className="register-account">
          <a href="#" onClick={() => {return false;}}>注册账户!</a>
        </div>
      </Form.Item>
    </Form>
  )
}