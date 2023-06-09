import Markdown from 'markdown-to-jsx'
import austronaut from '../assets/austronaut.png'
import '../css/index.css'
import { motion } from 'framer-motion'

function Home() {
    return (
            <motion.div className='grid place-items-center text-black' initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
                <img className="rounded-full w-auto max-h-80 align-middle block"src={austronaut}></img>
                <h1 className='mt-2 font-mono text-3xl'> TheWilley </h1>
                <i> William Larsson </i>
            </motion.div>
    )
}

export default Home