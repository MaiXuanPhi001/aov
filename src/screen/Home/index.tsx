import Scroll from '@commom/Scroll'
import ForegroundHome from '@reuse/ForegroundHome'
import HeaderApp from '@reuse/HeaderApp'
import Marquee from '@reuse/Marquee'
import Safe from '@reuse/Safe'
import React from 'react'
import Amount from './Amount'
import Games from './Games'
import RankWithdraw from './RankWithdraw'
import Slider from './Slider'

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