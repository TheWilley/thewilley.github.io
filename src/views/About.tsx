import austronaut from '../assets/austronaut.png'
import '../css/index.css'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div className='grid place-items-center text-black' initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            sdggds
        </motion.div>
    )
}

export default About