import React, { useState, useEffect } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { SearchFilter } from "./components/SearchFilter";
import { ContactList } from "./components/ContactList";
import { fetchUsers } from "./helper/apiCall";
import { Spinner } from "./components/Spinner";

const App = () => {
  const [user, setUser] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch(apiUrl)
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((data) => console.log(data));
    setLoading(true);
    fetchUsers().then((data) => {
      setContacts(data.results);
      setUser(data.results);
      setLoading(false);
    });
  }, []);

  const handleOnGenderChange = (e) => {
    const { value } = e.target;
    setLoading(true);
    // console.log(value);
    const params = `results=20&gender=${value}`;
    fetchUsers(params).then((data) => {
      setContacts(data.results);
      setUser(data.results);
      setLoading(false);
    });
  };

  const handleonSearch = (e) => {
    const { value } = e.target;

    // filter

    const filterArgs = user.filter((usr) => {
      const userName = (usr.name.first + " " + usr.name.last).toLowerCase();
      if (userName.includes(value.toLowerCase())) {
        return true;
      }
    });

    setContacts(filterArgs);
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* title section */}
        <Title />

        {/* search and filter section */}
        <SearchFilter
          handleOnGenderChange={handleOnGenderChange}
          handleonSearch={handleonSearch}
        />

        {/* user count section */}
        <hr />
        <div className="row">
          <div className="col">{contacts.length} User found</div>
        </div>

        {loading && <Spinner />}
        {/* contact list cards section */}
        <ContactList users={contacts} />
      </div>
    </div>
  );
};

export default App;
