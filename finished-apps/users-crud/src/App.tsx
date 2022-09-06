import { useEffect, useState } from 'react';
import { Modal, UserForm, UserList } from './components';
import { User } from './types';

import styles from './App.module.css';
import { validateString } from './utils/validations';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formUser, setFormUser] = useState<User>({
    name: '',
    age: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showValidationModal, setShowValidationModal] = useState(false);

  useEffect(() => {
    if (!isEditing) clearUser();
  }, [isEditing]);

  const handleSubmitUser = (user: User) => {
    if (!validateString(user?.name) || !validateString(user?.age)) {
      setShowValidationModal(true);

      return;
    }

    isEditing ? editUser(user) : addUser(user);

    clearUser();
  };

  const editUser = (user: User) => {
    setIsEditing(false);

    setUsers((prevState) => [
      ...prevState.filter((u) => u.id !== user.id),
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

  const handleCloseValidationModal = () => {
    setShowValidationModal(false);
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
      <Modal
        show={showValidationModal}
        closeModal={handleCloseValidationModal}
        title="Invalid Input">
        Please enter a valid name and age (non-empty values).
      </Modal>
    </div>
  );
};

export default App;
