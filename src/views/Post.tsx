/*/
    Post file

    Displays a given blog post
/*/

import { motion, useAnimate } from 'framer-motion';
import 'github-markdown-css';
import { useEffect, useState } from 'react';
import { convertDateAndTime, getSinglePost } from '../helpers/helpers';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Helmet } from "react-helmet";

function Post() {
    const [post, setPost] = useState<Posts | null>()
    const [scope, animate] = useAnimate()
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    // To check for mode
    useEffect(() => {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (prefersDark) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [theme]);

    // Renders the post
    const renderPost = () => {
        if (post != undefined) {
            const found_post = post.data[post.data.length - 1]
            console.log(found_post)
            if (found_post != undefined) {
                return (
                    <div className='max-w-screen-2xl'>
                        <img src={`${found_post.attributes.thumbnail.data.attributes.url}`} className='h-96 min-w-full max-h-64 w-full object-cover border dark:border-slate-500 rounded' loading="lazy" />
                        <div>
                            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold mb-2 text-blue-500"> {found_post.attributes.title} </h1>
                            <p className='text-gray-600 text-sm text-base dark:text-gray-400'> By TheWilley · {`${convertDateAndTime(found_post.attributes.publishedAt)}`} {convertDateAndTime(found_post.attributes.publishedAt) !== convertDateAndTime(found_post.attributes.updatedAt) &&
                                <span> · {" Updated " + convertDateAndTime(found_post.attributes.updatedAt)}</span>
                            }</p>
                            <hr className='mt-2 mb-2' />
                            <div className='markdown-body dark:!bg-neutral-950'>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {String(found_post.attributes.contents)}
                                </ReactMarkdown>
                            </div>
                        </div >
                    </div >
                )
            }
        }
    }

    useEffect(() => {
        const id = window.location.hash.split("/").pop()
        getSinglePost((post) => {
            setPost(post)
            animate(scope.current, { opacity: 1 })
        }, id)
    }, [])

    return (
        <>
            <Helmet>
                <title>{`TheWilley | ${post && post.data[post?.data.length - 1].attributes.title}`}</title>
                <meta name="og:title" content={`${post && post.data[post?.data.length - 1].attributes.title}`}></meta>
                <meta name="og:image" content={`${post && post.data[post?.data.length - 1].attributes.thumbnail.data.attributes.formats.small.url}`}></meta>
            </Helmet>
            <motion.div ref={scope} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className='w-full'>
                {renderPost()}
            </motion.div>
        </>
    )
}

export default Post