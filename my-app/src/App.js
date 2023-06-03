import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 24px;
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onClick={getUsers} />
      <Container>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </Container>
    </div>
  );
};

export default App;
