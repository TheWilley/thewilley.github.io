import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Blog from '../views/Blog'
import Post from '../views/Post'
import Projects from '../views/Projects'

function AnimatedRouter() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait" >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to='/blog' />}> Home </Route>
                <Route path="/blog" element={<Blog />}> Blog </Route>
                <Route path="/projects" element={<Projects />}> Blog </Route>
                <Route path="/blog/:id" element={<Post />}> Blog </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRouter