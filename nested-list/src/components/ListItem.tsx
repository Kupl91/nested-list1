import React, { useState } from 'react';
import styled from 'styled-components';
import { ListItemType } from '../types';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const ChildrenContainer = styled.ul`
  margin-left: 20px;
`;

interface ListItemProps {
  item: ListItemType;
  addChild: (parentId: number) => void;
  deleteItem: (id: number) => void;
  isRoot: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ item, addChild, deleteItem, isRoot }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <li>
      <ItemContainer>
        <span onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
          {item.children.length > 0 && (isExpanded ? '▼' : '▶')} {item.name}
        </span>
        <button onClick={() => addChild(item.id)}>Добавить</button>
        {!isRoot && <button className="delete" onClick={() => deleteItem(item.id)}>Удалить</button>}
      </ItemContainer>
      {isExpanded && item.children.length > 0 && (
        <ChildrenContainer>
          {item.children.map(child => (
            <ListItem
              key={child.id}
              item={child}
              addChild={addChild}
              deleteItem={deleteItem}
              isRoot={false}
            />
          ))}
        </ChildrenContainer>
      )}
    </li>
  );
};

export default ListItem;