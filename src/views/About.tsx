import { IconDefinition, faGithub, faSoundcloud, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import Loader from "../components/Loader"

function About() {
    const createSocialMediaItem = (color: string, dark_color: string, text: string, href: string, logo: IconDefinition, allowed: boolean) => {
        return (
            <a {...(allowed && { href: href })} target="_blank" className={`${color} ${allowed ? 'cursor-pointer' : 'cursor-not-allowed'} w-full rounded p-3 text-center text-white text-2xl font-bold hover:opacity-80 flex flex-col items-center justify-center dark:${dark_color}`}>
                <div>
                    {text}
                </div>
                <div className="text-5xl">
                    <FontAwesomeIcon icon={logo} />
                </div>
            </a>
        )
    }

    const getMetaData = () => {
        return (
            <Helmet>
                <title>TheWilley | About</title>
            </Helmet>
        )
    }

    return (
        <Loader effect={(callback) => {
            callback()
        }}>
            {getMetaData()}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="grid grid-cols-1 gap-5">
                    <p className="text-xl">
                        Hi! My name is William Larsson, but I often go by the name "TheWilley" as my online alias. I have a interest in programming, music, art and generally anything to do with computers.
                        This website was made from the ground up with react, and serves as the primary hub for all things I do. Below you can find some links to my social media platforms, if you want to explore a little more.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2">
                        {createSocialMediaItem('bg-red-500', 'bg-red-200', 'TheWilley (TBA)', '', faYoutube, false)}
                        {createSocialMediaItem('bg-red-500', 'bg-blue-200', 'TheWilley Music', 'https://www.youtube.com/channel/UCH0QD9v3h2fwL0-Bc2hM9iQ', faYoutube, true)}
                        {createSocialMediaItem('bg-orange-500', 'bg-blue-200', 'TheWilley', 'https://soundcloud.com/thewilley', faSoundcloud, true)}
                        {createSocialMediaItem('bg-neutral-800', 'bg-green-200', 'TheWilley', 'https://github.com/thewilley', faGithub, true)}
                    </div>
                </div>
            </motion.div>
        </Loader>
    )
}

export default About
