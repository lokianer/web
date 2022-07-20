/* eslint-disable @next/next/no-img-element */
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import moment from "moment"
import Link from "next/link"
import Layout from "@/components/Layout"
import TagLabel from "@/components/TagLabel"
import {marked} from "marked"
export default function PostPage({ frontmatter: { title, author, author_image, cover_image, date, tag }, content, slug }) {
    return (
        <Layout title={title}>
            <Link href="/blog">
                <a className='bg-pink-600 hover:bg-gray-600 text-slate-50 font-bold py-3 px-8 rounded-full cursor-pointer'>
                    Go Back
                </a></Link><br/><br/><br/>
            <div className="bg-slate-500 shadow-lg rounded-lg lg:p-8 pb-12 mb-8 ">
                <div className="relative overflow-hidden shadow-md mb-6">
                    <img src={cover_image} height='1280px' width="720px" alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
                </div>
                <div className="px-4 lg:px-0">
                    <div className="flex items-center mb-8 w-full">
                        <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                            <img
                                alt={author}
                                height="30px"
                                width="30px"
                                className="align-middle rounded-full"
                                src={author_image}
                            />
                            <p className="inline align-middle ml-2 font-medium text-lg text-slate-50">{author}</p>

                        </div>
                        <div className="font-medium text-slate-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="align-middle">{moment(date).format('DD.MM.YYYY')}</span>

                        </div>

                    </div>
                    <span className='flex flex-wrap items-center justify-end'><TagLabel>{tag}</TagLabel></span>
                    <h1 className="mb-8 text-3xl font-semibold text-slate-50">{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
  
    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }))
  
    return {
      paths,
      fallback: false,
    }
  }
  
  export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', slug + '.md'),
      'utf-8'
    )
  
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
      props: {
        frontmatter,
        content,
        slug,
      },
    }
  }