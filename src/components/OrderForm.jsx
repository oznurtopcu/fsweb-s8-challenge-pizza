import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import sampleData from '../sampleData';
export default function OrderForm() {
    const {baslik, fiyat, puan, yorumSayisi, aciklama, ekstraMalzeme} = sampleData;
    return (
        <Form>
            <h3>{baslik}</h3>
            <p>{fiyat}₺</p>
            <p>{puan}</p>
            <p>({yorumSayisi})</p>
            <p>{aciklama}</p>
            <FormGroup>
                <FormGroup tag="fieldset">
                    <legend>
                    Boyut seç *
                    </legend>
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
                    <Label for="exampleSelect">
                        Hamur Kalınlığı
                    </Label>
                    <Input
                    id="exampleSelect"
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
            </FormGroup>

            <div>
               <h4>Ek Malzemeler</h4>
               <p>En fazla 10 malzeme seçebilirsiniz.</p>
            </div>
            <FormGroup>
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
                <Label for="isim">
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
                <Label for="siparisNotu">
                Sipariş Notu
                </Label>
                <Input
                id="siparisNotu"
                name="siparisNotu"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                type="textarea"
                />
            </FormGroup>
        </Form>
    );
}