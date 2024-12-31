import './ThicknessSelector.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function ThicknessSelector(props) {

    const {data, setData} = props;

    return(
        <FormGroup>
            <Label for="doughType" className='label'>
                Hamur Kalınlığı
            </Label>
            <Input
                id="doughType"
                name="kalinlik"
                type="select"
                onChange={(e) => setData({...data, kalinlik:e.target.value})}
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
    )
}