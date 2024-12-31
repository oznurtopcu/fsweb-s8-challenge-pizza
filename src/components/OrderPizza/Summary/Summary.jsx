import './Summary.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function Summary(props) {

    const {miktar, secimler, toplam, isValid, handleChange} = props;

    return(
        <>
            {/*adet arttırıp azaltma bölümü*/}
            <div className='order-amount'>
                    <button className='left' type="button" name="adet" value="azalt" onClick={handleChange}>-
                    </button>
                    <p>{miktar}</p>
                    <button className='right' type="button" name="adet" value="arttir" onClick={handleChange}>+
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
                <button className='submitButton' data-cy='submitButton' disabled={!isValid}>SİPARİŞ VER</button>
            </div>
        </>
    )
}