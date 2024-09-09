import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Checkbox } from 'react-native-paper'; // Ensure you have 'react-native-paper' installed

const sampleCartProducts = [
  { id: '1', name: 'JBL Flip 5', price: 'Ksh1,200.00', image: require('../../assets/images/flip.png') },
  { id: '2', name: 'Meta Quest 3', price: 'Ksh65,000.00', image: require('../../assets/images/quest.png') },
  { id: '3', name: 'Sony XM5', price: 'Ksh19,000.00', image: require('../../assets/images/xm5.jpg') },
  { id: '4', name: 'iPhone 15 Pro Max', price: 'Ksh165,000.00', image: require('../../assets/images/watch.jpg') },
  // Add more products as needed
];

const CartScreen: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handlePayment = () => {
    if (selectedProducts.length === 0) {
      Alert.alert('No products selected', 'Please select products to pay for.');
    } else {
      Alert.alert('Proceed to Payment', `You have selected ${selectedProducts.length} product(s) for payment.`);
      // Handle payment logic here
    }
  };

  const handleDelete = () => {
    if (selectedProducts.length === 0) {
      Alert.alert('No products selected', 'Please select products to delete.');
    } else {
      Alert.alert('Delete Products', 'Are you sure you want to delete the selected products?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Logic to delete selected products from the cart
            setSelectedProducts([]);
          },
          style: 'destructive',
        },
      ]);
    }
  };

  const renderCartItem = ({ item }: { item: any }) => (
    <View style={styles.cartItem}>
      <Checkbox
        status={selectedProducts.includes(item.id) ? 'checked' : 'unchecked'}
        onPress={() => toggleProductSelection(item.id)}
      />
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sampleCartProducts}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay for Selected</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete Selected</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 100,
    maxHeight: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#ba6c38',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#ba6c38',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
