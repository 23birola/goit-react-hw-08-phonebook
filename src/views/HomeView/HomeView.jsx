import css from './HomeView.module.css';

const HomeView = () => (
  <div className={css.container}>
    <h1 className={css.title}>
      Wellcome to PHONEBOOK!!!!
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;