import * as C from "./style";
import { item } from "../../types/item";
import {useState} from 'react'; 

 type Props ={

item:item;

} ;

export const ListItem =  ({item}: Props ) =>{

  const [isChecked, setChecked] = useState(item.done);


return(
<C.container done = {isChecked}> 
  <input type="checkbox" 
    checked = {isChecked}
    onChange = {e=> setChecked(e.target.checked)}
  
  />
  <label> {item.name}  </label>
   </C.container>

);

}