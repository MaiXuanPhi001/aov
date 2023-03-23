import React from 'react'
import Box from '@commom/Box'
import Tree from './Tree'
import AccountManager from './AccountManager'
import UserF1 from './UserF1'

const Team = () => {
  return (
    <Box
      backgroundColor={'#f5f5f5'}
      marginBottom={20}
    >
      <Tree />
      <AccountManager />
      <UserF1 />
    </Box>
  )
}

export default Team