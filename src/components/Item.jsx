import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../features/itemsSlice';
import Item from './item';

const ItemList = () => {
  const filteredItems = useSelector(selectFilteredItems);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '16px',
        padding: '16px',
        // Media queries for responsiveness
        '@media (min-width: 600px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (min-width: 900px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        '@media (min-width: 1200px)': {
          gridTemplateColumns: 'repeat(5, 1fr)',
        },
        '@media (min-width: 1500px)': {
          gridTemplateColumns: 'repeat(10, 1fr)',
        },
      }}
    >
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default React.memo(ItemList);
