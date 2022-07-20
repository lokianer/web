import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout ({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Header />
        <main className='container mx-auto my-7'>{children}</main>
        <Footer/>
    </div>
  )
}

Layout.defaultProps = {
    title: "Lokianer's WebSpace",
    keywords: 'blog, coding, poetry, programming, coding, design',
    description: 'Just a personal blog. I write about programming, design, and poetry.'
}

