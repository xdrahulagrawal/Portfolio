import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
    const data = {
        MobNo: 8982417608,
        emailId: 'xdrahulagrawal@gmail.com',
        LinkedIn: 'https://www.linkedin.com/in/xdrahulagrawal/',
        Github: 'https://github.com/xdrahulagrawal'
    }

    return (
        <>
            <nav>
                <ul className='container'>
                    <li className='container-item'>
                        <Link to='/' className='navLink'>Home</Link>
                    </li>
                    <li className='container-item'>
                        <Link to='/about?name=rahul&city=Gwalior&state=M.P.' className=' navLink'>About</Link>
                    </li>
                    <li className='container-item'>
                        <Link to='/projects' className='navLink'>Projects</Link>
                    </li>
                    <li className='container-item'>
                        <Link to='/contact' state={{ data }} className='navLink'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar
