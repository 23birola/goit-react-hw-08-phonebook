import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import css from './UserMenu.module.css'


export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);

  return (
    <div className={css.container}>
      <PermIdentityIcon aria-label="delete"/>
      <span className={css.userEmail}>{email}</span>
      <Button variant="contained" size="small" color="primary" type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </Button>
    </div>
  );
}