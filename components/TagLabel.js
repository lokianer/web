import Link from 'next/link'

export default function TagLabel({children}) {
  return (
    <div className='text-gray-100 font-bold hover:text-pink-600'>
        <Link href={`/blog/tag/${children.toLowerCase()}`}>
            {children}
        </Link>
    </div>
  )

}
