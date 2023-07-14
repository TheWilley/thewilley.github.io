/*/
    Blog file

    Displays all post from Strapi backend
/*/

import { faClock, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimate } from "framer-motion"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { convertDateAndTime, getPosts } from "../helpers/helpers"
import { Helmet } from 'react-helmet'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

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
    const allPosts = posts && posts.data ? posts.data.map((post) =>
        <li key={post.id} className='mt-5'>
            <Link to={`/blog/${post.attributes.slug}`}>
                <div className="rounded overflow-hidden min-w-full shadow-lg hover:bg-gray-100 p-3 dark:hover:bg-neutral-800 dark:bg-neutral-900 border dark:border-slate-500 dark:border-1">
                    <img className="w-full aspect-video object-cover rounded" src={`${post.attributes.thumbnail.data.attributes.url}`} width='350px' height='320px' />
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
    ) : (
        <div className='text-center text-8xl rounded p-3 h-[60vh] flex items-center justify-center'>
            <div className='border border-4 p-3 rounded'>
                <FontAwesomeIcon icon={faCircleExclamation} />
                <div className='text-3xl ml-2'>
                    Error loading blog
                    <p className='text-2xl'>
                        Please try again later
                    </p>
                </div>
            </div>
        </div>
    )

    const getMetaData = () => {
        return (
            <Helmet>
                <title>TheWilley</title>
                <meta name="title" content="TheWilley" />
                <meta name="description" content="Official website built with React" />
                <meta property="og:url" content="https://thewilley.github.io/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="TheWilley" />
                <meta property="og:description" content="Official website built with React" />
                <meta property="og:image" content="https://res.cloudinary.com/dfvuecp0c/image/upload/v1688991253/logo_09265acb48.png?updated_at=2023-07-10T12:14:13.535Z" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://thewilley.github.io/" />
                <meta property="twitter:title" content="TheWilley" />
                <meta property="twitter:description" content="Official website built with React" />
                <meta name="twitter:image" content="https://res.cloudinary.com/dfvuecp0c/image/upload/v1688991253/logo_09265acb48.png?updated_at=2023-07-10T12:14:13.535Z" />
            </Helmet>
        )
    }

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
            {getMetaData()}
            <motion.div ref={scope} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className='w-full'>
                <ul className="list-none gap-2 [&>*:first-child]:mt-0">
                    {allPosts}
                </ul>
            </motion.div>
        </>
    )
}

export default Blog