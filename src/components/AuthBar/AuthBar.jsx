import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation"
import css from "./AuthBar.module.css";

export default function AppBar() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={css.header}>
      <Navigation />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <UserMenu />
      <AuthNav />
    </header>
  );
}