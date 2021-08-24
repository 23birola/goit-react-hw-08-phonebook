import css from './HomeView.module.css';

const HomeView = () => (
  <div style={css.container}>
    <h1 style={css.title}>
      Wellcome to PHONEBOOK!!!!
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;