import { Flex } from '@chakra-ui/react';
import ContentTopActions from './ContentTopActions';
import ContentTopInfo from './ContentTopInfo';

export default function ContentTop() {
  return (
    <Flex justifyContent='space-between' alignItems='center' bgColor='primaryBg' px={4} h='12'>
      <ContentTopInfo />
      <ContentTopActions />
    </Flex>
  );
}
