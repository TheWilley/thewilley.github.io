/*/
    Post file

    Displays a given blog post
/*/

import { motion } from 'framer-motion'
import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'
import configuration from '../config'
import { convertDateAndTime } from '../helpers/helpers'

function Post() {
    const [post, setPost] = useState<Post>({
        data: {
            id: '',
            attributes: {
                contents: '',
                title: '',
                thumbnail: {
                    data: {
                        attributes: {
                            url: ''
                        }
                    }
                },
                descritpion: '',
                publishedAt: '',
                updatedAt: ''
            }
        }
    })

    const renderPost = () => {
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
                    <img src={`${configuration.endpoint_url}${post?.data.attributes.thumbnail.data.attributes.url}`} className='h-96 max-h-full w-full object-cover' />
                    <div>
                        <h1 className="text-5xl font-bold mb-2 text-blue-500"> {post?.data.attributes.title} </h1>
                        <p className='text-gray-600 text-sm text-base'> By TheWilley · {`${convertDateAndTime(post.data.attributes.publishedAt)}`} {convertDateAndTime(post?.data.attributes.publishedAt) !== convertDateAndTime(post.data.attributes.updatedAt) &&
                            <span> · {" Updated " + convertDateAndTime(post.data.attributes.updatedAt)}</span>
                        }</p>
                        <hr className='mt-2 mb-2' />
                        <Markdown>
                            {String(post?.data.attributes.contents)}
                        </Markdown>
                    </div>
                </>
            )
        }
    }

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search)
        const id = queryParameters.get("id")
        fetch(`${configuration.endpoint_url}/api/blog-posts/${id}?populate=*`).then(data => data.text()).then(posts => setPost(JSON.parse(posts)))
    }, [])

    return (
        <motion.div initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            {renderPost()}
        </motion.div>
    )
}

export default Post