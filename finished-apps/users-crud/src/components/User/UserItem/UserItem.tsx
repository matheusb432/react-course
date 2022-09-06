import { User } from '../../../types';
import { DeleteIcon, EditIcon, Icon } from '../../UI';
import styles from './UserItem.module.css';

interface UserItemProps {
  user: User;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const UserItem = ({ user, onDelete, onEdit }: UserItemProps) => {
  return (
    <li className={styles['list-item']}>
      {user.name} ({user.age} years old)
      <div className={styles.actions}>
        <button onClick={() => onEdit(user.id as string)}>EDIT</button>
        <button onClick={() => onDelete(user.id as string)}>DELETE</button>
        {/* <Icon onClick={() => onEdit(user.id as string)} icon={<EditIcon />} />
        <Icon
          onClick={() => onDelete(user.id as string)}
          icon={<DeleteIcon />}
        /> */}
      </div>
    </li>
  );
};

export default UserItem;
