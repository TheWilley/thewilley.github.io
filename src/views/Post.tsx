/*/
    Post file

    Displays a given blog post
/*/

import { motion } from 'framer-motion';
import 'github-markdown-css';
import { useEffect, useState } from 'react';
import { convertDateAndTime, getSinglePost } from '../helpers/helpers';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Loader from '../components/Loader';

function Post() {
    const [post, setPost] = useState<Posts | null>()
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

    const getMetaData = () => {
        if (post && post.data) {
            return (
                <Helmet>
                    <title>{`TheWilley | ${post.data[post?.data.length - 1].attributes.title}`}</title>
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={`${post.data[post?.data.length - 1].attributes.title}`} />
                    <meta property="og:image" content={`${post.data[post?.data.length - 1].attributes.thumbnail.data.attributes.url}`} />
                    <meta property="og:description" content={post.data[post?.data.length - 1].attributes.description} />
                    <meta property="og:url" content={window.location.href} />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={`${post.data[post?.data.length - 1].attributes.title}`} />
                    <meta name="twitter:image" content={`${post.data[post?.data.length - 1].attributes.thumbnail.data.attributes.url}`} />
                    <meta name="twitter:description" content={post.data[post?.data.length - 1].attributes.description} />
                    <meta name="twitter:url" content={window.location.href} />
                </Helmet>
            )
        }
    }

    // Renders the post
    const renderPost = () => {
        if (post && post.data) {
            const found_post = post.data[post.data.length - 1]
            if (found_post != undefined) {
                return (
                    <div className='max-w-screen-2xl'>
                        <img src={`${found_post.attributes.thumbnail.data.attributes.url}`} className='aspect-video w-full object-cover border dark:border-slate-500 rounded' loading="lazy" />
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
        } else {
            return (
                <div className='text-center text-8xl rounded p-3 h-[60vh] flex items-center justify-center'>
                    <div className='border border-4 p-3 rounded'>
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <div className='text-3xl ml-2'>
                            Error loading post
                            <p className='text-2xl'>
                                Please try again later
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <Loader effect={(callback: () => void) => {
            const id = window.location.hash.split("/").pop()
            getSinglePost((post) => {
                setPost(post)
                callback()
            }, id)
        }}>
            {getMetaData()}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='w-full'>
                {renderPost()}
            </motion.div>
        </Loader>
    )
}

export default Post