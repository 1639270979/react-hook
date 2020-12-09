import React, { useCallback, useState } from 'react'
import './login.scss'
import { useHistory } from 'react-router-dom'
import { Tabs } from 'antd'
const { TabPane } = Tabs;
import Account from './account'
import Phone from './phone'

export default function Login() {
  const history = useHistory()
  const [ key, setKey ] = useState<string>('')

  const handleTab = useCallback((key) => {
    setKey(key)
  },[])

  return (
    <div className="login-container">
      <div className="wrap">
        <Tabs defaultActiveKey={key} onChange={handleTab}>
          <TabPane tab="账户密码登录" key="1">
            <Account />
          </TabPane>
          <TabPane tab="手机号登录" key="2">
            <Phone />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
} 