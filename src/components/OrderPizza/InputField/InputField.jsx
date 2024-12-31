import './InputField.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function InputField(props) {

    const {handleChange} = props;
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
            </FormGroup>
        
        </>
    )

}