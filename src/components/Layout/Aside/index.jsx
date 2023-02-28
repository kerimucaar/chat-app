import { Box } from '@chakra-ui/react';
import AsideMessages from './AsideMessagesContainer';
import AsideTop from './AsideTop';
import styles from './Aside.module.css';

export default function Aside() {
  return (
    <Box
      mt={12}
      minH='full'
      maxH='100vh'
      maxW='sm'
      overflowY='scroll'
      overflowX='hidden'
      w='full'
      position='relative'
      zIndex={100}
      borderRight='1px solid #ffffff20'
      className={styles.aside}
    >
      <AsideTop />
      <AsideMessages />
    </Box>
  );
}
