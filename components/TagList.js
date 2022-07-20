import Link from "next/link"

export default function TagList({tags}) {
  return (
    <div className="w-full p-5 bg-slate-500 shadow-lg rounded-lg mt-6">
        <h1 className="text-center text-slate-50 font-semibold text-3xl
        ">Tags</h1>
        <ul className="divide-y divide-gray-300">
            {tags.map((tag, index) =>(
                    <Link key={index} href={`/blog/tag/${tag.toLowerCase()}`}>
                        <li className="text-center text-slate-50 cursor-pointer hover:text-pink-600">{tag} </li>
                    </Link>
            ))}

        </ul>

    </div>
  )
}
