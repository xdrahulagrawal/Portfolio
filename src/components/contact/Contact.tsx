import './style.css';
import { useLocation } from 'react-router-dom';
const Contact = () => {
    const { data } = useLocation().state;

    return (
        <>
            <div className='container-contact'>
                <h3 className='h3-contact '>Mob. NO. :
                    <span className='spna-contact'>{data.MobNo}</span>
                </h3>
                <h3 className='h3-contact'>emailId :
                    <span className='spna-contact'>{data.emailId}</span>
                </h3>
                <h3 className='h3-contact'>Linkedin:
                    <span className='spna-contact'>
                        <a href='https://www.linkedin.com/in/xdrahulagrawal/' target='https://www.linkedin.com/in/xdrahulagrawal/'>{data.LinkedIn}</a>
                    </span>
                </h3>
                <h3 className='h3-contact'>Github:
                    <span className='spna-contact'>
                        <a href='https://github.com/xdrahulagrawal' target='https://github.com/xdrahulagrawal'>{data.Github}</a>
                    </span>
                </h3>
            </div>
        </>
    )
}

export default Contact
