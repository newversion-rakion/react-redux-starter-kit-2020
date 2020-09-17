import Header from 'components/Header';
import React, { useEffect } from 'react';
const Login = (props) => {
  useEffect(() => {
    console.log(props.todoList)
  }, [])
  return (
    <div className="loginPage">
      <Header />
      <div className="container">
        <h1>Login</h1>
      </div>
    </div>
  )
}


export default Login
