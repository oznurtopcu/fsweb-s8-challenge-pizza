import './ThicknessSelector.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function ThicknessSelector(props) {

    const {handleChange} = props;
    const thicknessOption = ["İnce", "Normal", "Kalın"];

    return(
        //özellikler map ile dönülecek
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
                    <option>
                        Seçiniz...
                    </option>
                    {thicknessOption.map((opt) => {
                        return(
                            <option>
                                {opt}
                            </option>
                        )
                    })}
            </Input>
        </FormGroup>
    )
}


{/*
    
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
                    Seçiniz...
                </option>
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
    
    
    
    */}