import './ToppingSelector.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function ToppingSelector(props) {
    const {ekstraMalzeme, data, setData} = props;

    const handleChecked = (event) => {
        const {value, name} = event.target;
        const extralar = data[name];
        setData({...data, extra: extralar.includes(value) ? extralar.filter((item) => item !== value) : [...extralar,value]})
    }

    return(
        <>
            <div>
                <p className='label'>Ek Malzemeler</p>
                <p>En fazla 10 malzeme seçebilirsiniz.(Her seçim 5₺)</p>
            </div>
            <FormGroup className='checkbox-list'>
                {ekstraMalzeme.map((malzeme,index) => {
                    return (
                    <FormGroup key={index} check>
                        <Input type="checkbox" name="extra" id="extra" value={malzeme} onChange={handleChecked}/>
                        {' '}
                        <Label htmlFor='extra' check>
                        {malzeme}
                        </Label>
                    </FormGroup>)
                    })}
            </FormGroup>
        
        </>
    );
}