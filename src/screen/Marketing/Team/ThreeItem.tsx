import React from 'react'
import { ItemGetParent } from '@interface/marketing'
import Box from '@commom/Box'
import Img from '@commom/Img'
import { styles } from './Tree'
import Txt from '@commom/Txt'

interface Props {
    tree: ItemGetParent
}

const ThreeItem = ({ tree }: Props) => {
    const array = tree.array || null

    return (
        <Box
            marginLeft={35}
            borderLeftWidth={1}
            borderColor={'#656665'}
            paddingTop={5}
        >
            <Box
                row
                alignEnd
            >
                <Box
                    height={1}
                    width={10}
                    backgroundColor={'#656665'}
                />
                <Box
                    row
                    alignCenter 
                    marginBottom={array ? -15: -5}
                    marginTop={10}
                >
                    <Img
                        source={array ? require('@images/marketing/people.png') : require('@images/marketing/user.png')}
                        width={array ? 25 : 15}
                        height={array ? 25 : 15}
                        marginHorizontal={3}
                    />

                    <Txt >{tree.userName}</Txt>
                    <Txt style={styles.textEmail}> - {tree.email}</Txt>
                </Box>
            </Box>


            {array &&
                <Box marginTop={10}>
                    {tree?.array?.map((item: any) =>
                        <ThreeItem key={item.id} tree={item} />
                    )}
                </Box>
            }
        </Box>
    )
}

export default ThreeItem