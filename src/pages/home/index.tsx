import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()

  const toLogin = useCallback(() => {
    history.push('/login')
  },[])

  return (
    <div>
      <button onClick={toLogin}>to login</button>
    </div>
  )
} 