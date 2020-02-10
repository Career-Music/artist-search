import { useParams, useHistory } from 'react-router-dom';

const usePaging = () => {
  const history = useHistory();
  const basePath = history.location.pathname.split('/page')[0];
  console.log(basePath);
  const { pageStr } = useParams();
  let page = Number(pageStr);
  if(isNaN(page) || page < 1) {
    page = 1;
  }

  const prevPage = () => {
    const newPageNum = page > 1 ? page - 1 : 1;
    history.push(`${basePath}/page/${newPageNum}`);
  };

  const nextPage = () => {
    history.push(`${basePath}/page/${page + 1}`);
  };

  return { page, nextPage, prevPage };
};

export default usePaging;
