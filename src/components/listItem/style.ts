import { type } from "os";
import styled from "styled-components";

type containerProps = {
  done: boolean;

}

export const container = styled.div (({done}:containerProps) => (
`
display:flex;
background-color:#20212C;
padding :10px;
border-radius:10px;
margin-bottom:10px;
align-items:center;


input: {
  width:25px;
  heigth:25px;
  margin-right:5px;
}
label {
  color:#CCC;
  text-decoration: ${done? 'line-through' : 'initial' };

}

`

));