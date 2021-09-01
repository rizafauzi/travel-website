import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '../config/client'

import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import Layout from '../components/templates/Layout'
import TripSection from '../components/organisms/TripSection'
import PostSection from '../components/organisms/PostSection'
import Benefit from '../components/organisms/Benefit'
import "../styles/global.scss"

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Layout>
          <Benefit />
          <TripSection />
          <PostSection />
        </Layout>
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default Home