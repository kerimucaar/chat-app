import { defineStyleConfig } from '@chakra-ui/react';

const components = {
  Button: defineStyleConfig({
    baseStyle: {
      bgColor: 'transparent !important'
    }
  })
};

export default components;
