import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Import local images
const product1Image = require('../../assets/images/flip.png');
const product2Image = require('../../assets/images/quest.png');
const product3Image = require('../../assets/images/xm5.jpg');
const product4Image = require('../../assets/images/15promax.jpg');
const product5Image = require('../../assets/images/bag.jpg');
const product6Image = require('../../assets/images/xboxe.png');
const product7Image = require('../../assets/images/chair.jpg');
const product8Image = require('../../assets/images/nike.jpg');
const product9Image = require('../../assets/images/mac.jpg');
const product10Image = require('../../assets/images/monitorspeaker.jpg');
const product11Image = require('../../assets/images/skateboardred.jpg');
const product12Image = require('../../assets/images/watch.jpg');

type RootStackParamList = {
  ProductDetailsScreen: { productId: string };
  // Add other screens here
};

type ProductCardNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetailsScreen'>;

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    price: string;
    imageUrl: string; // Keep this prop for now, even though we're using local assets
  };
};

// Map product IDs to local images
const productImages: Record<string, any> = {
  '1': product1Image,
  '2': product2Image,
  '3': product3Image,
  '4': product4Image,
  '5': product5Image,
  '6': product6Image,
  '7': product7Image,
  '8': product8Image,
  '9': product9Image,
  '10': product10Image,
  '11': product11Image,
  '12': product12Image,
  // Add more mappings as needed
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 30) / 2; // Assuming 2 cards per row with some margin

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigation = useNavigation<ProductCardNavigationProp>();

  const handlePress = () => {
    navigation.navigate('ProductDetailsScreen', { productId: product.id });
  };

  return (
    <TouchableOpacity style={[styles.card, { width: cardWidth }]} onPress={handlePress}>
      <Image 
        source={productImages[product.id]} 
        style={styles.image} 
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: cardWidth, // Set initial height equal to width for a square aspect ratio
    maxHeight: 200, // Maximum height to prevent overly tall images
  },
  textContainer: {
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    color: '#ba6c38',
  },
});

export default ProductCard;