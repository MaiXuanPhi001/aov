import React, { useEffect, useState } from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Pagination from '@reuse/Pagination'
import HeaderTableUserF1 from './HeaderTableUserF1'
import Scroll from '@commom/Scroll'
import { ItemGetParent } from '@interface/marketing'
import TableUserF1 from './TableUserF1'
import { getListUserF1 } from '@service/marketingService'
import LoadingRed from '@reuse/LoadingRed'

const UserF1 = () => {
    const [data, setData] = useState<ItemGetParent[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        handleGetListUserF1()
    }, [page])

    const handleGetListUserF1 = async () => {
        setLoading(true)
        const res = await getListUserF1({
            limit: 10,
            page: page,
        })
        if (res.status) {
            setData(res.data.array)
            setTotal(res.data.total)
            setLoading(false)
        }
    }

    return (
        <Box
            backgroundColor={'#f6f5f5'}
        >
            {loading ? (
                <LoadingRed />
            ) : (
                <>
                    <Box
                        row
                        alignCenter
                        justifySpaceBetween
                        padding={10}
                        zIndex={1}
                    >
                        <Txt bold>USERS F1</Txt>
                        <Pagination
                            marginTop={0}
                            indexPage={page}
                            total={total}
                            onNext={() => setPage(page + 1)}
                            onBack={() => setPage(page - 1)}
                        />
                    </Box>
                    <Scroll
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <Box>
                            <HeaderTableUserF1 />
                            {data.map((item: ItemGetParent, index: number) =>
                                <TableUserF1
                                    key={item.id}
                                    index={index}
                                    item={item}
                                />
                            )}
                        </Box>
                    </Scroll>
                </>
            )}
        </Box>
    )
}

export default UserF1