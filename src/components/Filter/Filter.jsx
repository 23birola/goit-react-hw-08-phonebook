import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-slice';

const Filter = () => {
    const dispatch = useDispatch();
    const handleFilter = e => {
    const filterName = e.target.value.toLowerCase();
    dispatch(filterContacts(filterName));
  };

    return (
        <div className={css.filter}>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" id="filter" className={css.filterInput} onChange={handleFilter} />
        </div>);
};

Filter.propTypes = {
    filterByName: PropTypes.func.isRequired
};

export default Filter;