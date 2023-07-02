import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Blog from '../views/Blog'
import Post from '../views/Post'
import Projects from '../views/Projects'
import NotFound from '../views/NotFound'

function AnimatedRouter() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait" >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Blog />}> Home </Route>
                <Route path="/projects" element={<Projects />}> Blog </Route>
                <Route path="/blog/:id" element={<Post />}> Blog </Route>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRouter