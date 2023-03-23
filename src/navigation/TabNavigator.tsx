import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import routes from '@util/routes'
import HomeStack from './HomeStack'
import MarketingStack from './MarketingStack'
import AccountStack from './AccountStack'
import { StyleSheet } from 'react-native'
import { theme } from '@theme/index'
import TabCustom from '@reuse/TabCustom'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container
      }}
    >
      <Tab.Screen
        name={routes.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => {
            return (
              focused ?
                <TabCustom
                  icon={require('@images/tab/house-black.png')}
                  title={'Trang chủ'}
                  backgroundColor={theme.colors.grayTab}
                  borderLeftRadius={9}
                /> :
                <TabCustom
                  icon={require('@images/tab/house-white.png')}
                  title={'Trang chủ'}
                  titleColor={'white'}
                  borderLeftRadius={9}
                />
            )
          }
        }}
      />
      <Tab.Screen
        name={routes.MARKETING_STACK}
        component={MarketingStack}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => {
            return (
              focused ?
                <TabCustom
                  icon={require('@images/tab/diamond-black.png')}
                  title={'Tiếp thị'}
                  backgroundColor={theme.colors.grayTab}
                /> :
                <TabCustom
                  icon={require('@images/tab/diamond-white.png')}
                  title={'Tiếp thị'}
                  titleColor={'white'}
                />
            )
          }
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT_STACK}
        component={AccountStack}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }): JSX.Element => {
            return (
              focused ?
                <TabCustom
                  icon={require('@images/tab/user-black.png')}
                  title={'Tài khoản'}
                  backgroundColor={theme.colors.grayTab}
                  borderRightRadius={9}
                /> :
                <TabCustom
                  icon={require('@images/tab/user-white.png')}
                  title={'Tài khoản'}
                  titleColor={'white'}
                />
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e42f2a',
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 20,
    height: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
