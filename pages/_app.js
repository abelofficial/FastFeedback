import { AuthProvider } from '@lib/auth';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import theme from '@styles/theme';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
