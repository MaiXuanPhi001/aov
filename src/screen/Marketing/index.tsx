import React, { useRef, useState } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import HeaderApp from '@reuse/HeaderApp'
import HeaderTab from './HeaderTab'
import History from './History'
import Statistical from './Statistical'
import Team from './Team'
import Tutorial from './Tutorial'
import Overview from './Overview'
import ToastTop from '@reuse/ToastTop'
import CalendarBottomSheet from './CalendarBottomSheet'
import BackHome from '@reuse/BackHome'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

export const TAB = {
  OVERVIEW: 'overview',
  HISTORY: 'history',
  STATISTICAL: 'statistical',
  TEAM: 'team',
  TUTORIAL: 'tutorial',
}

const Marketing = () => {
  const [tab, setTab] = useState<string>(TAB.OVERVIEW)
  const toastTopRef = useRef<any>(null)
  const bottomSheetRef = useRef<any>(null)

  return (
    <>
      <ToastTop ref={toastTopRef} />
      <KeyBoardSafe paddingBottom={80}>
        <BackHome onBack={() => navigate(routes.HOME)} />
        <HeaderTab
          tab={tab}
          setTab={setTab}
        />
        {tab === TAB.HISTORY ? <History setTab={setTab} /> :
          tab === TAB.STATISTICAL ? <Statistical bottomSheetRef={bottomSheetRef} /> :
            tab === TAB.TEAM ? <Team /> :
              tab === TAB.TUTORIAL ? <Tutorial /> : <Overview toastTopRef={toastTopRef} />
        }
      </KeyBoardSafe>
      <CalendarBottomSheet 
        bottomSheetRef={bottomSheetRef}
      />
    </>
  )
}

export default Marketing