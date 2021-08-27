import { Switch, Route } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import AuthBar from './components/AuthBar/AuthBar';
import css from './App.module.css';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contacts/contacts-operations';
import authOperations from './redux/auth/auth-operations';
import HomeView from './views/HomeView/HomeView';
import SignUpView from './views/SignUpView/SignUpView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <div className={css.container}>
      <AuthBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={SignUpView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </div>
  );
}
