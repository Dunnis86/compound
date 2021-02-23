import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #004E7C;
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
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    
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
      <title>Compound AS</title>
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico'/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
    </Head>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </ThemeProvider>
  </>
  )
}

export default MyApp
