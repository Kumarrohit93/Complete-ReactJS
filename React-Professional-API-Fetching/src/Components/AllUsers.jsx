import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();

      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h1>❌ Failed to fetch users</h1>
      ) : (
        <table border="1" cellPadding="20">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {user.map((usr) => (
              <tr key={usr.id}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.phone}</td>
                <td>{usr.website}</td>
                <td>{usr.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsers;
