import './Cards.css';

export default function Cards() {
    return(
        <div className="card-content">
            <div className="card">
                <img src={`../../../../images/iteration-2-images/pictures/food-1.png`} alt="food" />
                <p>Terminal Pizza</p>
                <p className="card-order-sum">
                    <span>4.9</span>
                    <span>(200)</span>
                    <span>60₺</span>
                </p>
            </div>
            <div className="card">
                <img src={`../../../../images/iteration-2-images/pictures/food-2.png`} alt="food" />
                <p>Position Absolute Acı Pizza</p>
                <p className="card-order-sum">
                    <span>4.9</span>
                    <span>(200)</span>
                    <span>60₺</span>
                </p>
            </div>
            <div className="card">
                <img src={`../../../../images/iteration-2-images/pictures/food-3.png`} alt="food" />
                <p>useEffect Tavuklu Burger</p>
                <p className="card-order-sum">
                    <span>4.9</span>
                    <span>(200)</span>
                    <span>60₺</span>
                </p>
            </div>
        </div>
    );
}