import './SizeSelector.css';
import { FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

export default function SizeSelector(props) {

    const {handleChange} = props;

    return(
        //özellikler map ile dönülecek
        <FormGroup>
                        <Label className='label'>
                            Boyut seç*
                        </Label>
                        {size.map((item, index) => {
                            return (<FormGroup>
                                <Input
                                    name="boyut"
                                    type="radio"
                                    id={item}
                                    value={item}
                                    onClick={handleChange}
                                />
                                <Label htmlFor={item}>
                                    {item}
                                </Label>
                            </FormGroup>)
                            
                        })}
        </FormGroup>        

    );
}

{
    /*

                            <Label className='label'>
                            Boyut seç*
                        </Label>
                        <FormGroup>
                            <Input
                                name="boyut"
                                type="radio"
                                id="small"
                                value="Küçük"
                                onClick={handleChange}
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
                                onClick={handleChange}
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
                                onClick={handleChange}
                            />
                            <Label htmlFor='large'>
                                Büyük
                            </Label>
                        </FormGroup>
    





                            <div className='radio-group'>
                            <label className="container"> 
                                <input type="radio" name="boyut" value="S" onClick={handleChange}/>
                                <span className="checkmark">S</span>
                            </label>
                            <label className="container"> 
                                <input type="radio" name="boyut" value="M" onClick={handleChange}/>
                                <span className="checkmark">M</span>
                            </label>
                            <label className="container"> 
                                <input type="radio" name="boyut" value="L" onClick={handleChange}/>
                                <span className="checkmark">L</span>
                            </label>
                        </div>









.radio-group {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    margin: auto;
}

.container {
    display: flex;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  

  .container input {
    height: 2rem;
    width: 2rem;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    height: 2.5rem;
    width: 2.5rem;
    background-color: #eee;
    border-radius: 50%;
    text-align: center;
  }
  
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  .container input:checked ~ .checkmark {
    background-color: var(--primary-yellow);
  }
    
    
    */
}