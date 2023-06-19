/*/
    Post file

    Displays a given blog post
/*/

import { motion, useAnimate } from 'framer-motion';
import 'github-markdown-css';
import 'highlight.js/styles/github.css';
import Markdown from 'markdown-to-jsx';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import configuration from '../config';
import { convertDateAndTime } from '../helpers/helpers';

function Post() {
    const [post, setPost] = useState<Post | null>()
    const [scope, animate] = useAnimate()

    // Codeblock component for markdown-to-jsx
    const CodeBlock: FC<PropsWithChildren> = ({ children }) => {
        children = children as ReactElement
          
        const launguage = children.props.className ? children.props.className.replace('lang-', '') : ''
        return (
            <SyntaxHighlighter language={launguage}>
                {children.props.children}
            </SyntaxHighlighter>
        )
    };

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
                    <div className='max-w-screen-2xl p-3 dark:!bg-neutral-950'>
                        <img src={`${configuration.endpoint_url}${post?.data.attributes.thumbnail.data.attributes.formats.medium.url}`} className='h-96 max-h-64 w-full object-cover border rounded' loading="lazy" />
                        <div>
                            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold mb-2 text-blue-500"> {post?.data.attributes.title} </h1>
                            <p className='text-gray-600 text-sm text-base dark:text-gray-400'> By TheWilley · {`${convertDateAndTime(post.data.attributes.publishedAt)}`} {convertDateAndTime(post?.data.attributes.publishedAt) !== convertDateAndTime(post.data.attributes.updatedAt) &&
                                <span> · {" Updated " + convertDateAndTime(post.data.attributes.updatedAt)}</span>
                            }</p>
                            <hr className='mt-2 mb-2' />
                            <div className='markdown-body dark:!bg-neutral-950'>
                                <Markdown options={{
                                    overrides: {
                                        pre: CodeBlock
                                    },
                                }}>
                                    {String(post?.data.attributes.contents)}
                                </Markdown>
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