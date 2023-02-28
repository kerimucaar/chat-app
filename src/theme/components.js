import { defineStyleConfig } from '@chakra-ui/react';

const components = {
  Button: defineStyleConfig({
    baseStyle: {
      bgColor: 'transparent !important'
    }
  }),

  MenuList: defineStyleConfig({
    baseStyle: {
      bgColor: 'red !important'
    }
  }),

  MenuItem: defineStyleConfig({
    baseStyle: {
      bgColor: 'red !important'
    }
  })
};

export default components;
