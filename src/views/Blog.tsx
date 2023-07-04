/*/
    Blog file

    Displays all post from Strapi backend
/*/

import { faClock, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimate } from "framer-motion"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { convertDateAndTime, convertToURI, getPosts } from "../helpers/helpers"
import { Helmet } from 'react-helmet'

function Blog() {
    /**
     * Handles the state of blog posts
     */
    const [posts, setPosts] = useState<Posts | null>()
    const [scope, animate] = useAnimate()

    /**
     * Creates JSX for a blog entry
     * @returns The blog entry JSX
     */
    const allPosts = posts && posts.data.map((post) =>
        <li key={post.id} className='mt-5'>
            <Link to={`/blog/${convertToURI(post.attributes.title)}?id=${post.id}`}>
                <div className="rounded overflow-hidden min-w-full shadow-lg hover:bg-gray-100 p-3 dark:hover:bg-neutral-800 dark:bg-neutral-900 border dark:border-slate-500 dark:border-1">
                    <img className="w-full max-h-80 object-cover rounded" src={`${post.attributes.thumbnail.data.attributes.url}`} width='350px' height='320px' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-700  dark:text-white">{post.attributes.title}</div>
                        <p className="text-gray-900 text-base dark:text-white">
                            {post.attributes.description}
                        </p>
                        <hr className="m-2" />
                        <p className="text-gray-600 text-xs text-base italic dark:text-gray-400">{<FontAwesomeIcon icon={faClock} />}{` Posted on ${convertDateAndTime(post.attributes.publishedAt)}`}</p>
                        <div className="mt-1" />
                        {convertDateAndTime(post.attributes.publishedAt) !== convertDateAndTime(post.attributes.updatedAt) &&
                            <p className="text-gray-600 text-xs text-base italic dark:text-gray-400">{<FontAwesomeIcon icon={faPenToSquare} />}{" Updated on " + convertDateAndTime(post.attributes.updatedAt)}</p>
                        }

                    </div>
                </div>
            </Link>
        </li>
    )

    /**
     * Fetches the blog data onload
     */
    useEffect(() => {
        getPosts((posts) => {
            setPosts(posts)
            animate(scope.current, { opacity: 1 })
        })
    }, [])

    return (
        <>
            <Helmet>
                <title>TheWilley | Blog</title>
            </Helmet>
            <motion.div ref={scope} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className='w-full'>
                <ul className="list-none gap-2 [&>*:first-child]:mt-0">
                    {allPosts}
                </ul>
            </motion.div>
        </>
    )
}

export default Blog