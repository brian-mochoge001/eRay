import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import SearchBar from '../components/SearchBar';

const services = [
  { id: '1', name: 'eCurb', image: require('../../assets/services/eCurb.jpg') },
  { id: '3', name: 'eLiquor', image: require('../../assets/services/eLiquor.png') },
  { id: '4', name: 'C2C Marketplace', image: require('../../assets/services/C2C.png') },
  { id: '5', name: 'eCinema', image: require('../../assets/services/eCinema.png') },
  { id: '6', name: 'eCourier', image: require('../../assets/services/eCourier.png') },
  { id: '6', name: 'eFood', image: require('../../assets/services/eFood.png') },
  { id: '7', name: 'eMed', image: require('../../assets/services/eMed.png') },
  { id: '8', name: 'eVents', image: require('../../assets/services/eVents.png') },
  { id: '9', name: 'B2B Marketplace', image: require('../../assets/services/B2B.png') },
  { id: '10', name: 'home service', image: require('../../assets/services/homeservice.png') },
  { id: '11', name: 'uPcountry', image: require('../../assets/services/upcountry.png') },
  { id: '12', name: 'xXXL', image: require('../../assets/services/xxxl.png') },
  { id: '13', name: 'eProperty', image: require('../../assets/services/eCurb.jpg') },
  { id: '14', name: 'eLiquor', image: require('../../assets/services/eLiquor.png') },
  { id: '15', name: 'C2C Marketplace', image: require('../../assets/services/C2C.png') },
];

const ServicesScreen: React.FC = () => {
  const renderServiceCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.serviceName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.head}>Mini Services</Text>
      <FlatList
        data={services}
        renderItem={renderServiceCard}
        keyExtractor={(item) => item.id}
        numColumns={3} // Display 3 items per row
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
    marginTop: 10,
  },
  flatListContent: {
    paddingVertical: 10,
  },

  head: {
    fontSize: 24,
    color: '#999999',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#333',
  },
});

export default ServicesScreen;
