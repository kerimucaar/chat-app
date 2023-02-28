import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import styles from './ContentTopInfo.module.css';

export default function ContentTopInfo() {
  return (
    <Box>
      <Flex alignItems='center' columnGap={4}>
        <Image src='/profiles/ku.jfif' width={40} height={40} alt='' className={styles.img} />
        <Box>
          <Text fontSize={20} fontWeight={600}>
            Kerim UÇAR
          </Text>
          <Text fontSize={14} color='mutedText'>
            last seen recently
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
