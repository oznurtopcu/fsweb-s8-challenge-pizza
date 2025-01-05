import {Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';
import sampleData from '../../sampleData';
import './OrderForm.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SizeSelector from './SizeSelector/SizeSelector';
import ThicknessSelector from './ThicknessSelector/ThicknessSelector';
import ToppingSelector from './ToppingSelector/ToppingSelector';
import InputField from './InputField/InputField';
import Summary from './Summary/Summary';
import ProductInfo from './ProductInfo/ProductInfo';

const sizeOption = ["S", "M", "L"];
const thicknessOption = ["İnce", "Normal", "Kalın"];
const extraOption = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalapeno", "Sarımsak", "Biber", "Ananas", "Kabak"];
const errorMessages = {
    boyut: "Lütfen pizza boyutu seçiniz!",
    kalinlik: "Lütfen pizza kanlınlığını seçiniz!",
    extra: "Minimum 4, maksimum 10 adet ekstra ürün seçilebilir!",
    isim: "Girilen isim 3 karakterden daha az olamaz!",
}


export default function OrderForm(props) {
    const { initialData, data, setData, setDataResponse} = props;
    const [miktar, setMiktar] = useState(data.adet);
    //const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    let history = useHistory();
    //destruct işlemleri
    const {fiyat, ekstraMalzeme} = sampleData;

    //hesaplamalar
    const secimler = (data.extra.length*5)*miktar;
    const toplam = (+fiyat + secimler)*miktar;

    //formValidation
    const formValidation = () => {
        const errorData = {};
        if(!data.boyut) errorData.boyut = "Lütfen pizza boyutu seçiniz!";
        if(!data.kalinlik || data.kalinlik  === 'Seçiniz...') errorData.kalinlik = "Lütfen pizza kanlınlığını seçiniz!";
        if(data.extra.length<4) errorData.extra="En az 4 malzeme seçimi yapılmalıdır!";
        if(data.extra.length>10) errorData.extra = "En fazla 10 malzeme seçimi yapılabilir!";
        if(data.isim.length<3) errorData.isim = "Girilen isim 3 karakterden daha az olamaz!";
        setErrors(errorData);
        setIsValid(() => Object.keys(errorData).length === 0 ? true : false);
    }

    //useEffect
    useEffect(()=> {
        formValidation();
    }, [data]);

    const handleChange = (event) => {

        const {name, value, type} = event.target;
        console.log(name, type, value);
        //input type'a bağlı gerçekleşen handle change işlemleri
        if(type === 'checkbox'){
            const toppings = data[name];
            setData({...data, extra: toppings.includes(value) ? toppings.filter((item) => item !== value) : [...toppings,value]});
        }else if(type === 'button'){
            if(value === 'azalt'){
                setMiktar((miktar > 1) ? miktar-1:1);
                setData({...data, [name]: miktar});
            }
            if(value === 'arttir'){
                console.log("miktar::::::" + miktar);
                setMiktar( miktar + 1 );
                console.log("miktar::" + miktar);
                setData({...data, [name]: miktar});
                console.log("datamiktar::::::" + data.adet);
                console.log(data);
            }
        }else {
            setData({...data, [name]:value});
        }

    }

    //handlesubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        axios.post('https://reqres.in/api/pizza', data)
        .then(response => {
            //console.log(response.data);
            history.push('/success');
            setDataResponse(response.data);
            //pageRouter('success')
        })
        .catch(error => console.error(error));
        setData(initialData);
    }

    return (
        <div className='form'>
            <div className="info">
                <img src={`../../../../images/iteration-2-images/pictures/form-banner.png`} alt="product" />
            </div>
            <div className='form-content'>
                <Form onSubmit={handleSubmit}>

                    {/*ürün bilgisi bölümü*/}
                    <ProductInfo sampleData={sampleData}/>
                
                    <div className='select-content'>
                        {/*pizza boyutu seçim bölümü*/}
                        <SizeSelector handleChange={handleChange}/>
                        
                        {/*hamur kalınlığı seçim bölümü*/}
                        <ThicknessSelector handleChange={handleChange}/>
                    </div>
                
                    {/*ekstra malzeme seçim bölümü*/}
                    <ToppingSelector ekstraMalzeme={ekstraMalzeme} handleChange={handleChange}/>
                    
                    {/*isim ve sipariş notu input bölümü*/}
                    <InputField handleChange={handleChange}/>

                    <hr/>

                    <div className='order-card'>
                        <Summary miktar={miktar} secimler={secimler} toplam={toplam} isValid={isValid} handleChange={handleChange}/>
                    </div>
                </Form>
            </div>
        </div>
    );
}