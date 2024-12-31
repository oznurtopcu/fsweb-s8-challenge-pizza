import './ThicknessSelector.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function ThicknessSelector(props) {

    const {handleChange} = props;

    return(
        //özellikler map ile dönülecek
        <FormGroup>
            <Label for="doughType" className='label'>
                Hamur Kalınlığı
            </Label>
            <Input
                id="doughType"
                name="kalinlik"
                type="select"
                data-cy='select'
                onChange={handleChange}
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