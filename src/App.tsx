import { useState } from 'react';
import * as Styled from './App.styles';
import { Item } from './components/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar o pão na padaria',
      done: false
    },
    {
      id: 2,
      name: 'Fazer atividades',
      done: true,
    }
  ]);

  const addTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <Styled.Container>
      <Styled.Area>
        
        <Styled.Header>
          <Styled.H1>Lista de tarefas</Styled.H1>
          <Styled.HR/>
        </Styled.Header>

        <Styled.Main>

          <AddArea onEnter={addTask}/>

          {list.map( (item, index) => (
            <ListItem key={ index } item={ item }/>
          ))}

        </Styled.Main>

      </Styled.Area>
    </Styled.Container>
  );
}

export default App;