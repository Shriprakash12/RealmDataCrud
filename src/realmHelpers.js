import realm from './realm';

// Add data
export const addUser = (name, email, address) => {
  realm.write(() => {
    realm.create('User', {
      id: Date.now().toString(),
      name,
      email,
      address,
    });
  });
};

// Get all users
export const getUsers = () => {
  return realm.objects('User');
};

// Update user
export const updateUser = (id, updatedData) => {
  realm.write(() => {
    const user = realm.objectForPrimaryKey('User', id);
    if (user) {
      Object.keys(updatedData).forEach(key => {
        user[key] = updatedData[key];
      });
    }
  });
};

// Delete user
export const deleteUser = id => {
  realm.write(() => {
    const user = realm.objectForPrimaryKey('User', id);
    if (user) {
      realm.delete(user);
    }
  });
};
