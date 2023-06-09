import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Tilt from 'react-parallax-tilt';

interface Repo {
    description: string
    name: string
    homepage:string
    html_url: string
}

function Projects() {
    const [repos, setRepos] = useState<Repo[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/TheWilley/repos').then(response => response.text()).then(repos => setRepos(JSON.parse(repos)))
    }, [])

    function renderRepos() {
        const repo_list = []

        for (const repo of repos) {
            if (repo.description != null) {
                repo_list.push(
                    <li>
                        <Tilt tiltReverse={true}>
                            <div className="h-full relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{repo.name}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{repo.description}</p>
                                <div className="pt-12">
                                    <div className="absolute bottom-0 left-0 text-center w-full border">
                                        {repo.homepage && <a href={repo.homepage} className="block m-3 inline-block text-xl"> <FontAwesomeIcon icon={faLink} /> </a>}
                                        <a href={repo.html_url} className="block m-3 inline-block text-xl"> <FontAwesomeIcon icon={faGithub} /> </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </li>
                )
            }
        }

        return repo_list
    }

    return (
        <motion.div initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            <h1 className="text-center text-5xl font-bold mb-5 text-blue-500"> Projects </h1>
            <ul className="list-none container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {renderRepos()}
            </ul>
        </motion.div>
    )
}

export default Projects