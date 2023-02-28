import { Box, Flex } from '@chakra-ui/react';
import { faEllipsisVertical, faGripLinesVertical, faPhone, faRulerVertical, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const actions = [faSearch, faPhone, faEllipsisVertical];

export default function ContentTopActions() {
  return (
    <Box>
      <Flex columnGap={6}>
        {actions.map((item, index) => (
          <FontAwesomeIcon
            key={index}
            icon={item}
            style={{ color: 'var(--chakra-colors-mutedText)', cursor: 'pointer' }}
          />
        ))}
      </Flex>
    </Box>
  );
}
