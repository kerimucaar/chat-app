import { Menu, MenuButton, Button, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AsideTopMenu() {
  return (
    <Menu>
      <MenuButton as={Button} mb={-1}>
        <FontAwesomeIcon icon={faBars} style={{ color: 'var(--chakra-colors-whiteAlpha-600)' }} />
      </MenuButton>
      <MenuList bgColor='primaryBg' border={'1px solid var(--chakra-colors-whiteAlpha-400)'}>
        {Array.from(Array(10).keys()).map(item => (
          <MenuItem
            key={item}
            bgColor='primaryBg'
            _hover={{
              bgColor: 'blackAlpha.600'
            }}
          >
            Test
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
