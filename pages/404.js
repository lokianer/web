import Layout from "../components/Layout"
import Image from "next/image"

export default function NotFoundPage() {
  return (
    <Layout title='Page not found'>
        <div className="flex flex-col items-center mt-20">
            <Image src="/images/logo.png" className="align-middle rounded-full" width={200} height={200} alt="Page not found"/>
            <center>
            <h1 className="text-6xl text-gray-200 my-5">
                Return, you must!
            </h1>
            <h2 className="text-4xl text-gray-200 my-5">
                This is not the page you are looking for.
            </h2>
            <h5 className="text-gray-200 my-5">Error 404 | Page not found</h5>
            </center>
        </div>

    </Layout>
  )
}
