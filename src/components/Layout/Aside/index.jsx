import { Box } from '@chakra-ui/react';
import AsideMessages from './AsideMessagesContainer';
import AsideTop from './AsideTop';
import styles from './Aside.module.css';

export default function Aside() {
  return (
    <Box
      id='aside'
      mt={12}
      minH='calc(100vh - var(--chakra-space-12))'
      maxW='sm'
      w='full'
      overflowY='scroll'
      overflowX='hidden'
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
