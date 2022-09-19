import { Component } from 'react';

import classes from './User.module.scss';

class User extends Component {
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// * Functional component equivalent
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
