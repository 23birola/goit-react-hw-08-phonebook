// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from "./user.png";
import css from './UserMenu.module.css'


export default function UserMenu() {
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={css.container}>
      <img src={avatar} alt="" width="32" className={css.avatar} />
      <span className={css.name}>Welcome</span>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button> */}
    </div>
  );
}