import {Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';
import sampleData from '../../sampleData';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './OrderPizza.css';

const sizeOption = ["S", "M", "L"];
const thicknessOption = ["İnce", "Normal", "Kalın"];
const extraOption = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalapeno", "Sarımsak", "Biber", "Ananas", "Kabak"];
const errorMessages = {
    boyut: "Lütfen pizza boyutu seçiniz!",
    kalinlik: "Lütfen pizza kanlınlığını seçiniz!",
    extra: "Minimum 4, maksimum 10 adet ekstra ürün seçilebilir!",
    isim: "Girilen isim 3 karakterden daha az olamaz!",
}

export default function OrderPizza(props) {
    const {pageRouter, initialData, data, setData, setDataResponse} = props;
    const [miktar, setMiktar] = useState(data.adet);
    let history = useHistory();
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({
        boyut: false,
        kalinlik: false,
        extra: false,
        isim: false,
    });
    
    //destruct işlemleri
    const {baslik, fiyat} = sampleData;

    //hesaplamalar
    const secimler = (data.extra.length*5)*miktar;
    const toplam = (+fiyat + (data.extra.length*5))*miktar;

    //formValidation
    const formValidation = () => {
        console.log(data);
        console.log(errors);

        const errorValues = Object.values(errors);
        const isTrue = errorValues.includes(true);
    
        setIsValid(!isTrue);
    }

    //useEffect
    useEffect(()=> {
        formValidation();
    }, [data]);
    
    useEffect(()=>{
        if((data.extra.length>=4 && data.extra.length<=10)){
            setErrors({ ...errors, extra: false });
        }else {
            setErrors({ ...errors, extra: true });
        }
    },[data.extra]);

    useEffect(()=> {
        setData({...data, adet: miktar});
    }, [miktar]);

    useEffect(()=> {
        setData({
            ...data,
            fiyat: fiyat,
            pizza: baslik,
            boyut: sizeOption[0],
            kalinlik: thicknessOption[0]
        });
    }, []);

    //handleChange
    const handleChange = (event) => {

        const {name, value, type, checked} = event.target;
        console.log(name, type, value);
        //input type'a bağlı gerçekleşen handle change işlemleri
        if(name === 'adet'){

            if(value === 'azalt'){
                setMiktar((miktar > 1) ? miktar-1:1);
            }
            if(value === 'arttir'){
                setMiktar( miktar + 1 );
            }
        }
        
        if(name === 'boyut'){
            setData({...data, [name]:value});
            if(value !== "") {
                setErrors({ ...errors, [name]: false });
            }else {
                setErrors({ ...errors, [name]: true });
            }
        }

        if(name === 'kalinlik'){
            setData({...data, [name]:value});
            if(value !== "" && value  !== 'Seçiniz...') {
                setErrors({ ...errors, [name]: false });
            }else {
                setErrors({ ...errors, [name]: true });
            }
        }

        if(name === 'extra') {
            const toppings = data[name];
            //setData({...data, extra: toppings.includes(value) ? toppings.filter((item) => item !== value) : [...toppings,value]});

            if(checked) {
                setData({...data, [name]: [...toppings,value] })
            }else {
                setData({...data, [name]: toppings.filter((item) => item !== value) }) 
            }
            
        }

        if(name === 'isim'){
            setData({...data, [name]:value});
            if(value.trim().length>=3) {
                setErrors({ ...errors, [name]: false });
            }else {
                setErrors({ ...errors, [name]: true });
            }
        }

        if(name === 'siparisNotu'){
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

                    {/*ürün bilgisi bölümü              -->                                     <ProductInfo sampleData={sampleData}/>*/}

                    <h4 className='label'>{sampleData.baslik}</h4>
                    <div className='price-info'>
                        <h4 className='label'>{sampleData.fiyat}₺</h4>
                        <p>{sampleData.puan}</p>
                        <p>({sampleData.yorumSayisi})</p>
                    </div>
                    <p>{sampleData.aciklama}</p>
                
                    <div className='select-content'>
                        {/*pizza boyutu seçim bölümü          -->           <SizeSelector handleChange={handleChange}/>          */}
                        <FormGroup>
                            <Label className='label'>
                                Boyut seç*
                            </Label>
                            {sizeOption.map((item, index) => {
                                return (<FormGroup key={index}>
                                    <Input
                                        name="boyut"
                                        type="radio"
                                        id={item}
                                        value={item}
                                        onChange={handleChange}
                                        defaultChecked={index === 0}
                                    />
                                    <Label htmlFor={item}>
                                        {item}
                                    </Label>
                                </FormGroup>)
                            })}
                        {errors.boyut && <p style={{color:"#dc3545"}}>{errorMessages.boyut}</p>}    
                        </FormGroup> 
                        
                        {/*hamur kalınlığı seçim bölümü                    -->                  <ThicknessSelector handleChange={handleChange}/>*/}
                        <FormGroup>
                            <Label for="kalinlik" className='label'>
                                Hamur Kalınlığı
                            </Label>
                            <Input
                                id="kalinlik"
                                name="kalinlik"
                                type="select"
                                data-cy='select'
            
                                onChange={handleChange}
                                >
                                    {/* <option selected disabled hidden>
                                        Seçiniz...
                                    </option> */}
                                    {thicknessOption.map((opt,index) => {
                                        return(
                                            <option key={index} selected={index === 0}>
                                                {opt}
                                            </option>
                                        )
                                    })}
                            </Input>
                            {errors.kalinlik && <p style={{color:"#dc3545"}}>{errorMessages.kalinlik}</p>}
                        </FormGroup>  
                    </div>
                
                    {/*ekstra malzeme seçim bölümü                  -->                     <ToppingSelector ekstraMalzeme={ekstraMalzeme} handleChange={handleChange}/>*/}
                    <div>
                        <p className='label'>Ek Malzemeler</p>
                        <p>En fazla 10 malzeme seçebilirsiniz.(Her seçim 5₺)</p>
                    </div>
                    <FormGroup className='checkbox-list'>
                        {extraOption.map((malzeme,index) => {
                            return (
                            <FormGroup key={index} check>
                                <Label check>
                                <Input type="checkbox" name="extra" id="extra" value={malzeme} onChange={handleChange} data-cy='checkbox' />
                                {' '}
                                {malzeme}
                                </Label>
                            </FormGroup>);
                            })
                        }
                    </FormGroup>
                    {errors.extra && data.extra.length >= 1 && <p style={{color:"#dc3545"}}>{errorMessages.extra}</p>}

                    
                    {/*isim ve sipariş notu input bölümü          -->               <InputField handleChange={handleChange}/>*/}
                    <FormGroup>
                        <Label htmlFor="isim" className='label'>
                            İsim
                        </Label>
                        <Input
                            id="isim"
                            name="isim"
                            placeholder="Lütfen isminizi giriniz"
                            type="text"
                            onChange={handleChange}
                            data-cy='isim'
                            value={data.isim}
                            
                        />
                        {errors.isim && <p style={{color:"#dc3545"}}>{errorMessages.isim}</p>}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="siparisNotu" className='label'>
                            Sipariş Notu
                        </Label>
                        <Input
                            id="siparisNotu"
                            name="siparisNotu"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            type="textarea"
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <hr/>

                    <div className='order-card'>
                        {/*özet bölümü          -->          <Summary miktar={miktar} secimler={secimler} toplam={toplam} isValid={isValid} handleChange={handleChange}/>*/}

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
                            <div className='order-addition'>
                                <p className='label'>Sipariş Toplamı</p>
                                    <div id='addition'>
                                        <p>Seçimler</p>
                                        <p>{secimler}₺</p>
                                    </div>
                                    <div id='addition'>
                                        <p>Toplam</p>
                                        <p>{toplam}₺</p>
                                    </div>
                            </div>
                            <button className='submitButton' data-cy='submitButton' disabled={!isValid}>SİPARİŞ VER</button>
                        </div>

                    </div>
                </Form>
            </div>
        </div>
    );
}