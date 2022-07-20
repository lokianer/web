/* eslint-disable react/jsx-key */
import { fs } from "fs"
import { path } from "path"
import Layout from "@/components/Layout"
import { matter } from 'gray-matter'
import PostCard from "@/components/PostCard"
import { getPosts } from '@/lib/posts'
import TagList from "@/components/TagList"

export default function TagPage({posts, tagName, tags}) {
  return (
    <Layout>
            <h1 className="text-5xl text-gray-200 border-b-4 p-5 font-bold border-pink-600">{tagName}</h1>
            <div className="flex justify-between">
                <div className="w-3/4 mr-10">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                        {posts.map((post, index) =>
                            <PostCard key={index} post={post} />)}
                    </div>
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

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.tag.toLowerCase()
  })

  const paths = categories.map((tag) => ({
    params: { tag_name: tag },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { tag_name } }) {
  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const tags = posts.map((post) => post.frontmatter.tag)
  const uniqueTags = [...new Set(tags)]

  // Filter posts by category
  const tagPosts = posts.filter(
    (post) => post.frontmatter.tag.toLowerCase() === tag_name
  )

  return {
    props: {
      posts: tagPosts,
      tagName: tag_name,
      tags: uniqueTags,
    },
  }
}
