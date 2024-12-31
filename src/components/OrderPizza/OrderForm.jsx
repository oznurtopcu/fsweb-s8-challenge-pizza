import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import sampleData from '../../sampleData';
import './OrderForm.css';
import {Link} from 'react-router-dom';
import SizeSelector from './SizeSelector/SizeSelector';
import ProductInfo from './ProductInfo/ProductInfo';

export default function OrderForm() {
    return (
        <div className='form-content'>
            <div className='select-content'>
                <FormGroup tag="fieldset">
                    <Label className='label'>
                        Boyut seç*
                    </Label>
                    <FormGroup check>
                        <Input
                            name="small"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Küçük
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="medium"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Orta
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="large"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Büyük
                        </Label>
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <Label for="select" className='label'>
                        Hamur Kalınlığı
                    </Label>
                    <Input
                    id="select"
                    name="select"
                    type="select"
                    >
                    <option>
                        İnce
                    </option>
                    <option>
                        Normal
                    </option>
                    <option>
                        Kalın
                    </option>
                    </Input>
                </FormGroup>
            </div>
            
            <div>
               <p className='label'>Ek Malzemeler</p>
               <p>En fazla 10 malzeme seçebilirsiniz.(Her seçim 5₺)</p>
            </div>
            
            <FormGroup className='checkbox-list'>
                {ekstraMalzeme.map((malzeme,index) => {
                    return (<FormGroup key={index} check>
                        <Input type="checkbox"/>
                        {' '}
                        <Label check>
                        {malzeme}
                        </Label>
                    </FormGroup>)
                })}
            </FormGroup>
            <FormGroup>
                <Label for="isim" className='label'>
                İsim
                </Label>
                <Input
                id="isim"
                name="isim"
                placeholder="Lütfen isminizi giriniz"
                type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="siparisNotu" className='label'>
                Sipariş Notu
                </Label>
                <Input
                id="siparisNotu"
                name="siparisNotu"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                type="textarea"
                />
            </FormGroup>
            <hr/>
            <div className='order-card'>
                <div className='order-amount'>
                    <button className='left'>-</button>
                    <p>0</p>
                    <button className='right'>+</button>
                </div>
                <div className='order-sum'>
                    <div>
                        <p className='label'>Sipariş Toplamı</p>
                        <p>Seçimler</p>
                        <p>Toplam</p>
                    </div>
                    <Link to="/success"><button className='submitButton'>SİPARİŞ VER</button></Link>
                </div>

            </div>
        </Form>
        </div>
        
    );
}