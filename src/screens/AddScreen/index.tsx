import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import {addUser, updateUser} from '../../realmHelpers';
import {ScrollView} from 'react-native-gesture-handler';

const AddScreen = ({navigation, route}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const {user, isEditing} = route.params || {};

  useEffect(() => {
    if (isEditing && user) {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
    }
  }, [isEditing, user]);

  const handleSave = () => {
    if (name.length == 0 || email.length == 0 || address.length == 0) {
      Alert.alert('Enter required field');
      return;
    }
    if (isEditing) {
      updateUser(user.id, {name, email, address});
    } else {
      addUser(name, email, address);
    }
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}}>
      <View style={{padding: 20}}>
        <Text style={styles.title}>Name</Text>
        <TextInput
          placeholder=" Enter Name"
          value={name}
          placeholderTextColor={'black'}
          onChangeText={text => setName(text)}
          style={styles.textInput}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder=" Enter Email"
          value={email}
          placeholderTextColor={'black'}
          onChangeText={text => setEmail(text)}
          style={styles.textInput}
        />
        <Text style={styles.title}>Address</Text>
        <TextInput
          placeholder=" Enter Address"
          value={address}
          placeholderTextColor={'black'}
          onChangeText={text => setAddress(text)}
          style={styles.textInput}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleSave()}>
          <Text style={styles.buttonText}>
            {isEditing ? 'Update User' : 'Add User'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddScreen;

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
    marginTop: 60,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 500,
  },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: 500,
    color: 'black',
  },
  textInput: {
    width: 320,
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: 'black',
    fontSize: 18,
    color: 'black',
  },
});
