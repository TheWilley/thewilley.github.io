/*/
    Projects file

    Shows all repos given a GitHub username
/*/

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useState } from "react";
import { getRepos } from '../helpers/helpers';
import { Helmet } from 'react-helmet';
import Loader from '../components/Loader';

function Projects() {
    const [repos, setRepos] = useState<Repo[] | null>([])
    const getMetaData = () => {
        return (
            <Helmet>
                <title>TheWilley | Projects</title>
            </Helmet>
        )
    }

    const renderRepos = () => {
        const repo_list = []

        if (repos != undefined) {
            for (const repo of repos) {
                if (repo.description != null) {
                    repo_list.push(
                        <li key={repo.html_url}>
                            <div className="h-full relative block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 over:bg-gray-100 p-3 dark:hover:bg-neutral-800 dark:bg-neutral-900 border dark:border-slate-500 dark:border-1">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate dark:text-white">{repo.name}</h5>
                                <p className="font-normal text-gray-600 dark:text-gray-400">{repo.description}</p>
                                <div className="pt-12">
                                    <div className="absolute bottom-0 left-0 text-center w-full dark:invert">
                                        <div className='dark:invert'>
                                            <hr className='mt-1 mb-1' />
                                            {repo.homepage && <a href={repo.homepage} className="block m-3 inline-block text-xl" target='_blank'> <FontAwesomeIcon icon={faLink} className="hover:opacity-50" /> </a>}
                                            <a href={repo.html_url} className="block m-3 inline-block text-xl" target='_blank'> <FontAwesomeIcon icon={faGithub} className="hover:opacity-50" /> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            }
        }

        return repo_list
    }

    return (
        <Loader effect={(callback) => {
            getRepos((repos) => {
                setRepos(repos)
                callback()
            })
        }}>
            {getMetaData()}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ul className="list-none p-4 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderRepos()}
                </ul>
            </motion.div>
        </Loader>
    )
}

export default Projects