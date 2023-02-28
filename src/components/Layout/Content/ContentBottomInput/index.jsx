import { Box, Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { faFile, faLaugh, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContentBottomInput() {
  return (
    <Box position='absolute' bottom='2' w='50%' left='50%' transform='translateX(-50%)'>
      <Flex alignItems='center' columnGap={2}>
        <InputGroup>
          <InputLeftElement>
            <FontAwesomeIcon icon={faLaugh} style={{ cursor: 'pointer' }} />
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Message'
            borderRadius='full'
            borderColor='whiteAlpha.300'
            bgColor='whiteAlpha.100'
          />
          <InputRightElement>
            <FontAwesomeIcon icon={faFile} style={{ cursor: 'pointer' }} />
          </InputRightElement>
        </InputGroup>
        <FontAwesomeIcon
          icon={faMicrophone}
          style={{
            backgroundColor: 'var(--chakra-colors-whiteAlpha-100)',
            borderRadius: '50%',
            padding: 12,
            cursor: 'pointer'
          }}
        />
      </Flex>
    </Box>
  );
}
