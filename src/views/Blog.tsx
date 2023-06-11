/*/
    Blog file

    Displays all post from Strapi backend
/*/

import { faClock, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import configuration from "../config"
import { convertDateAndTime, convertToURI } from "../helpers/helpers"

function Blog() {
    /**
     * Handles the state of blog posts
     */
    const [posts, setPosts] = useState<Posts>({
        data: [{
            id: "",
            attributes: {
                contents: "", title: "",
                thumbnail: {
                    data: {
                        attributes: {
                            url: ""
                        }
                    }
                },
                descritpion: "",
                publishedAt: "",
                updatedAt: ""
            }
        }]
    })

    /**
     * Creates JSX for a blog entry
     * @returns The blog entry JSX
     */
    const allPosts = posts.data.map((post) =>
        <li key={post.id}>
            <Link to={`/blog/${convertToURI(post.attributes.title)}?id=${post.id}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={`${configuration.endpoint_url}${post.attributes.thumbnail.data.attributes.url}`} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-700">{post.attributes.title}</div>
                        <p className="text-gray-900 text-base">
                            {posts.data[0].attributes.descritpion}
                        </p>
                        <hr className="m-2" />
                        <p className="text-gray-600 text-xs text-base italic">{<FontAwesomeIcon icon={faClock} />}{` Posted on ${convertDateAndTime(post.attributes.publishedAt)}`}</p>
                        <div className="mt-1" />
                        {convertDateAndTime(post.attributes.publishedAt) !== convertDateAndTime(post.attributes.updatedAt) &&
                            <p className="text-gray-600 text-xs text-base italic">{<FontAwesomeIcon icon={faPenToSquare} />}{" Updated on " + convertDateAndTime(post.attributes.updatedAt)}</p>
                        }

                    </div>
                </div>
            </Link>
        </li>
    )

    const renderPosts = () => {
        if (posts.data == null) {
            return (
                <div className='grid h-screen place-items-center text-3xl font-bold'>
                    Error loading blog, sorry!
                    😢
                </div>
            )
        } else {
            return (
                <>
                    <h1 className="text-center text-5xl font-bold mb-5 text-blue-500"> Blog </h1>
                    <ul className="list-none container grid md:grid-cols-1 lg:grid-cols-2 gap-2">
                        {allPosts}
                    </ul>
                </>
            )
        }
    }

    /**
     * Fetches the blog data onload
     */
    useEffect(() => {
        fetch(`${configuration.endpoint_url}/api/blog-posts?populate=*`).then(data => data.text()).then(posts => setPosts(JSON.parse(posts)))
    }, [])

    return (
        <motion.div initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            {renderPosts()}
        </motion.div>
    )
}

export default Blog