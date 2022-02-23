import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninja' />
      </Head>
      <div>
        
        <h1 className={styles.title}>HOMEPAGE</h1>
        <Image src="/ninja.png" alt="404 Logo" width={80} height={40}/>
        <p className={styles.text}>sample sample sample</p>
        <p className={styles.text}>sample sample sample</p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>

      </div>
    </>
  )
}
