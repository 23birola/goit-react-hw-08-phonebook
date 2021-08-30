import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import css from './LoginForm.module.css';
import { Button, TextField } from '@material-ui/core';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>LOG IN</h1>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          <TextField
            id="standard-basic"
            type="email"
            name="email"
            value={email}
            label='email'
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          <TextField
            id="standard-basic"
            type="password"
            name="password"
            value={password}
            label='password'
            onChange={handleChange}
          />
        </label>
        <div className={css.logInBtn}>
          <Button variant="contained" color="primary" type="submit">Enter</Button>
        </div>
      </form>
    </div>
  );
}