import React from "react"
import "./App.less"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Login from './pages/login/login'
import Home from './pages/home'

const App = () => {
  

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
