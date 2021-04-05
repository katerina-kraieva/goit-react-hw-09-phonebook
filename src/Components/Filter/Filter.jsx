import shortid from 'shortid';
// import { connect } from 'react-redux';
// import contactsActions from '../../redux/contacts/contacts-action';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, contactsSelector } from '../../redux/contacts';

import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(contactsSelector.getFilter);
  const findId = shortid.generate();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label htmlFor={findId} className={s.label}>Find contacts by name</label>
      <input className={s.input} id={findId} type="text" value={value} onChange={onChange} />
    </div>
  );
}
