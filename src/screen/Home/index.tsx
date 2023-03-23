import React from 'react'
import HeaderApp from '@reuse/HeaderApp'
import ForegroundHome from '@reuse/ForegroundHome'
import Slider from './Slider'
import Marquee from '@reuse/Marquee'
import Games from './Games'
import Safe from '@reuse/Safe'
import Scroll from '@commom/Scroll'
import Amount from './Amount'
import RankWithdraw from './RankWithdraw'

const Home = () => {
  return (
    <Safe>
      <HeaderApp />
      <ForegroundHome height={300} />
      <Scroll
        paddingHorizontal={20}
        paddingBottom={100}
      >
        <Slider />
        <Marquee />
        <Games />
        <Amount />
        <RankWithdraw />
      </Scroll>
    </Safe>
  )
}

export default Home