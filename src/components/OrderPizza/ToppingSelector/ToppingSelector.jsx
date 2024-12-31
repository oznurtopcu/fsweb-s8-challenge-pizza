import './ToppingSelector.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function ToppingSelector(props) {
    const {ekstraMalzeme, handleChange} = props;

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
                        <Label check>
                        <Input type="checkbox" name="extra" id="extra" value={malzeme} onChange={handleChange}/>
                        {' '}
                        {malzeme}
                        </Label>
                    </FormGroup>);
                    })
                }
            </FormGroup>
        
        </>
    );
}