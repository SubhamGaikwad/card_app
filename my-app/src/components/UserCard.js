import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Username = styled.h2`
  margin: 0;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.first_name} />
      <Username>{`${user.first_name} ${user.last_name}`}</Username>
      <p>{user.email}</p>
    </Card>
  );
};

export default UserCard;
