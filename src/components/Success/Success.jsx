import logo from '../../../images/iteration-1-images/logo.svg';
import './Success.css';
export default function Success(props) {
    const {pageRouter, dataResponse} = props;
    const {pizza, fiyat, adet, boyut, kalinlik, extra } = dataResponse;

    console.log("response data:::::::" , dataResponse);
    const secimler = extra.length*5;
    const toplam = (+fiyat + secimler)*adet;
return (
    <div className='success-info'>
        <div className='success-card'>
            <div className="success-text">
                <p id="lezzet">lezzetin yolda</p>
                <p>SİPARİŞ ALINDI</p>
                <hr/>
            </div>

            <div className='order'>
                <h4>{pizza}</h4>
                <div className='order-info'>
                    <p>Boyut: <span>{boyut}</span></p>
                    <p>Hamur: <span>{kalinlik}</span></p>
                    <p>Ek Malzemeler: <span>{extra.join(", ")}</span></p>
                </div>
            </div>
            
            <div className='order-summary'>
                <p>Sipariş Toplamı</p>
                    <div id='addition'>
                        <p>Seçimler</p>
                        <p>{secimler}₺</p>
                    </div>
                    <div id='addition'>
                        <p>Toplam</p>
                        <p>{toplam}₺</p>
                    </div>
            </div> 
        </div>
    </div>
)}