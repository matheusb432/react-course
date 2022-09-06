import { useEffect, useState } from 'react';
import { User } from '../../../types';
import { ChangeInputEvent } from '../../../types/change-input-event';
import { Button, FormInput } from '../../UI';
import styles from './UserForm.module.css';

interface UserFormProps {
  user?: User;
  isEditing?: boolean;
  changeUser: (user: User) => void;
  onSubmitUser: (user: User) => void;
}

const UserForm = ({
  user,
  isEditing,
  changeUser,
  onSubmitUser,
}: UserFormProps) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (user == null) return;

    setName(user.name);
    setName(user.age);
  }, [user]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    onSubmitUser({ id: Math.random().toString(), name: name, age: age });
  };

  return (
    <form className={styles['user-form']} onSubmit={handleSubmit}>
      <FormInput label="Name" value={name} changeValue={setName} />
      <FormInput type="number" label="Age" value={age} changeValue={setAge} />
      <Button>Add User</Button>
    </form>
  );
};

export default UserForm;
