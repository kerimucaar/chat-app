import zustandStore from '../store';
import ContentMessage from '../components/Layout/Content/ContentMessagesContainer/ContentMessage';
import useAxios from '../hooks/useAxios';
import { BASE_URL } from '../services/BASE_URL';
import { Flex, Skeleton, useToast } from '@chakra-ui/react';

const FETCH_MESSAGES_CONFIG = {
  url: BASE_URL,
  method: 'POST'
};
const ERROR_TOAST_CONFIG = {
  position: 'top-right',
  title: 'Error!',
  description: 'Fatal error!',
  status: 'error',
  duration: 4000,
  isClosable: true
};

export default function IndexWithID() {
  const messages = zustandStore(state => state.messages);
  const toast = useToast();
  const { loading, error, response } = useAxios(FETCH_MESSAGES_CONFIG);

  if (error) return toast(ERROR_TOAST_CONFIG);
  if (loading)
    return (
      <Flex flexDirection='column' rowGap={2} position='absolute' bottom={0} w='full'>
        {Array.from(Array(15).keys()).map(item => (
          <Skeleton key={item} width='200px' height='60px' borderRadius={20} ml={item % 2 === 0 ? 'auto' : '0'} />
        ))}
      </Flex>
    );

  return messages.map((item, index) => <ContentMessage key={index} message={{ content: item }} />);
}
