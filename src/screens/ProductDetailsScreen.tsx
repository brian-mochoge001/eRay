import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  ProductDetailsScreen: { productId: string };
};

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetailsScreen'>;

const ProductDetailsScreen: React.FC = () => {
  const route = useRoute<ProductDetailsScreenRouteProp>();
  const { productId } = route.params;

  const product = {
    id: productId,
    name: 'Sample Product',
    description: 'This is a detailed description of the product.',
    price: '$100.00',
    imageUrl: 'https://via.placeholder.com/300',
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Button title="Add to Cart" onPress={() => { /* Add to cart functionality */ }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#ba6c38',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 24,
  },
});

export default ProductDetailsScreen;
