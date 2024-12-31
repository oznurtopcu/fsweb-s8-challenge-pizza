import './ProductInfo.css';

export default function ProductInfo(props) {
    const {sampleData} = props;
    const {baslik, fiyat, puan, yorumSayisi, aciklama} = sampleData;
    
    return (
        <>
            <h4 className='label'>{baslik}</h4>
            <div className='price-info'>
                <h4 className='label'>{fiyat}₺</h4>
                <p>{puan}</p>
                <p>({yorumSayisi})</p>
            </div>
            <p>{aciklama}</p>
        </>

    );
}