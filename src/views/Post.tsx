/*/
    Post file

    Displays a given blog post
/*/

import { motion, useAnimate } from 'framer-motion'
import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'
import configuration from '../config'
import { convertDateAndTime } from '../helpers/helpers'
import 'github-markdown-css'

function Post() {
    const [post, setPost] = useState<Post | null>()
    const [scope, animate] = useAnimate()

    const renderPost = () => {
        if (post != undefined) {
            if (post == null) {
                return (
                    <div className='grid h-screen place-items-center text-3xl font-bold'>
                        Error loading post, sorry!
                        😢
                    </div>
                )
            } else {
                return (
                    <>
                        <img src={`${configuration.endpoint_url}${post?.data.attributes.thumbnail.data.attributes.url}`} className='h-96 max-h-full w-full object-cover' loading="lazy" />
                        <div>
                            <h1 className="text-5xl font-bold mb-2 text-blue-500"> {post?.data.attributes.title} </h1>
                            <p className='text-gray-600 text-sm text-base'> By TheWilley · {`${convertDateAndTime(post.data.attributes.publishedAt)}`} {convertDateAndTime(post?.data.attributes.publishedAt) !== convertDateAndTime(post.data.attributes.updatedAt) &&
                                <span> · {" Updated " + convertDateAndTime(post.data.attributes.updatedAt)}</span>
                            }</p>
                            <hr className='mt-2 mb-2' />
                            <div className='markdown-body'>
                                <Markdown>
                                    {String(post?.data.attributes.contents)}
                                </Markdown>
                            </div>
                        </div >
                    </>
                )
            }
        }
    }

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search)
        const id = queryParameters.get("id")

        fetch(`${configuration.endpoint_url}/api/blog-posts/${id}?populate=*`)
            .then(data => data.text())
            .then(posts => setPost(JSON.parse(posts)))
            .catch(() => setPost(null))
            .finally(() => {
                animate(scope.current, { transform: 'scale(1)', opacity: 1 })
            })
    }, [])

    return (
        <motion.div ref={scope} initial={{ transform: 'scale(0.8)', opacity: 0 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            {renderPost()}
        </motion.div>
    )
}

export default Post