import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    id: 'string',
    name: 'string',
    email: 'string',
    address: 'string',
  },
  primaryKey: 'id',
};

// Create Realm instance
const realm = new Realm({schema: [UserSchema]});

export default realm;
