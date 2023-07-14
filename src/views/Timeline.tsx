import { motion, useAnimate } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { getTimeline } from '../helpers/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Loader from '../components/Loader';

const imagePerRow = 100

function Timeline() {
    const [scope, animate] = useAnimate()
    const [timeline, setTimeline] = useState<Timeline | null>()
    const [next, setNext] = useState(imagePerRow);
    const [iunderstand, setIunderstand] = useState(false)

    const handleMorePosts = () => {
        setNext(next + imagePerRow);
    };

    const fixContent = (string: string) => {
        const regex = /(\d{3,})/g;
        let dateValid = false

        const modifiedString = string.split(regex).map((item, index) => {
            if (regex.test(item)) {
                dateValid = true
                return <span key={index} className='text-2xl text-blue-500'>{item}</span>;
            }
            return item;
        });

        return { modifiedString: modifiedString, dateFound: dateValid }
    }

    const renderList = () => {
        if (timeline && timeline.data) {
            return timeline.data.attributes.data.messages.slice(0, next).map((item, index) => {
                const fixedContent = fixContent(item.content)

                // To stop short posts
                if (item.content.length < 10) return;

                // To stop posts without a date
                if (!fixedContent.dateFound) return;

                // Return value
                return (
                    <li className='relative' key={item.timestamp}>
                        <div className='border border-blue-300 mt-2 w-full rounded'>
                            <div className='bg-blue-300 dark:bg-neutral-900 p-2 text-center'>
                                <div className='text-3xl underline font-bold'>{index}</div>
                                <div className='italic'>{item.author.name}</div>
                            </div>
                            <div className='p-4 font-serif'>
                                {fixedContent.modifiedString}
                            </div>
                        </div>
                    </li>
                )
            })
        } else {
            return (
                <div className='text-center text-8xl rounded p-3 h-[60vh] flex items-center justify-center'>
                    <div className='border border-4 p-3 rounded'>
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <div className='text-3xl ml-2'>
                            Error loading timeline
                            <p className='text-2xl'>
                                Please try again later
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const getMetaData = () => {
        return (
            <Helmet>
                <title>TheWilley | Timeline</title>
            </Helmet>
        )
    }

    return (
        <Loader effect={(callback) => {
            getTimeline((timeline) => {
                setTimeline(timeline)
                callback()
                animate(scope.current, { opacity: 1 })
            })
        }}>
            {getMetaData()}
            <motion.div ref={scope} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
                <div className='text-center text-white bg-green-500 dark:bg-green-800 rounded p-3 w-full'> Welcome! This is the result of a game we played on discord where we came up with fictional events for a timeline. This lead to some pretty wild and fun moments, which I would like to share! </div>
                <div className={`text-center text-white bg-red-500 dark:bg-red-800 rounded p-3 w-full mt-2 ${iunderstand && 'hidden'}`}>
                    Warning! This content contains foul language and sensitive subjects. Please be warry of this before you proceed.
                    <div>
                        <button className='border rounded p-2 mt-5 hover:bg-green-500 dark:hover:bg-green-800 transition' onClick={() => setIunderstand(true)}> I understand </button>
                    </div>
                </div>
                <ul className={`${!iunderstand && 'blur-sm'}`}>
                    {renderList()}
                    <div className='flex justify-center mt-5'>
                        <button onClick={handleMorePosts} className='border rounded p-3 hover:text-white dark:hover:text-black hover:bg-blue-500 transition'> Load More </button>
                    </div>
                </ul>
            </motion.div>
        </Loader>
    )
}

export default Timeline