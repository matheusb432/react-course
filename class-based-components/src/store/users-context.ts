import React from 'react';

interface UsersContextProps {
  users: User[];
}

interface User {
  id: string;
  name: string;
}

const UsersContext = React.createContext<UsersContextProps>({
  users: [],
});

export default UsersContext;
