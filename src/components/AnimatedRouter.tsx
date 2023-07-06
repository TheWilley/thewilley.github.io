import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Blog from '../views/Blog'
import Post from '../views/Post'
import Projects from '../views/Projects'
import NotFound from '../views/NotFound'
import Timeline from '../views/Timeline'
import About from '../views/About'

function AnimatedRouter() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait" >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Blog />}> Home </Route>
                <Route path="/projects" element={<Projects />}> Projects </Route>
                <Route path="/about" element={<About />}> About </Route>
                <Route path="/timeline" element={<Timeline />}> Timeline </Route>
                <Route path="/blog/:id" element={<Post />}> Blog Post </Route>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRouter