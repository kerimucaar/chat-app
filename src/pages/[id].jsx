import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function IndexWithID() {
  const router = useRouter();

  return <Text>{router.query.id}</Text>;
}
