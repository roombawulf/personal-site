import Header from '../components/header/Header'

import '../styles/global.css'
import '../styles/layout.css'

import '@fontsource/amiko'
import '@fontsource/bebas-neue'


function App({ Component, pageProps }) {
  return (
    <>
      <Header className={'header'}/>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App