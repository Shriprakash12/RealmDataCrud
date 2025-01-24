import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {deleteUser, getUsers} from '../../realmHelpers';
import NoData from '../NoData';

const DisplayScreen = ({navigation}: any) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      setUsers([...getUsers()]);
    };

    const focusListener = navigation.addListener('focus', fetchUsers);
    return () => {
      focusListener();
    };
  }, [navigation]);
  const handleDelete = (id: any) => {
    deleteUser(id);
    const data = getUsers();
    setUsers([...data]);
  };

  const handleUpdate = (user: any) => {
    navigation.navigate('AddScreen', {user, isEditing: true});
  };

  return (
    <View style={{flex: 1}}>
      {users.length === 0 && <NoData />}
      <FlatList
        data={users}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}: any) => (
          <View style={styles.box}>
            <Text style={styles.value}>Name: {item.name}</Text>
            <Text style={styles.value}>Email: {item.email}</Text>
            <Text style={styles.value}>Address: {item.address}</Text>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => handleUpdate(item)}>
                <Text style={styles.title}>Update</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}>
                <Text style={styles.title}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddScreen', {isEditing: false})}>
        <Text style={styles.buttonText}>Add New User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayScreen;

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: '#2973B2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
  },
  value: {
    fontSize: 20,
    marginLeft: 40,
  },
  title: {
    fontSize: 20,

    fontWeight: 500,
    color: 'black',
  },
  box: {
    height: 150,
    borderWidth: 0.5,
    borderRadius: 20,
    width: 340,
    alignSelf: 'center',
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 500,
  },

  updateButton: {
    height: 40,
    width: 140,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AEEA94',
  },
  deleteButton: {
    height: 40,
    width: 140,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 20,
  },
});
