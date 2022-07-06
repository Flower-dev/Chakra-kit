import Head from 'next/head'
import { Button, useColorMode } from '@chakra-ui/react';

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Head>
        <title>Chakra-Kit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    </>
  )
}
