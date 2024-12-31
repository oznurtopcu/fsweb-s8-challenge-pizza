import './InputField.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function InputField(props) {

    const {data, setData} = props;
    return (
        <>
            <FormGroup>
                <Label htmlFor="isim" className='label'>
                    İsim
                </Label>
                <Input
                    id="isim"
                    name="isim"
                    placeholder="Lütfen isminizi giriniz"
                    type="text"
                    onChange={(e) => setData({...data, isim: e.target.value})}
                />
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
                    onChange={(e) => setData({...data, siparisNotu: e.target.value})}
                />
            </FormGroup>
        
        </>
    )

}