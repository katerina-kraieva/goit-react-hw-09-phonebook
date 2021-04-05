import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 6,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    },
};

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      {/* <Avatar alt="Remy Sharp" src={avatar} /> */}
      <img src={defaultAvatar} alt="kitty cat" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button variant="outlined" color="secondary" onClick={onLogout}>
        LogOut{' '}
      </Button>
    </div>
  );
}

