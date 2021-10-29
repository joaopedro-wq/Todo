import { useState, KeyboardEvent } from "react";
import * as C from "./style";

type Props = {
  onEnter: (taskName: string) => void

}

export const AddArea = ({ onEnter }: Props) => {

  const [inputText, setInputText] = useState('');

  const handKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }

  }



  return (

    <C.container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma Tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handKeyUp}
      />


    </C.container>
  )

}