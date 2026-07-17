import React, { useEffect, useState } from "react";
import SearchUser from "../Components/SearchUser";
import AllUsersShown from "../Components/AllUsersShown";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getAllUsers() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      let data = await res.json();
      setUser(data);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  let filterUsers = user.filter((usr) =>
    usr.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log(filterUsers);
  return (
    <div>
      <h1>Users Dashboard</h1>
      <SearchUser search={search} setSearch={setSearch} />
      <AllUsersShown allUsers={filterUsers}/>
    </div>
  );
};

export default Dashboard;
