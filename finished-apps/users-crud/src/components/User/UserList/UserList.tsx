import { useCallback, useEffect, useState } from 'react';
import { User } from '../../../types';
import Card from '../../UI/Card/Card';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

interface UserListProps {
  users: User[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const UserList = ({ users, onEdit, onDelete }: UserListProps) => {
  const hasUsers = () => users?.length > 0;
  const [renderedUsers, setRenderedUsers] = useState<JSX.Element | null>(null);

  const renderUsers = useCallback(() => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

    return (
      <ul className={styles['users-list']}>
        {' '}
        {sortedUsers.map((u) => (
          <UserItem key={u.id} user={u} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    );
  }, [onDelete, onEdit, users]);

  useEffect(() => {
    setRenderedUsers(renderUsers());
  }, [renderUsers, users]);

  return (
    <Card>{hasUsers() ? renderedUsers : <p>No users registered.</p>}</Card>
  );
};

export default UserList;
