import { Routes, Route } from "react-router"
import About from "../about/About"
import Contact from "../contact/Contact"
import Error from "../error/Error"
import Home from "../home/Home"
import Navbar from "../navbar/Navbar"
import Project from "../project/Project"
const Navigation = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

export default Navigation
