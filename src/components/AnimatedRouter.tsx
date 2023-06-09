import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../views/Home'
import Blog from '../views/Blog'
import Projects from '../views/Projects'
import { AnimatePresence } from 'framer-motion'

function AnimatedRouter() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait" >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}> Home </Route>
                <Route path="/blog" element={<Blog />}> Blog </Route>
                <Route path="/projects" element={<Projects />}> Blog </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRouter