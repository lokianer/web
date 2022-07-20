import Layout from '@/components/Layout'
import { Link } from 'next/link'
import PostCard from "@/components/PostCard"
import FeaturedPost from "@/components/FeaturedPost"
import { getPosts } from '@/lib/posts'
import Search from "@/components/Search"

export default function Home({posts}) {
  return (
    <Layout>
      <Search/>
            <FeaturedPost posts={posts} />


      <h1 className="text-5xl text-gray-200 border-b-4 p-5 font-bold border-pink-600">Latest Post</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        {posts.map((post, index) => 
          <PostCard key={index} post={post} />)}
      </div>
      <Link href='/blog'>
        <a className="block text-center font-semibold border border-gray-500 text-gray-200 rounded-md py-4 my-5 transition 
        duration-500 ease select-none hover:text-pink-500 
        hover:bg-gray-300 focus:outline-none focus:shadow-outline w-full">More Posts</a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  }
}
