import { User } from '../../../types';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

interface UserListProps {
  users: User[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const UserList = ({ users, onEdit, onDelete }: UserListProps) => {
  const renderUsers = () => {
    return users.map((u) => (
      <UserItem key={u.id} user={u} onEdit={onEdit} onDelete={onDelete} />
    ));
  };

  return (
    <ul className={styles['users-list']}>{users ? renderUsers() : null}</ul>
  );
};

export default UserList;
