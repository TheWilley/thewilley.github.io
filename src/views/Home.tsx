/*/
    Home file

    The first page a user lands on
/*/

import { motion } from 'framer-motion'
import '../css/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faHammer } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Home() {
    const newlineText = (srt: string) => {
        const text = srt
        const newText = text.split('\n\n').map(str => <> <div className='m-5'>{str}</div></>);

        return newText;
    }

    const intro = `
        "Ah, the lone wolf of web development! Welcome, brave adventurer, to the extraordinary world of solitary coding and solo web mastery. In this digital wilderness, you are the sole architect, designer, and troubleshooter of your own virtual kingdom. So grab your keyboard, buckle up, and prepare for a whimsical journey through the trials and triumphs of being a one-person web development powerhouse!

        Picture this: a lone developer hunched over a desk, surrounded by towering stacks of pizza boxes, empty coffee cups, and a smorgasbord of tangled cables. The world outside may see a solitary figure, but little do they know that behind those tired eyes lies a mind teeming with creativity, determination, and an insatiable thirst for technological excellence.

        You, my friend, are a digital superhero, armed with a potent combination of coding prowess, design finesse, and an unwavering dedication to crafting remarkable websites. With your trusty keyboard as your weapon, you conquer challenges that would make ordinary mortals tremble. Bugs, glitches, and compatibility woes? Mere obstacles on your path to web supremacy.

        As a single developer, you possess a unique blend of skills that few can match. You're a master of multiple programming languages, dancing effortlessly between HTML, CSS, JavaScript, and more. Your fingers fly across the keyboard, transforming lines of code into captivating interfaces that captivate and delight users.

        But being a one-person powerhouse doesn't mean you're all work and no play. Oh no, you understand the importance of keeping your spirits high amidst the solitary coding marathon. You know that humor and a healthy dose of tech-savvy wit are your trusty companions on this adventure. So, while the world may not witness the hilarious banter you have with your computer screen, you know that laughter is the fuel that keeps your coding engine running smoothly.

        You're not just a developer; you're an entire team bundled into one extraordinary package. You're the creative genius, the meticulous tester, the tireless debugger, and the tireless cheerleader of your own projects. You revel in the thrill of seeing your visions come to life, from the initial spark of an idea to the triumphant launch of a pixel-perfect masterpiece.

        So, my solitary friend, as you embark on this incredible journey through the vast digital expanse, remember this: you are a force to be reckoned with. Your passion, skills, and indomitable spirit set you apart. Embrace the challenges, relish the victories, and never forget to inject a touch of your unique personality into every line of code you write.

        Welcome to the enchanting world of solitary web development, where you're the solo star of the show. Embrace the adventure, laugh in the face of complexity, and build websites that leave the world in awe of your single-handed brilliance. The digital frontier awaits your indelible mark, oh mighty developer. Unleash your coding magic and let the world marvel at your extraordinary talent!"
    `

    return (
        <motion.div className='text-black p-2 dark:text-white pt-0 w-full max-w-screen-lg' initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            <div>
                <div className='flex items-center mb-3'>
                    <img src={logo} className='mr-4 w-16 md:w-32 xl:w-44 rounded-md mt-4' />
                    <div>
                        <h1 className='xl:text-9xl text-4xl md:text-7xl mt-2 font-mono'>TheWilley</h1>
                        <p className='xl:text-6xl text-xl md:text-4xl ml-7 font-mono'>William Larsson</p>
                    </div>
                </div>

            </div>
            <p className='font-mono border'>
                {newlineText(intro)}
            </p>

            <div className='grid place-items-center grid-cols-2'>
                <div className='w-full h-28'>
                    <Link to="/blog">
                        <div className='border flex items-center justify-center h-full'>
                            <FontAwesomeIcon icon={faBlog} className='ml-2 ' />
                        </div>
                    </Link>
                </div>
                <div className='w-full h-28'>
                    <Link to="/projects">
                        <div className='border flex items-center justify-center h-full'>
                            <FontAwesomeIcon icon={faHammer} className='ml-2' />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Home