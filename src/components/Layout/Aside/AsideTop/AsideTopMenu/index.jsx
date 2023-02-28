import { Menu, MenuButton, Button, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AsideTopMenu() {
  return (
    <Menu>
      <MenuButton as={Button} mb={-1}>
        <FontAwesomeIcon icon={faBars} style={{color: 'var(--chakra-colors-whiteAlpha-600)'}} />
      </MenuButton>
      <MenuList>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
      </MenuList>
    </Menu>
  );
}
