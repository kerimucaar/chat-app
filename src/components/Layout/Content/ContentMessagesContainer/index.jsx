import { Box } from '@chakra-ui/react';
import styles from './ContentMessagesContainer.module.css';

export default function ContentMessagesContainer(props) {
  return (
    <Box
    ref={props.containerRef}
      w='50%'
      position='absolute'
      h='calc(100% - 2px - var(--chakra-space-24))'
      left='50%'
      bottom='calc(var(--chakra-space-12) + 2px)'
      transform='translateX(-50%)'
      overflowY='scroll'
      className={styles.container}
    >
      {props.children}
    </Box>
  );
}
