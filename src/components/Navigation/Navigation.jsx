import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

const Navigation = () => (
  <nav>
    <NavLink to="/" exact style={css.link} activeStyle={css.activeLink}>
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={css.link}
      activeStyle={css.activeLink}
    >
      Contactcs
    </NavLink>
  </nav>
);

export default Navigation;