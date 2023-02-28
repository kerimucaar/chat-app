import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AsideTopSearch() {
  return (
    <InputGroup>
      <InputLeftElement mt={-1}>
        <FontAwesomeIcon icon={faSearch} size='xs' style={{ color: 'var(--chakra-colors-whiteAlpha-600)' }} />
      </InputLeftElement>
      <Input
        size='sm'
        type='tel'
        placeholder='Search'
        borderRadius='full'
        borderColor='whiteAlpha.300'
        bgColor='whiteAlpha.100'
      />
    </InputGroup>
  );
}
