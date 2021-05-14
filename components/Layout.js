import Head from 'next/head'
import styles from '../styles/Home.module.scss'


import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ben Prat Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
     

      </Head>

      <div className={styles.container}>
        <Header />

        {children}
      </div>
    </>
  )
}

export default Layout
