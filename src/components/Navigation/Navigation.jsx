import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

const Navigation = () => (
  <nav className={css.navigation}>
    <NavLink to="/" exact
      className={css.link}
      activeClassName={css.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={css.link}
      activeClassName={css.activeLink}
    >
      Contactcs
    </NavLink>
  </nav>
);

export default Navigation;