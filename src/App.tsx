import { DataProvider } from "./context/DataContext";

import { CoffeeList } from "./components/CoffeeList/CoffeeList";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Main>
        <Filters />
        <CoffeeList />
      </Main>
    </DataProvider>
  );
};

export default App;
