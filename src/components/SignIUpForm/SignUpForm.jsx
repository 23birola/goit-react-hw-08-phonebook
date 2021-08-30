import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import css from './SignUpForm.module.css';
import { Button, TextField } from '@material-ui/core';

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>SIGN UP</h1>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          <TextField
            id="standard-basic"
            type="text"
            name="name"
            value={name}
            label="name"
            onChange={handleChange} />
        </label>

        <label className={css.label}>
          <TextField
            id="standard-basic"
            type="email"
            name="email"
            label='email'
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          <TextField
            id="standard-basic"
            type="password"
            name="password"
            label='password'
            value={password}
            onChange={handleChange}
          />
        </label>
         <div className={css.signUpBtn}>
          <Button className={css.button} variant="contained" color="primary" type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
}