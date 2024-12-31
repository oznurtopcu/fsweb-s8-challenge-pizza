import './Summary.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function Summary(props) {

    const {data, setData, miktar, setMiktar, secimler, toplam, isValid} = props;

    return(
        <>
            {/*adet arttırıp azaltma bölümü*/}
            <div className='order-amount'>
                    <button className='left' type="button" onClick={() => {
                        setMiktar(miktar>1 ? miktar-1:1);
                        setData({...data, adet: miktar});
                        }}>-
                    </button>
                    <p>{miktar}</p>
                    <button className='right' type="button" onClick={() => {
                        setMiktar(miktar+1);
                        setData({...data, adet: miktar});
                        }}>+
                    </button>
            </div>
            
            {/*sipariş toplamı bölümü*/}
            <div className='order-sum'>
                <div>
                    <p className='label'>Sipariş Toplamı</p>
                        <div>
                            <p>Seçimler</p>
                            <p>{secimler}₺</p>
                        </div>
                        <div>
                            <p>Toplam</p>
                            <p>{toplam}₺</p>
                        </div>
                </div>
                <button className='submitButton' disabled={!isValid}>SİPARİŞ VER</button>
            </div>
        </>
    )
}