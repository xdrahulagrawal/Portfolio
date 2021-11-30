import './style.css'
import avatar from '../../Assests/images/avatar.jpg'

const Home = () => {
    return (
        <>
            <div className="container-home">
                <div className="container-home-items">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="container-home-items">
                    <h3 className='h3-home '>Hi, I am</h3>
                    <h1 className='h1-home'>Rahul Agrawal</h1>
                    <h4 className='h4-home '>I am a frontend javascript developer.</h4>
                </div>
            </div>


        </>

    )
}
export default Home;