import Head from 'next/head'
import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout posts={allPostsData}>
      <Head>
        <title>SHOPIFY NOTE</title>
      </Head>
      nice
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: { id: string; title: string; date: string }[] = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
