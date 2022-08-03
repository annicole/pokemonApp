import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
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

export default Home
