const AddBtn = () => (
  <div className='fixed-action-btn'>
    <a
      href='#add-log-modal'
      className='btn-floating btn-large deep-purple accent-2 modal-trigger waves-effect waves-light'
    >
      <i className='large material-icons'>add</i>
    </a>

    <ul>
      <li>
        <a
          href='#tech-list-modal'
          className='btn-floating amber darken-4 modal-trigger'
        >
          <i className='material-icons'>person</i>
        </a>
      </li>
      <li>
        <a
          href='#add-tech-modal'
          className='btn-floating lime accent-4 modal-trigger'
        >
          <i className='material-icons '>person_add</i>
        </a>
      </li>
    </ul>
  </div>
);

export default AddBtn;
