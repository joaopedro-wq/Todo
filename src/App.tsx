import { useState } from 'react';
import * as style from './App.styles';
import { item } from './types/item';
import { ListItem } from './components/listItem';
import { AddArea } from './components/addArea';

const App = () => {
  const [tarefs, setTarefs] = useState<item[]>([

  ]);

  const handAddTask = (taskName: string) => {

    let newTarefs = [...tarefs];

    newTarefs.push({
      id: tarefs.length + 1,
      name: taskName,
      done: false

    });
    setTarefs(newTarefs);

  }

  return (
    <style.container>



      <style.area>
        <style.title>Lista de Tarefas</style.title>

        <AddArea onEnter={handAddTask} />


        {tarefs.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}



      </style.area>
    </style.container>

  );

}


export default App;