import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { API } from 'aws-amplify';
import { createBusiness, updateBusiness, deleteBusiness } from '../graphql/mutations';
import { DataStore } from '@aws-amplify/datastore';
import { Business } from '../models';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>My Business List</Text>
  </View>
);

const AddBusinessModal = ({ modalVisible, setModalVisible }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function addBusiness() {
      DataStore.save(
        new Business({
        "name": "setName",
        "description": "setDescription"
      })
    );
  }
  

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <Modal
      animationType="fade"
      onRequestClose={closeModal}
      transparent
      visible={modalVisible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <Pressable onPress={closeModal} style={styles.modalDismissButton}>
            <Text style={styles.modalDismissText}>X</Text>
          </Pressable>
          <TextInput
            onChangeText={setName}
            placeholder="Name"
            style={styles.modalInput}
          />
          <TextInput
            onChangeText={setDescription}
            placeholder="Description"
            style={styles.modalInput}
          />
          <Pressable onPress={addBusiness} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Save Business</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const BusinessList = () => {
  const [Businesss, setBusinesss] = useState([]);

  useEffect(() => {
    //to be filled in a later step
  }, []);

  async function deleteBusiness(Business) {
    //to be filled in a later step
  }

  async function setComplete(updateValue, Business) {
    //to be filled in a later step
  }

  const renderItem = ({ item }) => (
    <Pressable
      onLongPress={() => {
        deleteBusiness(item);
      }}
      onPress={() => {
        setComplete(!item.isComplete, item);
      }}
      style={styles.BusinessContainer}
    >
      <Text>
        <Text style={styles.BusinessHeading}>{item.name}</Text>
        {`\n${item.description}`}
      </Text>
      <Text
        style={[styles.checkbox, item.isComplete && styles.completedCheckbox]}
      >
        {item.isComplete ? '✓' : ''}
      </Text>
    </Pressable>
  );

  return (
    <FlatList
      data={Businesss}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
    />
  );
};

const BoosterPass = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
        <Text style={styles.buttonText}>Add Business</Text>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4696ec',
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 16,
    textAlign: 'center',
  },
  BusinessContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 4,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  BusinessHeading: {
    fontSize: 20,
    fontWeight: '600',
  },
  checkbox: {
    borderRadius: 2,
    borderWidth: 2,
    fontWeight: '700',
    height: 20,
    marginLeft: 'auto',
    textAlign: 'center',
    width: 20,
  },
  completedCheckbox: {
    backgroundColor: '#000',
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    padding: 16,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#4696ec',
    borderRadius: 99,
    paddingHorizontal: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 44,
    elevation: 6,
    shadowOffset: {
      height: 4,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  modalInnerContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 16,
  },
  modalInput: {
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  modalDismissButton: {
    marginLeft: 'auto',
  },
  modalDismissText: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default BoosterPass;