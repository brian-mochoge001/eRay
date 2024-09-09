import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import BannerComponent from '../components/BannerComponent';

const sampleProducts = [
  { id: '1', name: 'JBL flip 5', price: 'Ksh1,200.00', imageUrl: '' },
  { id: '2', name: 'Meta quest3', price: 'Ksh65,000.00', imageUrl: '' },
  { id: '3', name: 'Sony XM5', price: 'Ksh19,000.00', imageUrl: '' },
  { id: '4', name: 'Iphone 15 pro max', price: 'Ksh165,000.00', imageUrl: '' },
  { id: '5', name: 'Womens bag', price: 'Ksh2,000.00', imageUrl: '' },
  { id: '6', name: 'Bike', price: 'Ksh25,000.00', imageUrl: '' },
  { id: '7', name: 'Gaming Chair', price: 'Ksh32,000.00', imageUrl: '' },
  { id: '8', name: 'Men Jeans', price: 'Ksh1,500.00', imageUrl: '' },
  { id: '9', name: 'Macbook pro m3', price: 'Ksh320,000.00', imageUrl: '' },
  { id: '10', name: 'Monitor speakers', price: 'Ksh30,000', imageUrl: '' },
  { id: '11', name: 'Monitor speakers', price: 'Ksh30,000', imageUrl: '' },
  { id: '12', name: 'Monitor speakers', price: 'Ksh30,000', imageUrl: '' },
];

const HomeScreen: React.FC = () => {
  const renderHeader = () => (
    <>
      <SearchBar />
      <BannerComponent />
    </>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={sampleProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  flatListContent: {
    paddingHorizontal: 8,
    paddingTop: 10,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;