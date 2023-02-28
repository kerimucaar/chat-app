import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './AsideMessage.module.css';

export default function AsideMessage(props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${props.data.owner.id}`);
  };

  return (
    <Box
      p={2}
      borderRadius={15}
      cursor='pointer'
      transition='0.010s all ease-in'
      _hover={{
        bgColor: '#70707040'
      }}
      _activeLink={{
        color: 'red'
      }}
      onClick={onClick}
    >
      <Flex alignItems='center' columnGap={4}>
        <Image
          src={props.data.owner.photo}
          width={50}
          height={50}
          alt={`${props.data.owner.name}'s Photo`}
          className={styles.img}
        />
        <Box>
          <Text fontWeight={600} fontSize={20}>
            {props.data.owner.name}
          </Text>
          <Text noOfLines={1} fontSize={14}>
            {props.data.message}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
