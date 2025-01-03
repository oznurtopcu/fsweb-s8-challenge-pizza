import './Posters.css';

export default function Posters() {
    return(
        <div className="poster-content">
            <div className="card card-1">
                <div className='card-text'>
                    <strong>Özel Lezzetus</strong>
                    <p>Position: Absolute Acı Burger</p>
                    <a href="#">SİPARİŞ VER</a>
                </div>
            </div>
            <div className="card-container">
                <div className="card card-2">
                    <div className="card-text">
                        <p>Hackathlon Burger Menu</p>
                        <a href="#">SİPARİŞ VER</a>
                    </div>
                </div>
                <div className="card card-3">
                    <div className="card-text">
                        <p style={{color: "#292929"}}><span style={{color: "#ce2829"}}>Çoooook</span> hızlı npm gibi kurye</p>
                        <a href="#">SİPARİŞ VER</a>
                    </div>
                </div>
            </div>
        </div>
    );
}