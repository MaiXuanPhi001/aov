import React, { useEffect, useState } from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { getParent } from '@service/marketingService'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Img from '@commom/Img'
import ItemTree from './ItemTree'
import { useAppSelector } from '@hooks/index'
import { profileSelector } from '@selector/userSelector'
import { Profile } from '@interface/user'
import Scroll from '@commom/Scroll'
import { DataGetparent, ItemGetParent } from '@interface/marketing'
import LoadingRed from '@reuse/LoadingRed'
import ThreeItem from './ThreeItem'

const Tree = () => {
    const [data, setData] = useState<DataGetparent>()
    const [loading, setLoading] = useState<boolean>(false)
    const profile: Profile = useAppSelector<any>(profileSelector)

    useEffect(() => {
        handleGetparent()
    }, [])

    const handleGetparent = async () => {
        setLoading(true)
        const res = await getParent(profile.id)
        if (res.status) {
            setData(res.data)
            setLoading(false)
        } else {
            res.status && Alert.alert(res.message)
        }
    }

    return (
        <Box
            backgroundColor={'white'}
        >
            <Box backgroundColor={'#f6f5f5'}>
                <Txt bold margin={10}>MẠNG LƯỚI</Txt>
            </Box>
            {loading ? (
                <LoadingRed />
            ) : (
                <Scroll
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    paddingLeft={10}
                    marginBottom={30}
                    marginTop={5}
                >
                    <Box>
                        <Box
                            row
                            alignEnd
                            marginBottom={5}
                        >
                            <View style={styles.view} />
                            <Img
                                source={require('@images/marketing/home-office.png')}
                                width={20}
                                height={20}
                                marginLeft={20}
                                marginRight={10}
                            />
                            <Text>{data?.profile?.userName}</Text>
                            <Text style={styles.textEmail}> - {data?.profile?.email}</Text>
                        </Box>
                        {data?.data?.map((tree: ItemGetParent) =>
                            // <ItemTree
                            //     key={tree.id}
                            //     tree={tree}
                            // />
                            <ThreeItem
                                key={tree.id}
                                tree={tree}
                            />
                        )}
                    </Box>
                </Scroll>
            )}
        </Box>
    )
}

export default Tree

export const styles = StyleSheet.create({
    textEmail: {
        fontStyle: 'italic',
        color: '#818080',
        fontSize: 13,
    },
    view: {
        width: 12,
        height: 25,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#656665',
        position: 'absolute',
        top: -10,
    }
})