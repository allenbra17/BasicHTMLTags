import logo from './logo.svg';
import './App.css';
import PgHeader from './components/pg-header/PgHeader';
import PgAboutMe from './components/pg-challenge/PgAboutMe';
import ClickCounter from './components/pg-ClickCounter/pgClickCounter';

function AppPlayground() {
  let name = 'Brad';
  let location = 'Greensburg';
  const favoriteFoods = ["pizza", "sushi", "chicky nuggies", "BBQ"];
  const favoritePlaces = ["Mexico", "Belize", "Canada"];
  return (
    <div className="App">
      <h1>Welcome to React, {name}!</h1>
      <PgHeader />
      <PgAboutMe name={name} location={location} favoriteFoods={favoriteFoods} favoritePlaces={favoritePlaces} />
      <ClickCounter />
    </div>
  );
}

export default AppPlayground;
