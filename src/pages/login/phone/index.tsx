import React, { useCallback } from 'react'
import { Form, Input, Checkbox, Button, Row, Col } from 'antd'
import './phone.scss'
import { MobileOutlined, MailOutlined } from '@ant-design/icons'

export default function Phone() {

  const onFinish = useCallback((values) => {
    console.log('Received values of form: ', values);
  },[])

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入手机号!' }]}
      >
        <Input prefix={<MobileOutlined translate="no" className="site-form-item-icon" />} placeholder="手机号" />
      </Form.Item>
      <Form.Item  extra="We must make sure that your are a human.">
        <Row gutter={24}>
          <Col span={14}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[{ required: true, message: '请输入获取到的验证码!' }]}
            >
              <Input  prefix={<MailOutlined translate="no" className="site-form-item-icon" />} placeholder="验证码" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Button>获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>自动登录</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        <div className="register-account">
          <a href="javascript:;">注册账户!</a>
        </div>
      </Form.Item>
    </Form>
  )
}