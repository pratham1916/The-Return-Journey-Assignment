import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredItems, selectTotalPages, setCurrentPage } from '../features/itemsSlice';
import Item from './item';

const ItemList = () => {
  const filteredItems = useSelector(selectFilteredItems);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.items.currentPage);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page)); // Dispatch action to change current page
  };

  return (
    <>
      <div className="item-list">
        {filteredItems.map((item, index) => (
          <Item key={index} item={item} />  // Render each item
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`} // Active class for current page
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default React.memo(ItemList);
