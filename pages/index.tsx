import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"

const Home: NextPage = () =>{
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
       
      </Head>
        {/*Header*/}
        <Header/>
        {/*Banner*/}
        <Banner/>

        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">
              Explore Nearby
            </h2>
            {/* Pull some data from a server - API endpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-4">
              
                
              
              </div>
          </section>

      
        </main>
      
    </div>
  )
}

export default Home



  

