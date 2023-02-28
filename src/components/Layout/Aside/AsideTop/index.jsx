import { Flex } from '@chakra-ui/react';
import AsideTopMenu from './AsideTopMenu';
import AsideTopSearch from './AsideTopSearch';

export default function AsideTop() {
  return (
    <Flex
      alignItems='center'
      px={3}
      bgColor='primaryBgOpacity'
      h='12'
      position='fixed'
      top={0}
      left={0}
      w='sm'
      borderRight='1px solid #ffffff20'
    >
      <AsideTopMenu />
      <AsideTopSearch />
    </Flex>
  );
}
