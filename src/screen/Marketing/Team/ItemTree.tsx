import { Text, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import { styles } from './Tree'
import Img from '@commom/Img'
import { ItemGetParent } from '@interface/marketing'

interface Props {
    tree: ItemGetParent
}

const ItemTree = ({ tree }: Props) => {
    const array = tree.array || null

    return (
        <Box
            marginLeft={35}
            marginTop={5}
        >
            <Box
                row
                alignEnd
            >
                <View style={styles.view} />
                <Img
                    source={array ? require('@images/marketing/people.png') : require('@images/marketing/user.png')}
                    width={array ? 25 : 15}
                    height={array ? 25 : 15}
                    marginLeft={20}
                    marginRight={10}
                />

                <Text>{tree.userName}</Text>
                <Text style={styles.textEmail}> - {tree.email}</Text>
            </Box>
            {array &&
                <Box marginTop={5}>
                    {tree?.array?.map((item: any) =>
                        <ItemTree key={item.id} tree={item} />
                    )}
                </Box>
            }
        </Box>
    )
}

export default ItemTree