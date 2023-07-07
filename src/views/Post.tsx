/*/
    Post file

    Displays a given blog post
/*/

import { motion, useAnimate } from 'framer-motion';
import 'github-markdown-css';
import { useEffect, useState } from 'react';
import configuration from '../config';
import { convertDateAndTime } from '../helpers/helpers';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Helmet} from "react-helmet";

function Post() {
    const [post, setPost] = useState<Post | null>()
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
            if (post == null) {
                return (
                    <div className='grid h-screen place-items-center text-3xl font-bold'>
                        Error loading post, sorry!
                        😢
                    </div>
                )
            } else {
                return (
                    <div className='max-w-screen-2xl'>
                        <img src={`${post?.data.attributes.thumbnail.data.attributes.url}`} className='h-96 min-w-full max-h-64 w-full object-cover border dark:border-slate-500 rounded' loading="lazy" />
                        <div>
                            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold mb-2 text-blue-500"> {post?.data.attributes.title} </h1>
                            <p className='text-gray-600 text-sm text-base dark:text-gray-400'> By TheWilley · {`${convertDateAndTime(post.data.attributes.publishedAt)}`} {convertDateAndTime(post?.data.attributes.publishedAt) !== convertDateAndTime(post.data.attributes.updatedAt) &&
                                <span> · {" Updated " + convertDateAndTime(post.data.attributes.updatedAt)}</span>
                            }</p>
                            <hr className='mt-2 mb-2' />
                            <div className='markdown-body dark:!bg-neutral-950'>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {String(post?.data.attributes.contents)}
                                </ReactMarkdown>
                            </div>
                        </div >
                    </div >
                )
            }
        }
    }

    useEffect(() => {
        const hashFragment = window.location.hash;
        const queryIndex = hashFragment.indexOf("?");
        const queryString = hashFragment.slice(queryIndex + 1);
        const queryParameters = new URLSearchParams(queryString);
        const id = queryParameters.get("id");

        fetch(`${configuration.endpoint_url}/api/blog-posts/${id}?populate=*`)
            .then(data => data.text())
            .then(posts => setPost(JSON.parse(posts)))
            .catch(() => setPost(null))
            .finally(() => {
                animate(scope.current, { opacity: 1 })
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>{'TheWilley | ' + post?.data.attributes.title}</title>
                <meta name="og:title" content={post?.data.attributes.title}></meta>
                <meta name="og:image" content={post?.data.attributes.thumbnail.data.attributes.url}></meta>
            </Helmet>
            <motion.div ref={scope} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
                {renderPost()}
            </motion.div>
        </>
    )
}

export default Post