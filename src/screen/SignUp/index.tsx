import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import HeaderApp from '@reuse/HeaderApp'
import Banner from '@reuse/Banner'
import Form from './Form'

const SignUp = () => (
  <KeyBoardSafe>
    <HeaderApp />
    <Banner />
    <Form />
  </KeyBoardSafe>
)

export default SignUp