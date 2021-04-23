const TechItem = ({ tech }) => {
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName}
        {tech.lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons blue-grey-text text-lighten-1'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
