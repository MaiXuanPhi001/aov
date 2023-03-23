import React from 'react'
import Box from '@commom/Box'
import Search from './Search'
import Infomation from './Infomation'

const Statistical = ({ bottomSheetRef }: any) => {
  return (
    <Box padding={10}>
      <Search bottomSheetRef={bottomSheetRef} />
      <Infomation />
    </Box>
  )
}

export default Statistical