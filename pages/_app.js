import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #047aed;
    --secondary-color: #1c3fa8;
    --dark-color: #002240;
    --light-color: #f4f4f4;
    --success-color: #5cb85c;
    --error-color: #d9534f;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    
  }

  .container {
    margin: 0 auto;
    overflow: auto;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
  <>
  <GlobalStyle/>
  <ThemeProvider theme={theme}>
    <Head>
      <title>Compound AS - A 21st Century Pharmaceutical Company</title>
      <link rel='icon' href='favico.ico'/>
    </Head>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </ThemeProvider>
  </>
  )
}

export default MyApp
