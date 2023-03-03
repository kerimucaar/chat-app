import zustandStore from '@/store';
import { Box, Center, Flex, Input, InputGroup, InputLeftElement, InputRightElement, ScaleFade } from '@chakra-ui/react';
import { faChevronRight, faFile, faLaugh, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function ContentBottomInput(props) {
  const [input, setInput] = useState('');
  const pushMessage = zustandStore(state => state.pushMessage);

  useEffect(() => {
    if (!input.length) return;

    const detectEnter = key => {
      if (key.key !== 'Enter') return;

      setInput('');
      pushMessage(input);
      setTimeout(() => {
        props.containerRef.current.scrollTo({
          top: props.containerRef.current.scrollHeight
        });
      }, 0);
    };

    document.addEventListener('keydown', detectEnter);

    return () => document.removeEventListener('keydown', detectEnter);
  }, [input]);

  return (
    <Box position='absolute' h={10} bottom={1} w='50%' left='50%' transform='translateX(-50%)'>
      <Flex alignItems='center' columnGap={2}>
        <InputGroup h={10}>
          <InputLeftElement h={10}>
            <FontAwesomeIcon icon={faLaugh} style={{ cursor: 'pointer' }} />
          </InputLeftElement>
          <Input
            type='text'
            h={10}
            placeholder='Message'
            borderRadius='full'
            borderColor='whiteAlpha.300'
            bgColor='whiteAlpha.100'
            onChange={e => setInput(e.target.value)}
            value={input}
          />
          <InputRightElement h={10}>
            <FontAwesomeIcon icon={faFile} style={{ cursor: 'pointer' }} />
          </InputRightElement>
        </InputGroup>
        <Center backgroundColor='whiteAlpha.100' w={10} h={10} borderRadius='full' cursor='pointer'>
          <ScaleFade initialScale={0.5} in={!input.length}>
            <FontAwesomeIcon icon={faMicrophone} style={{ display: !input.length ? 'block' : 'none' }} />
          </ScaleFade>
          <ScaleFade initialScale={0.5} in={!!input.length}>
            <FontAwesomeIcon icon={faChevronRight} style={{ display: !!input.length ? 'block' : 'none' }} />
          </ScaleFade>
        </Center>
      </Flex>
    </Box>
  );
}
