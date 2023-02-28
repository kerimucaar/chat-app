import { Box } from '@chakra-ui/react';
import AsideMessage from './AsideMessage';

const fakeMessages = [
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  },
  {
    owner: {
      id: '100000000',
      name: 'Kerim UÇAR',
      photo: '/profiles/ku.jfif',
      shortName: 'KU'
    },
    message: 'Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!Welcome to the App!',
    date: new Date('28.02.2023')
  }
];

export default function AsideMessages() {
  return (
    <Box mt={2} px={1}>
      {fakeMessages.map((item, index) => (
        <AsideMessage key={index} data={item} />
      ))}
    </Box>
  );
}
