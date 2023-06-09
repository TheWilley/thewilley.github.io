import { Link, useParams } from "react-router-dom"
import austronat from '../assets/austronaut.png'
import { motion } from "framer-motion"

function Blog() {
    return (
        <motion.div initial={{ transform: 'scale(0.8)', opacity: 0 }} animate={{ transform: 'scale(1)', opacity: 1 }} exit={{ transform: 'scale(0.8)', opacity: 0 }}>
            <p className="grid h-screen place-items-center text-5xl font-bold text-blue-500">
                <div> 
                <div className="text-center mb-5"> 😄 </div>
                Come back later!
                </div>
            </p>
            <div className="hidden">
                <Link to='/blog/bla'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={austronat} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-gray-700">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}

export default Blog