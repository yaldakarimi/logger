import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchLogs } from '../../redux/slice/logsReducer';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useRef('');
  const onChange = () => {
    dispatch(searchLogs(searchInput.current.value));
  };
  return (
    <nav className='deep-purple accent-3' style={{ marginBottom: '5em' }}>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search...'
              onChange={onChange}
              ref={searchInput}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
export default SearchBar;
