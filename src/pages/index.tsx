import Head from 'next/head'
import ProductsPagination from '../components/productsPagination/productsPagination'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>XCO+ | Home </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <section>
        <ProductsPagination title='Todos os Produtos' config={{limit: 5, category: 'common', page: 1 }} layout="line" />
      
      </section>
    </>
  )
}
