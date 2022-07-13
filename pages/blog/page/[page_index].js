/* eslint-disable react/jsx-key */
import {fs} from "fs"
import {path} from "path"
import {Layout} from "@/components/Layout"
import {matter} from 'gray-matter'
import {PostCard} from "@/components/PostCard"
import { getPosts } from '@/lib/posts'
import {TagList} from "@/components/TagList"
import {Pagination} from "@/components/Pagination"
import {Search} from "@/components/Search"

export default function Blog({ posts, numPages, currentPage, tags }) {
    return (
        <Layout>
          <Search/>
            <h1 className="text-5xl text-gray-200 border-b-4 p-5 font-bold border-pink-600">Blog</h1>
            <div className="flex justify-between">
                <div className="w-3/4 mr-10">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                        {posts.map((post, index) =>
                            <PostCard key={index} post={post} />)}
                    </div>
                    <Pagination currentPage={currentPage} numPages={numPages} />
                </div>
                <div className="w-1/4">
                    <TagList tags={tags} />
                </div>
            </div>

        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
  
    const numPages = Math.ceil(files.length / 4)
  
    let paths = []
  
    for (let i = 1; i <= numPages; i++) {
      paths.push({
        params: { page_index: i.toString() },
      })
    }
  
    return {
      paths,
      fallback: false,
    }
  }
  
  export async function getStaticProps({ params }) {
    const page = parseInt((params && params.page_index) || 1)
  
    const files = fs.readdirSync(path.join('posts'))
  
    const posts = getPosts()
  
    // Get categories for sidebar
    const tags = posts.map((post) => post.frontmatter.tag)
    const uniqueTags = [...new Set(tags)]
  
    const numPages = Math.ceil(files.length / 4)
    const pageIndex = page - 1
    const orderedPosts = posts.slice(
      pageIndex * 4,
      (pageIndex + 1) * 4
    )
  
    return {
      props: {
        posts: orderedPosts,
        numPages,
        currentPage: page,
        tags: uniqueTags,
      },
    }
  }
