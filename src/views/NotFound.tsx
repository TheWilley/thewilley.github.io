import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <>
            <Helmet>
                <title>TheWilley | 404</title>
            </Helmet>
            <motion.div initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
                <div className='grid h-screen place-items-center text-3xl font-bold'>
                    <h1 className="text-5xl text-center">
                        Looks like you've found a 404, lets get you <Link to='/' className="text-blue-500 underline">home</Link> again
                    </h1>
                </div>
            </motion.div>
        </>
    )
}

export default NotFound