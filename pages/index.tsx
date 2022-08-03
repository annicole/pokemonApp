import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Layout title="Pokemon">
      <Button color="gradient">
        Hola
      </Button>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home;

