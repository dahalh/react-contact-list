import "./App.css";
import { Title } from "./components/Title";
import { SearchFilter } from "./components/SearchFilter";
import { ContactList } from "./components/ContactList";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        {/* title section */}
        <Title />

        {/* search and filter section */}
        <SearchFilter />

        {/* user count section */}
        <hr />
        <div className="row">
          <div className="col">55 User found</div>
        </div>

        {/* contact list cards section */}
        <ContactList />
      </div>
    </div>
  );
};

export default App;
