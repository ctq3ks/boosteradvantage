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
import { createCoupon, updateCoupon, deleteCoupon } from '../graphql/mutations';
import { DataStore } from '@aws-amplify/datastore';
import { Business, Coupon } from '../models';


const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>My Coupon List</Text>
  </View>
);

const FilterCouponModals = () => {
  const [restaurant, setRestaurant] = useState(true);
  const [salon, setSalon] = useState(true);
  const [services, setServices] = useState(true);

  // function addCoupon() {
  //     DataStore.save(
  //       new Coupon({
  //       "description": description,
  //     }));
  //     setModalVisible(false);
  //     setBusiness('');
  //     setDescription('');
  // }

  function setRestaurantCategory() {
    setRestaurant(!restaurant);
    setSalon(true);
    setServices(true);
  }
  function setSalonCategory() {
    setSalon(!salon);
    setRestaurant(true);
    setServices(true);
  }
  function setServiceCategory() {
    setServices(!services);
    setSalon(true);
    setRestaurant(true);
  }


const CouponList = () => {
  const [Coupons, setCoupons] = useState([]);
  //const subscription = await DataStore.query(Coupon).filter(c => c.business.name === "restaurant");
  useEffect(() => {
    //query the initial Coupon list and subscribe to data updates
    
    let queryvalue = !salon ? "SALON" : !restaurant ? "RESTAURANT" : "SERVICE";
    let ifFiltered = !salon || !restaurant || !services;

    const subscription = DataStore.observeQuery(Coupon, c => ifFiltered ? c.category("contains", queryvalue) : c).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
      const { items, isSynced } = snapshot;
      setCoupons(items);
      
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }
  }, []);

  const renderCoupon = ({ item }) => (
     <View style={styles.CouponContainer}>
      <Text>
        <Text style={styles.CouponHeading}>{item.business.name}</Text>
        {`\n${item.description}`}
        {`\n${item.business.description}`}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={Coupons}
      keyExtractor={({ id }) => id}
      renderItem={renderCoupon}
    />
  );
};

  return (
    <View>
      <View style={styles.categoriesContainer}>
        <Pressable onPress={setRestaurantCategory} style={restaurant ? styles.categoryContainer : styles.categoryContainerPressed} >
          <Text style={restaurant ? styles.categoryText : styles.categoryTextPressed}>Restaurants</Text>
        </Pressable>
        <Pressable onPress={setSalonCategory} style={salon ? styles.categoryContainer : styles.categoryContainerPressed} >
          <Text style={salon ? styles.categoryText : styles.categoryTextPressed}>Salon</Text>
        </Pressable>
        <Pressable onPress={setServiceCategory} style={services ? styles.categoryContainer : styles.categoryContainerPressed} >
          <Text style={services ? styles.categoryText : styles.categoryTextPressed}>Services</Text>
        </Pressable>
      </View>
      <CouponList />
    </View>
  );
};

const CouponHome = () => {
  return (
    <>
      {/* <Header /> */}
      <FilterCouponModals />
      {/* <CouponList /> */}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'tomato',
    paddingTop: Platform.OS === 'ios' ? 8 : 0,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 16,
    textAlign: 'center',
  },
  CouponContainer: {
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
  CouponHeading: {
    fontSize: 20,
    fontWeight: '600',
  },
  categoryText: {
    color: '#2E5DB5',
    fontWeight: '800',
    alignSelf: 'center',
  },
  categoryTextPressed: {
    color: '#fff',
    fontWeight: '800',
    alignSelf: 'center',
  },
  categoryContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    opacity: 1,
    flex: .3,
    borderWidth: 2,
    borderColor: '#2E5DB5',
    paddingTop: 10,
    paddingBottom: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  categoryContainerPressed: {
    backgroundColor: '#2E5DB5',
    borderRadius: 50,
    flex: .3,
    borderWidth: 2,
    borderColor: '#2E5DB5',
    paddingTop: 10,
    paddingBottom: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  
  categoriesContainer: {
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: 'space-evenly',
    // justifyContent: 'center',
    paddingVertical:7,
  },
  
});

export default CouponHome;