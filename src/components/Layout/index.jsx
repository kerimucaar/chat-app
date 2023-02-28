import { Box, Flex } from '@chakra-ui/react';
import Aside from './Aside';
import Content from './Content';

export default function Layout(props) {
  return (
    <Box id='layout-wrapper'>
      <Flex maxH='100vh'>
        <Aside />
        <Content>{props.children}</Content>
      </Flex>
    </Box>
  );
}
