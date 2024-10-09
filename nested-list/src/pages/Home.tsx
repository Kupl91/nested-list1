import React, { useState } from 'react';
   import styled from 'styled-components';
   import ListItem from '../components/ListItem';
   import { ListItemType } from '../types';

   const HomeContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 20px;
   `;

   const Home: React.FC = () => {
     const [list, setList] = useState<ListItemType>({
       id: 1,
       name: 'Основной родитель',
       children: [],
     });

     const addChild = (parentId: number) => {
       // Логика добавления наследника
     };

     const deleteItem = (id: number) => {
       if (id === list.id) {
         alert('Нельзя удалить основного родителя.');
         return;
       }

       const removeItem = (item: ListItemType): ListItemType | null => {
         const filteredChildren = item.children
           .map(removeItem)
           .filter(child => child !== null) as ListItemType[];
         if (item.id === id) {
           return null;
         }
         return { ...item, children: filteredChildren };
       };

       const updatedList = removeItem(list);
       if (updatedList) {
         setList(updatedList);
       }
     };

     return (
       <HomeContainer>
         <h2>Вложенный список</h2>
         <ul>
           <ListItem
             item={list}
             addChild={addChild}
             deleteItem={deleteItem}
             isRoot={true}
           />
         </ul>
       </HomeContainer>
     );
   };

   export default Home;