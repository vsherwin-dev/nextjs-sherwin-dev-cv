// Components
import Navbar from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Basic = ({ children }) => {

  return(
    <>
      <Head>
        <title>&#60;sherwin-dev /&#62;</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Basic;