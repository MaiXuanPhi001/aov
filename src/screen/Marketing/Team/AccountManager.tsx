import React, { useEffect, useState } from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Level from './Level'
import HeaderTableAccountManager from './\bHeaderTableAccountManager'
import { getParentToLevel } from '@service/marketingService'
import { ItemGetParent } from '@interface/marketing'
import ItemAccountManager from './ItemAccountManager'
import LoadingRed from '@reuse/LoadingRed'

const AccountManager = () => {
  const [data, setData] = useState<ItemGetParent[]>()
  const [loading, setLoading] = useState<boolean>()
  const [level, setLevel] = useState<number>(0)

  useEffect(() => {
    handleGetParentToLevel()
  }, [level])

  const handleGetParentToLevel = async () => {
    setLoading(true)
    const res = await getParentToLevel(level === 0 ? 100 : level)
    if (res.status) {
      setData(res.data)
      setLoading(false)
    }
  }

  return (
    <Box
      backgroundColor={'#f6f5f5'}
      zIndex={1}
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
            <Txt bold>QUẢN LÝ TÀI KHOẢN</Txt>
            <Level
              level={level}
              setLevel={setLevel}
            />
          </Box>
          <HeaderTableAccountManager />
          {data?.map((item: ItemGetParent, index: number) =>
            <ItemAccountManager
              key={item.id}
              index={index}
              item={item}
            />
          )}
        </>
      )}
      <Box height={30} backgroundColor={'white'} />
    </Box>
  )
}

export default AccountManager