import { useEffect, useState } from 'react';
import { User } from '../../../types';
import { Button, FormInput } from '../../UI';
import Card from '../../UI/Card/Card';
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
  const [id, setId] = useState<string | undefined>('');

  useEffect(() => {
    if (user == null) return;

    setName(user.name);
    setAge(user.age);
    setId(user.id);
  }, [user]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    onSubmitUser({ id, name, age });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <FormInput label="Name" value={name} changeValue={setName} />
        <FormInput type="number" label="Age" value={age} changeValue={setAge} />
        <Button>{isEditing ? 'Edit User' : 'Add User'}</Button>
      </form>
    </Card>
  );
};

export default UserForm;
