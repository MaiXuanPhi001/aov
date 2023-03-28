import { goBack } from '@navigation/navigationRef'
import BackHome from '@reuse/BackHome'
import Banner from '@reuse/Banner'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import React from 'react'
import Form from './Form'

const SignUp = () => (
  <KeyBoardSafe>
    <BackHome onBack={() => goBack()} />
    <Banner />
    <Form />
  </KeyBoardSafe>
)

export default SignUp