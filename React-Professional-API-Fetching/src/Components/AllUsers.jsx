import React, { useEffect, useState } from "react";

const AllUsers = ({ allUsers }) => {
  return (
    <div>
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
          {allUsers.map((usr) => (
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
    </div>
  );
};

export default AllUsers;
