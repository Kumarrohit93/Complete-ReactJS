import React, { useEffect, useState } from "react";

const AllUsersFetch = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dt) => {
        setUser(dt);
        setLoading(false);
        console.log(dt)
      });
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
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

export default AllUsersFetch;
