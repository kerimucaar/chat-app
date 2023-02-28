import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import colors from '../theme/colors';
import fonts from '../theme/fonts';
import components from '../theme/components';
import '@fontsource/baloo-2/latin.css';
import Layout from '../components/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

const theme = extendTheme({
  fonts,
  colors,
  components
});

// FONTAWESOME CONFIG
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
