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
        gridTemplateColumns: 'repeat(10, 1fr)',
        gap: '16px',
        padding: '16px',
      }}
    >
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default React.memo(ItemList);
