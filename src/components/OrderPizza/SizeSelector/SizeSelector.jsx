import './SizeSelector.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function SizeSelector(props) {

    const {data, setData} = props;

    return(
        <FormGroup>
                        <Label className='label'>
                            Boyut seç*
                        </Label>
                        <FormGroup>
                            <Input
                                name="boyut"
                                type="radio"
                                id="small"
                                value="Küçük"
                                onClick={(e) => setData({...data, boyut:e.target.value})}
                            />
                            <Label htmlFor='small'>
                                Küçük
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                name="boyut"
                                type="radio"
                                id="medium"
                                value="Orta"
                                onClick={(e) => setData({...data, boyut:e.target.value})}
                            />
                            <Label htmlFor='medium'>
                                Orta
                            </Label>
                        </FormGroup> 
                        <FormGroup>
                            <Input
                                name="boyut"
                                type="radio"
                                id="large"
                                value="Büyük"
                                onClick={(e) => setData({...data, boyut:e.target.value})}
                            />
                            <Label htmlFor='large'>
                                Büyük
                            </Label>
                        </FormGroup>    
                    </FormGroup>        

    );
}