/*/
    Home file

    The first page a user lands on
/*/

import { motion } from 'framer-motion'
import austronaut from '../assets/logo.png'
import '../css/index.css'

function Home() {
    return (
        <motion.div className='grid text-black place-items-center p-2 dark:text-white' initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            <div className='text-center'>
                <img className="rounded-full w-auto max-h-80 align-middle block" src={austronaut} loading="lazy"></img>
                <h1 className='mt-2 font-mono text-3xl'> TheWilley </h1>
                <i> William Larsson </i>
            </div>
            <br />
            <div className='text-left mt-5'>
                Hello! My name is William and I make web content and other stuff! You can naviagate via the sidebar on the left to read my blog or look at projects I've made!
                Hopefully you find something interesting, Cheers!
            </div>
        </motion.div>
    )
}

export default Home