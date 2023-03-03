import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import ContentBottomInput from './ContentBottomInput';
import ContentMessagesContainer from './ContentMessagesContainer';
import ContentTop from './ContentTop';

export default function Content(props) {
  const router = useRouter();
  const id = router?.query?.id;
  const containerRef = useRef();

  if (!id) return;

  return (
    <Box maxH='100vh' w='100%' position='relative'>
      <ContentTop />
      <ContentMessagesContainer containerRef={containerRef}>{props.children}</ContentMessagesContainer>
      <ContentBottomInput containerRef={containerRef} />
    </Box>
  );
}
