import logo from "../../images/iteration-1-images/logo.svg";
import banner from "../../images/iteration-1-images/home-banner.png";
import { Button } from 'reactstrap';

export default function Home() {
    return(
        <div style={{ background: `#CE2829`}}>
            <img src={logo} alt="Logo"/>
            <div className="homeText">
                <p>KOD ACIKTIRIR</p>
                <p>PİZZA DOYURUR</p>
            </div>
            <button type="submit" style={{ background: '#FDC913'}}>Acıktım</button>
        </div>
    );
}