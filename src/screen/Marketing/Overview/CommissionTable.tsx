import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import HeaderCommissionTable from './HeaderCommissionTable'
import { Commission, commissions } from './dataOverview'
import ItemCommission from './ItemCommission'

const CommissionTable = () => {
    return (
        <Box backgroundColor={'#f5f5f5'}>
            <Txt bold margin={10}>CÁCH TÍNH HOA HỒNG (XỔ SỐ)</Txt>
            <HeaderCommissionTable />
            {commissions.map((commission: Commission) => 
                <ItemCommission 
                    key={commission.level}
                    commission={commission}
                />
            )}
        </Box>
    )
}

export default CommissionTable