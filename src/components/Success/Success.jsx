import logo from '../../../images/iteration-1-images/logo.svg';
import './Success.css';
export default function Success(props) {
    const {pageRouter, dataResponse} = props;
    console.log(dataResponse);
return (
    <div className='success-info'>
        <div className='success-card'>
            <div className="success-text">
                <p id="lezzet">lezzetin yolda</p>
                <p>SİPARİŞ ALINDI</p>
            </div>

            <hr/>

            <div className='order'>
                <h4>Acı Pizza</h4>
                <div className='order-info'>
                    <p>Boyut: <span>{dataResponse.boyut}</span></p>
                    <p>Hamur: <span>{dataResponse.kalinlik}</span></p>
                    <p>Ek Malzemeler: <span>{dataResponse.extra.join()}</span></p>
                </div>
            </div>
            
            <div className='order-summary'>
                <p>Sipariş Toplamı</p>
                    <div id='addition'>
                        <p>Seçimler</p>
                        <p>20.00₺</p>
                    </div>
                    <div id='addition'>
                        <p>Toplam</p>
                        <p>105.50₺</p>
                    </div>
            </div> 
            
        </div>
    </div>
)}