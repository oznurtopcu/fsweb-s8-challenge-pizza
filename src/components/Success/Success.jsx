import logo from '../../../images/iteration-1-images/logo.svg';
import './Success.css';
export default function Success() {
return (
    <div className='success-content'>
        <div className='success-card'>
            <img src={logo} alt="Logo" className="logo"/>
            <div className="success-text">
                <p>TEBRİKLER!</p>
                <p>SİPARİŞİNİZ ALINDI!</p>
            </div>
        </div>
    </div>


)}