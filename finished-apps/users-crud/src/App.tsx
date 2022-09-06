import { useEffect, useState } from 'react';
import { UserForm, UserList } from './components';
import { User } from './types';

import styles from './App.module.css';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formUser, setFormUser] = useState<User>({
    name: '',
    age: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isEditing) clearUser();
  }, [isEditing]);

  const handleSubmitUser = (user: User) => {
    isEditing ? editUser(user) : addUser(user);
  };

  const editUser = (user: User) => {
    setIsEditing(false);

    setUsers((prevState) => [
      ...prevState.filter((u) => u.id === user.id),
      user,
    ]);
  };

  const addUser = (user: User) => {
    user.id = Math.random().toString();

    setUsers((prevState) => [...prevState, user]);
  };

  const handleEditUser = (id: string) => {
    const user = users.find((u) => u.id === id);

    if (user == null) return;

    setIsEditing(true);

    setFormUser(user);
  };

  const handleDeleteUser = (id: string) => {
    setUsers((prevState) => prevState.filter((u) => u.id !== id));
  };

  const handleChangeUser = (user: User) => {
    setFormUser(user);
  };

  const clearUser = () => {
    setFormUser({
      name: '',
      age: '',
    });
  };

  return (
    <div className={styles.container}>
      <UserForm
        user={formUser}
        isEditing={isEditing}
        onSubmitUser={handleSubmitUser}
        changeUser={handleChangeUser}
      />
      <UserList
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default App;
