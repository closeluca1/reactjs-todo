import { useState } from 'react';
import * as Styles from './styled';
import { Item } from '../../components/Item';
type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <Styles.Section>
      <Styles.Article done={isChecked}>
        <input 
          type="checkbox" 
          checked={ isChecked }
          onChange={e => setIsChecked(e.target.checked)}/>
        <label>{ item.name } - { item.done.toString() }</label>
      </Styles.Article>
    </Styles.Section>
  );
}