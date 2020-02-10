import React from 'react';
import usePaging from '../../hooks/use-paging';

const Paging = () => {
  const { page, prevPage, nextPage } = usePaging();

  return (
    <div>
      <span onClick={prevPage}>Previous</span>
      <span>{page}</span>
      <span onClick={nextPage}>Next</span>
    </div>
  );
};

export default Paging;
