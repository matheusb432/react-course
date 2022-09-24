import { useSelector } from 'react-redux';
import { AppState } from '../store/types';
import classes from './UserProfile.module.scss';

const UserProfile = () => {
  const { user } = useSelector((state: AppState) => state.auth);

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <p>
        Email - <strong>{user.email}</strong>
      </p>
    </main>
  );
};

export default UserProfile;
