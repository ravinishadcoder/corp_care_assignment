import { Box, HStack, Img, Text } from '@chakra-ui/react'
import React from 'react'
import dummyImg from "../assesst/dummy.png"
import styles from "../styles/transactionFirst.module.css"
const TransactionFirst = () => {
    let arr=[1,1,1,1]
  return (
    <Box className={styles.tFirstBox}>
    {
        arr.map((el,i)=>(
            <Box key={i} className={styles.tFirstMain}>
        <HStack  >
            <Box>
                <Img src={dummyImg}  h="50px" />
            </Box>
            <Box>
                <Text as="b">
                 Jiko Mobile App
                </Text>
                <br />
                <Text as="small">
                 12 Nov 2021 4:45AM
                </Text>
            </Box>
        </HStack>
        <Box>
            <Text as="b">$15</Text>
        </Box>
    </Box>
        ))
    }
    </Box>
  )
}

export default TransactionFirst