import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>nice</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>back to home</a>
          </Link>
        </h2>
        <a href="/">back to home</a>
      </Layout>
    </>
  )
}
