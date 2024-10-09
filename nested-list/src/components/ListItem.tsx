import React, { useState } from 'react';
import styled from 'styled-components';
import { ListItemType } from '../types';

interface ListItemProps {
  item: ListItemType;
  addChild: (parentId: number) => void;
  deleteItem: (id: number) => void;
  isRoot?: boolean;
}

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  button {
    margin-left: 5px;
  }
`;

const ListItem: React.FC<ListItemProps> = ({ item, addChild, deleteItem, isRoot = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <ItemContainer>
      <ItemHeader>
        <span onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
          {item.children.length > 0 ? (isExpanded ? '▼ ' : '▶ ') : '• '}
          {item.name}
        </span>
        <ButtonGroup>
          <button onClick={() => addChild(item.id)}>Добавить</button>
          {!isRoot && <button onClick={() => deleteItem(item.id)}>Удалить</button>}
        </ButtonGroup>
      </ItemHeader>
      {item.children.length > 0 && isExpanded && (
        <ul>
          {item.children.map(child => (
            <ListItem
              key={child.id}
              item={child}
              addChild={addChild}
              deleteItem={deleteItem}
              isRoot={false}
            />
          ))}
        </ul>
      )}
    </ItemContainer>
  );
};

export default ListItem;