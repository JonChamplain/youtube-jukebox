import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Youtube Jukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col 2xl:flex-row items-center justify-between">
        <div className="h-1/3 2xl:h-full w-full 2xl:w-1/3 bg-black text-white flex items-center justify-center">
          <span>Deck 1</span>
        </div>
        <div className="h-1/3 2xl:h-full w-full 2xl:w-1/3 flex items-center justify-center">
          <span>Control Panel</span>
        </div>
        <div className="h-1/3 2xl:h-full w-full 2xl:w-1/3 bg-black text-white flex items-center justify-center">
          <span>Deck 2</span>
        </div>
      </main>
    </>
  )
}

export default Home
