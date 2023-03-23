import { historyDepositVndThunk } from '@asyncThunk/depositeAsyncThunk'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { ItemHistoryDeposit } from '@interface/deposite'
import BackHeader from '@reuse/BackHeader'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import LoadingRed from '@reuse/LoadingRed'
import Pagination from '@reuse/Pagination'
import ModalFailTransfer from '@screen/HistoryDepositVnd/ModalFailTransfer'
import { historyDepositSelector, loadingDepositeSelector, pageDepositSelector, totalDepositSelector } from '@selector/depositeSelector'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import Item from './Item'
import ModalShowImage from './ModalShowImage'

const HistoryDepositVnd = () => {
  const dispatch = useAppDispatch()
  const page = useAppSelector(pageDepositSelector)
  const total = useAppSelector(totalDepositSelector)
  const historys = useAppSelector(historyDepositSelector)
  const loading = useAppSelector(loadingDepositeSelector)

  const [modalFailTransfer, setModalFailTransfer] = useState<boolean>(false)
  const [modalImage, setModalImage] = useState<boolean>(false)
  const [urlImg, setUrlImg] = useState<string>('')
  const [reason, setReason] = useState<string>('')

  useEffect(() => {
    handleHistoryDeposit(1)
  }, [])

  const handleHistoryDeposit = async (page: number) => {
    const { payload } = await dispatch(
      historyDepositVndThunk({
        limit: 10,
        page,
      })
    )


    !payload.status && Alert.alert(payload.message)
  }

  const handleShowModalTransfer = (reason: string) => {
    setModalFailTransfer(true)
    setReason(reason)
  }

  const handleshowModalImage = (uri: string) => {
    setModalImage(true)
    setUrlImg(uri)
  }

  return (
    <KeyBoardSafe paddingBottom={100}>
      <BackHeader />
      <Box paddingHorizontal={20}>
        <Box
          row
          alignCenter
          justifySpaceBetween
          marginVertical={10}
        >
          <Txt bold size={16}>LỊCH SỬ NẠP TIỀN</Txt>
          <Pagination
            alignSefl='center'
            marginTop={0}
            indexPage={page}
            total={total}
            onNext={() => handleHistoryDeposit(page + 1)}
            onBack={() => handleHistoryDeposit(page - 1)}
          />
        </Box>
        {loading ? (
          <LoadingRed />
        ) : (
          <>
            {historys.map((history: ItemHistoryDeposit) =>
              <Item
                key={history.id}
                history={history}
                onShowModalTransfer={handleShowModalTransfer}
                onShowModalImage={handleshowModalImage}
              />
            )}
          </>
        )}
      </Box>
      <ModalFailTransfer
        show={modalFailTransfer}
        setShow={setModalFailTransfer}
        setModalFailTransfer={setReason}
        reason={reason}
      />
      <ModalShowImage
        show={modalImage}
        setShow={setModalImage}
        urlImg={urlImg}
      />
    </KeyBoardSafe >
  )
}

export default HistoryDepositVnd