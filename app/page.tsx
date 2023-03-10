/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <section id='3dtree' className='py-5'>
        <div className="container px-4 py-5">
          <div className="row">
            <div className="col text-center">
              <h1 className='small'>arvore 3d rodando</h1>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='py-5'>
        <div className="container px-4 py-5">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              {/* <h2 className={styles.bg}>olá, eu sou um desenvolvedor Front-end, vivendo atualmente em Belo Horizonte!</h2> */}
              <h2 className={styles.bg}>Hello, I'm an indie app developer based in Japan!</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
