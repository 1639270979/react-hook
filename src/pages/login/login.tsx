import React, { useCallback } from 'react'
import style from './login.module.scss'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const history = useHistory()

  const toHome = useCallback(() => {
    history.push('/home')
  },[])

  return (
    <div className={style["login"]}>
      <button onClick={toHome}>login</button>
    </div>
  )
} 