import { useDispatch } from 'react-redux';
import { deleteTech } from '../../redux/slice/techsReducer';

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();
  const onClickHandler = (id) => {
    dispatch(deleteTech(id));
  };
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a
          href='#!'
          className='secondary-content'
          onClick={() => onClickHandler(tech.id)}
        >
          <i className='material-icons blue-grey-text text-lighten-1'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
