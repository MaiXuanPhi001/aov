import React from 'react'
import Box from '@commom/Box'
import WinGO from './WinGO'
import Aov from './Aov'
import VietNamLottery from './VietNamLottery'
import FiveDLotre from './FiveDLotre'
import K3Lotre from './K3Lotre'

const Games = () => {
  return (
    <Box marginTop={30}>
        <Aov />
        <WinGO />
        <VietNamLottery />
        <FiveDLotre />
        <K3Lotre />
    </Box>
  )
}

export default Games