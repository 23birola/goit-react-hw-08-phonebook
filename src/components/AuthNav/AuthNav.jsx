import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={css.link}
        activeClassName={css.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={css.link}
        activeClassName={css.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}