import React from "react";
import AllUsers from "./AllUsers";

const AllUsersShown = ({ allUsers }) => {
  return (
    <div>
      <h1>Total User: {allUsers.length}</h1>
      <div>
        {allUsers.length === 0 ? (
          <h1>No User Found</h1>
        ) : (
          <div>
            <AllUsers allUsers={allUsers} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsersShown;
