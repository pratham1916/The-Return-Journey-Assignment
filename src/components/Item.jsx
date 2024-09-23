import React from 'react';

// Memoized Item component to prevent unnecessary re-renders
const Item = React.memo(({ item }) => {
  return (
    <div className="item">
      {item} {/* Display the item content */}
    </div>
  );
});

export default Item;
