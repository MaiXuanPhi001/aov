import React from 'react'
import HeaderApp from '@reuse/HeaderApp'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Banner from '@reuse/Banner'
import Form from './Form'

const Login = () => (
  <KeyBoardSafe>
    <HeaderApp />
    <Banner />
    <Form />
  </KeyBoardSafe>
)

export default Login