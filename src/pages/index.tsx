import Head from 'next/head'
import { useRef } from 'react'
import Header from '../components/header/header'
import Modal, { ModalFunctions } from '../components/modal/modal'
import Product from '../components/product/product'

export default function Home() {
  const modalRef = useRef<ModalFunctions>(null)

  const toggleModal = () => {
    modalRef.current?.toggle()
  }

  return (
    <>
      <Head>
        <title>XCO+ | Home </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <button onClick={toggleModal}>toggle</button>
        <Modal ref={modalRef} title='Produto'>
          <Product 
          name='Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular'
          code='#MLB2063247364'
          price={300.67}
          sales={4}
          stock={1}
          layout="columns"
          />

        </Modal>
      </main>
    </>
  )
}
