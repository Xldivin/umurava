import React from 'react'
import Login from 'pages-sections/login/Login'
import Header from 'pages-sections/login/Header'
import Box1 from 'pages-sections/login/Box1'
import Footer from 'pages-sections/login/Footer'
import LoginForm from 'pages-sections/login/LoginForm'

function login2() {
  return (
    <div>
        <Header />
        <Login />
        <Box1 />
        <Footer />
        {/* <LoginForm /> */}
    </div>
  )
}

export default login2