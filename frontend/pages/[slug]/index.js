import Head from 'next/head'
import { Container, Image, Text, Button, Link, color } from '@chakra-ui/react'
import Display from '@/components/Display'
import { API_URL } from '@/config/index'
import { strapiAxios } from '@/utils/strapi'

export default function Page({ page }) {
  return (
    <div>
      <style jsx global>{`
        body {
          background: ${page?.theme
            ? page.theme.backgroundColor
            : 'white'} !important;
        }
      `}</style>
      <Head>
        <title>@{page.slug}</title>
      </Head>
      <Container centerContent>
        <Display page={page} theme={page.theme} />
      </Container>
    </div>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const data = await strapiAxios()
    .get(`/pages?slug=${slug}`)
    .then((res) => res.data)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page: data[0],
    },
  }
}
