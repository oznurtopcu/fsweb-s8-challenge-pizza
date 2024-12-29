import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
export default function OrderForm() {
    return (
        <Form>
            <h3>Position Absolute Acı Pizza</h3>
            <p>85.50₺</p>
            <p>4.9</p>
            <p>(200)</p>
            <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
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
                <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                    Pepperoni
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                    Ton balığı
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                    Mısır
                    </Label>
                </FormGroup>
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