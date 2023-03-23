import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import HeaderRevenueRable from './HeaderRevenueRable'
import { Revenue, revenues } from './dataOverview'
import ItemRevenue from './ItemRevenue'

const RevenueTable = () => {
  return (
    <Box
      backgroundColor={'#f5f5f5'}
      marginBottom={20}
    >
      <Txt bold margin={10}>BẢNG DOANH THU ĐẠI LÝ</Txt>
      <HeaderRevenueRable />
      {revenues.map((revenue: Revenue) =>
        <ItemRevenue
          key={revenue.level}
          revenue={revenue}
        />
      )}
    </Box>
  )
}

export default RevenueTable