import React,{Component} from "react";
export class Address extends Component{
render(){
    return(
<div className='p.Address'>
<Form.Group>
    <Form.Label>Email</Form.Label>
<Form.Controle>
    <input type='email' placeholder='Exemple@gmail.com'></input>
</Form.Controle>
</Form.Group>


</div>
)

}
}