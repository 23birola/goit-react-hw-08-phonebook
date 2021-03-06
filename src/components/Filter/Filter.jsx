import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-slice';
import { TextField } from '@material-ui/core';

const Filter = () => {
    const dispatch = useDispatch();
    const handleFilter = e => {
    const filterName = e.target.value.toLowerCase();
    dispatch(filterContacts(filterName));
  };

    return (
        <div className={css.filter}>
            <label htmlFor="filter">Find contacts by name</label>
        <TextField
          label="Search field"
          type="text"
          name="filter"
          id="filter"
          className={css.filterInput} onChange={handleFilter} />
        </div>);
};

export default Filter;