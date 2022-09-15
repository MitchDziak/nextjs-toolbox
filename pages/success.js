import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox Template!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>YOU STUPID!</h1>
        <p>you stupid, go <Link href="/"><a>home</a></Link>.</p>
      </main>

      <Footer />
    </div>
  )
}
