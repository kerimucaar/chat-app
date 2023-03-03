import { Box } from '@chakra-ui/react';

export default function ContentMessage(props) {
  return (
    <Box bgColor='primaryBgOpacity' py={2} px={4} borderRadius={20} w='fit-content' fontSize={16} _notLast={{ mb: 2 }}>
      {props.message.content}
    </Box>
  );
}
