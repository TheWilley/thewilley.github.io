import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

function NotFound() {
    const getMetaData = () => {
        return (
            <Helmet>
                <title>{`TheWilley | 404`}</title>
            </Helmet>
        )
    }

    return (
        <Loader effect={(callback) => {
            callback()
        }}>
            {getMetaData()}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='text-center text-8xl rounded p-3 h-[60vh] flex items-center justify-center'>
                    <div className='border border-4 p-3 rounded'>
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <div className='text-3xl font-bold'>
                            404
                            <p className='text-2xl font-normal'>
                                Lets get you <Link to='/' className="text-blue-500 underline">home</Link> again
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Loader>
    )
}

export default NotFound