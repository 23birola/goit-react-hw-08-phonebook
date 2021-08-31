import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AuthBar from './components/AuthBar/AuthBar';
import css from './App.module.css';
import { lazy, Suspense, useEffect } from 'react';
import authOperations from './redux/auth/auth-operations';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import LoaderSpinner from './components/Loader/Loader';


const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomePage" */),
);
const SignUpView = lazy(() =>
  import('./views/SignUpView/SignUpView' /* webpackChunkName: "SignUpPage" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "LoginPage" */),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "ContactsPage" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AuthBar />

      <Switch>
        <Suspense fallback={<LoaderSpinner/> }>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <SignUpView />{' '}
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />{' '}
          </PublicRoute>
          <PrivateRoute path={'/contacts'} redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}
