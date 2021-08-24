import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={css.link}
        activeStyle={css.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={css.link}
        activeStyle={css.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}