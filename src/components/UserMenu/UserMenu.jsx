import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import defaultAvatar from "./user.png";
import css from './UserMenu.module.css'


export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);
  const avatar = defaultAvatar;

  return (
    <div className={css.container}>
      <PermIdentityIcon/>
      <span className={css.userEmail}>{email}</span>
      <Button variant="contained" size="small" color="primary" type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </Button>
    </div>
  );
}