import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation"
import css from "./AuthBar.module.css";

export default function AppBar() {
// const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <AuthNav />
      <AuthNav />
    </header>
  );
}