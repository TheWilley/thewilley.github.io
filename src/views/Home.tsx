/*/
    Home file

    The first page a user lands on
/*/

import { motion } from 'framer-motion'
import austronaut from '../assets/logo.png'
import '../css/index.css'

function Home() {
    return (
        <motion.div className='text-black place-items-center p-2 dark:text-white' initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            {/* <div className='text-center'>
                <img className="rounded-full w-auto max-h-80 align-middle block" src={austronaut} loading="lazy"></img>
                <h1 className='mt-2 font-mono text-3xl'> TheWilley </h1>
                <i> William Larsson </i>
            </div> */}
            <div className='grid grid-cols-2 mt-3 gap-4'>
                <div className='card'>
                    <h2 className='text-3xl'> Latest Post </h2>
                    <div>
                        Latest post
                    </div>
                </div>
                <div>
                    <h2  className='text-3xl'> Updated projects </h2>
                    <div>
                        Latest updated project
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home