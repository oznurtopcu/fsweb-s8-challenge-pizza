import logo from "../../../images/iteration-1-images/logo.svg";
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home(props) {
    const {pageRouter} = props;
    return(
            <div className="home-image">
                <div className="home-content">
                    <img src={logo} alt="Logo" className="logo"/>
                    <div className="home-text">
                        <p>KOD ACIKTIRIR</p>
                        <p>PİZZA, DOYURUR</p>
                    </div>
                    {/*<Link to='/order-pizza'><button className="submit-button">ACIKTIM</button></Link>*/}
                    <button className="submit-button" onClick={() => pageRouter('order-pizza')}>ACIKTIM</button>
                </div>
            </div>
    );
}