import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ContentBottomInput from './ContentBottomInput';
import ContentMessages from './ContentMessages';
import ContentTop from './ContentTop';

export default function Content(props) {
  const router = useRouter();
  const id = router?.query?.id;

  if (!id) return;

  return (
    <Box maxH='100vh' w='full' position='relative'>
      <ContentTop />
      <ContentMessages>{props.children}</ContentMessages>
      <ContentBottomInput />
    </Box>
  );
}
