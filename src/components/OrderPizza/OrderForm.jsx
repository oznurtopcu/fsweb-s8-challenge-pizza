import {Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';
import sampleData from '../../sampleData';
import './OrderForm.css';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import SizeSelector from './SizeSelector/SizeSelector';
import ThicknessSelector from './ThicknessSelector/ThicknessSelector';
import ToppingSelector from './ToppingSelector/ToppingSelector';
import InputField from './InputField/InputField';
import Summary from './Summary/Summary';
import ProductInfo from './ProductInfo/ProductInfo';

const initialData = {
    boyut: '',
    kalinlik:'',
    extra: [],
    isim: '',
    siparisNotu: '',
    adet: 1
};

export default function OrderForm() {
    //state tanımlamaları
    const [miktar, setMiktar] = useState(1);
    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    let history = useHistory();
    //destruct işlemleri
    const {fiyat, ekstraMalzeme} = sampleData;

    //hesaplamalar
    const secimler = (data.extra.length*5)*miktar;
    const toplam = (+fiyat + secimler)*miktar;

    const formValidation = () => {
        const errorData = {};
        if(!data.boyut) errorData.boyut = "Lütfen pizza boyutu seçiniz!";
        if(data.extra.length<4) errorData.extra="En az 4 malzeme seçimi yapılmalıdır!";
        if(data.extra.length>10) errorData.extra = "En fazla 10 malzeme seçimi yapılabilir!";
        if(data.isim.length<3) errorData.isim = "Girilen isim 3 karakterden daha az olamaz!";
        setErrors(errorData);
        setIsValid(() => Object.keys(errorData).length === 0 ? true : false);
    }

    return (
        <div className='form-content'>
            <Form onSubmit={handleSubmit}>
                {/*ürün bilgisi bölümü*/}
                <ProductInfo sampleData={sampleData}/>
                
                <div className='select-content'>
                    {/*pizza boyutu seçim bölümü*/}
                    <SizeSelector data={data} setData={setData}/>
                    
                    {/*hamur kalınlığı seçim bölümü*/}
                    <ThicknessSelector data={data} setData={setData}/>
                </div>
                
                {/*ekstra malzeme seçim bölümü*/}
                <ToppingSelector ekstraMalzeme={ekstraMalzeme} data={data} setData={setData} />
                
                {/*isim ve sipariş notu input bölümü*/}
                <InputField data={data} setData={setData}/>

                <hr/>

                <div className='order-card'>
                    <Summary data={data} setData={setData} secimler={secimler} miktar={miktar} setMiktar={setMiktar} toplam={toplam} isValid={isValid}/>
                </div>
            </Form>
        </div>
        
    );
}