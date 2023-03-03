import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import AsideMessage from './AsideMessage';

const fakeMessages = [
  {
    owner: {
      id: 100000000,
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  }
];

export default function AsideMessages() {
  const router = useRouter();

  return (
    <Box>
      {fakeMessages.map((item, index) => (
        <AsideMessage key={index} data={item} active={fakeMessages.findIndex(x => x.owner.id == router?.query?.id)} />
      ))}
    </Box>
  );
}
