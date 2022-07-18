/* eslint-disable @next/next/no-img-element */
import { moment } from 'moment'
import { Link } from 'next/link'
import { TagLabel } from './TagLabel'

import React from 'react'

export default function PostCard({post}) {
  return (
    <div className='bg-slate-500 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>

      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        width={1200}
        height={800}
        className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg text-slate-50'
        />
        </div>
        <h1 className='transistion duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold text-slate-50'>
          <Link href={`/blog/${post.slug}`}>
            {post.frontmatter.title}
          </Link>
        </h1>

        <div className='block lg-flex text-center items-center justify-conter mb-8 w-full'>

          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
              <img
              src={post.frontmatter.author_image}
              alt={post.frontmatter.author}
              height='40px'
              width='40px'
              className='align-middle rounded-full'
              />
              <p className='inline align-middle text-slate-50 ml-2 text-lg'>{post.frontmatter.author}</p>
          </div>
          <div className='font-medium text-slate-50'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>
          {moment(post.frontmatter.date).format('DD.MM.YY')}
        </span><br/>
        <span>
        <TagLabel>{post.frontmatter.tag}</TagLabel>
        </span>
          </div>
        </div>
        <p className='text-slate-50 text-center text-lg font-normal px-4 lg:px-20 mb-8 break-normal'> {post.frontmatter.excerpt}</p>

        <div className='text-center'>
          <Link href={`/blog/${post.slug}`}>
            <a className='bg-black hover:bg-pink-600 text-slate-50 font-bold py-3 px-8 rounded-full cursor-pointer'>
              Read More
            </a>
          </Link>
        </div>

    </div>
          
  )
}
