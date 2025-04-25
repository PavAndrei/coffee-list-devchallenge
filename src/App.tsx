import { useEffect, useState } from "react";
import { CoffeeList } from "./components/CoffeeList/CoffeeList";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ICoffee } from "./models/ICoffee";

const App = () => {
  const [menu, setMenu] = useState<ICoffee[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setMenu(data));
  }, []);

  console.log(menu);

  return (
    <div>
      <Header />
      <Main>
        <Filters />
        <CoffeeList menu={menu} />
      </Main>
    </div>
  );
};

export default App;
