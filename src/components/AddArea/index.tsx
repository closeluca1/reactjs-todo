import { useState, KeyboardEvent } from 'react';
import * as Styled from './styles';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter}: Props ) => {
  
  const [inputText, setInputText] = useState('')
  
  const keyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <Styled.Section>
      <div className='image'>+</div>
      <input 
        type='text'
        placeholder='Adicione uma tarefa'
        value={inputText}
        onChange={ e => setInputText(e.target.value)  }
        onKeyUp={keyUp}/>
    </Styled.Section>
  );
}