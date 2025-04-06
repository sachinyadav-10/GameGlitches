import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/slices/filterSlice';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const PaginationComponent = ({ totalCount, pageSize }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.filters.currentPage);
  const totalPages = Math.ceil(totalCount / pageSize);

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div className="d-flex justify-content-end my-4">
      <button onClick={handlePrev} disabled={currentPage === 1} 
      className="btn btn-primary mx-2 custom-page-btn" style={{backgroundColor:'#4c37be', color: '#fff',border: 'none'}}>
        <KeyboardDoubleArrowLeftIcon/>
      </button>
      ....
      <button onClick={handleNext} disabled={currentPage === totalPages} 
      className="btn btn-primary mx-2 custom-page-btn" style={{backgroundColor:'#4c37be', color: '#fff',border: 'none'}}>
        <KeyboardDoubleArrowRightIcon/>
      </button>
    </div>
  );
};

export default PaginationComponent;
