import { useLocation } from 'react-router'
import './style.css'
const About = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const city = params.get('city');
    const state = params.get('state')

    return (
        <>
            <h2 className='h2-about '>Biography</h2>
            <div className='container-about'>
                <h3 className='h3-about '>Location : <span className='spna-about'>{city}, {state}</span> </h3>
                <h3 className='h3-about'>Language : <span className='spna-about'>English, Hindi</span> </h3>
                <h3 className='h3-about'>Dev Type : <span className='spna-about'>Frontend Javascript Developer</span> </h3>
            </div>

            <h2 className='h2-about '>Tech Skills</h2>

            <div className='container-about ht1'>
                <ul className='container-ul-about'>
                    <li className='container-li-about '>HTML</li>
                    <li className='container-li-about  '>CSS</li>
                    <li className='container-li-about '> JavaScript</li>
                    <li className='container-li-about '>Es6</li>
                </ul>
                <ul className='container-ul-about'>
                    <li className='container-li-about '>ReactJS</li>
                    <li className='container-li-about marginRight1 '>TypeScript</li>
                    <li className='container-li-about '>Jira</li>
                    <li className='container-li-about '>Git</li>
                </ul>
                <ul className='container-ul-about '>
                    <li className='container-li-about'>Evernotes</li>
                    <li className='container-li-about  '>Draw.io</li>
                    <li className='container-li-about marginRight '>Visual Studio Code</li>
                </ul>
            </div>
            <h2 className='h2-about '>Achievement</h2>
            <div className='container-about ht2'>
                <h3 className='h3-about '>Winner of Javascript Velotio Quiz (10/2021) </h3>
                <h3 className='h3-about '>Synchrony Financial Bank Hackathon in mumbai (2019) </h3>
            </div>
        </>
    )
}

export default About
