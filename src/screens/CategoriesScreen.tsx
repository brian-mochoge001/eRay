import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import { 
  Smartphone, ShoppingBag, Home, Activity, Book, Heart, Gift, ShoppingCart,
  Laptop, Tablet, Camera, Headphones, Wifi, Gamepad, Paperclip, Tv, Shirt, Sofa, Dumbbell, Apple,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');
const sidebarWidth = width * 0.25;

const categories = [
  { id: '1', name: 'Electronics', icon: Smartphone },
  { id: '2', name: 'Fashion', icon: ShoppingBag },
  { id: '3', name: 'Home', icon: Home },
  { id: '4', name: 'Sports', icon: Activity },
  { id: '5', name: 'Books', icon: Book },
  { id: '6', name: 'Beauty', icon: Heart },
  { id: '7', name: 'Toys', icon: Gift },
  { id: '8', name: 'Groceries', icon: ShoppingCart },
];

const subcategories = [
  { id: '1-1', name: 'Smartphones', icon: Smartphone },
  { id: '1-2', name: 'Laptops', icon: Laptop },
  { id: '1-3', name: 'Tablets', icon: Tablet },
  { id: '1-4', name: 'Cameras', icon: Camera },
  { id: '1-5', name: 'Headphones', icon: Headphones },
  { id: '1-6', name: 'Smart Home', icon: Wifi },
  
  { id: '2-1', name: 'Men\'s Clothing', icon: Shirt },
  { id: '2-2', name: 'Women\'s Clothing', icon: Shirt },
  { id: '2-3', name: 'Shoes', icon: Laptop },
  { id: '2-4', name: 'Accessories', icon: Paperclip },
  { id: '2-5', name: 'Bags', icon: ShoppingBag },
  { id: '2-6', name: 'Jewelry', icon: Heart },
  
  { id: '3-1', name: 'Furniture', icon: Sofa },
  { id: '3-2', name: 'Kitchenware', icon: Home },
  { id: '3-3', name: 'Decor', icon: Gift },
  { id: '3-4', name: 'Bedding', icon: Tv },
  { id: '3-5', name: 'Lighting', icon: Headphones },
  { id: '3-6', name: 'Storage', icon: Camera },
  
  { id: '4-1', name: 'Fitness Equipment', icon: Dumbbell },
  { id: '4-2', name: 'Outdoor Gear', icon: Activity },
  { id: '4-3', name: 'Sports Apparel', icon: Heart },
  { id: '4-4', name: 'Team Sports', icon: Headphones },
  { id: '4-5', name: 'Swimming', icon: Wifi },
  { id: '4-6', name: 'Cycling', icon: Gamepad },
  
  { id: '5-1', name: 'Fiction', icon: Book },
  { id: '5-2', name: 'Non-Fiction', icon: Book },
  { id: '5-3', name: 'Children\'s Books', icon: Book },
  { id: '5-4', name: 'Educational', icon: Book },
  { id: '5-5', name: 'Comics', icon: Book },
  { id: '5-6', name: 'Magazines', icon: Book },
  
  { id: '6-1', name: 'Makeup', icon: Book },
  { id: '6-2', name: 'Skincare', icon: Heart },
  { id: '6-3', name: 'Fragrances', icon: Wifi },
  { id: '6-4', name: 'Haircare', icon: Gift },
  { id: '6-5', name: 'Tools & Accessories', icon: Paperclip },
  { id: '6-6', name: 'Men\'s Grooming', icon: Heart },
  
  { id: '7-1', name: 'Action Figures', icon: Gamepad },
  { id: '7-2', name: 'Dolls', icon: Dumbbell },
  { id: '7-3', name: 'Educational Toys', icon: Gamepad },
  { id: '7-4', name: 'Board Games', icon: Gamepad },
  { id: '7-5', name: 'Outdoor Play', icon: Activity },
  { id: '7-6', name: 'Building Sets', icon: Gift },
  
  { id: '8-1', name: 'Bakery', icon: Camera },
  { id: '8-2', name: 'Dairy', icon: Tv },
  { id: '8-3', name: 'Fruits', icon: Apple },
  { id: '8-4', name: 'Vegetables', icon: Apple },
  { id: '8-5', name: 'Meat', icon: Home },
  { id: '8-6', name: 'Beverages', icon: ShoppingCart },
];

type Category = {
  id: string;
  name: string;
  icon: React.ElementType;
};

const CategoriesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const renderCategoryItem = ({ item }: { item: Category }) => {
    const isActive = selectedCategory === item.id;
    const Icon = item.icon;
    return (
      <TouchableOpacity
        style={[styles.categoryItem, isActive && styles.activeCategory]}
        onPress={() => setSelectedCategory(item.id)}
      >
        <Icon size={24} color={isActive ? '#ba6c38' : '#333'} />
        <Text style={[styles.categoryName, isActive && styles.activeCategoryText]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderSubcategoryCard = ({ item }: { item: Category }) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity style={styles.subcategoryCard}>
        <Icon size={32} color="#ba6c38" />
        <Text style={styles.subcategoryName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {categories.map((category) => renderCategoryItem({ item: category }))}
        </ScrollView>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>Subcategories</Text>
        <FlatList
          data={subcategories.filter((sub) => sub.id.startsWith(selectedCategory))}
          renderItem={renderSubcategoryCard}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.subcategoriesContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  sidebar: {
    width: sidebarWidth,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingTop: 20,
  },
  categoryItem: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  activeCategory: {
    backgroundColor: '#efefef',
  },
  categoryName: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    color: '#333',
  },
  activeCategoryText: {
    color: '#ba6c38',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 20,
    color: '#999',
  },
  subcategoriesContainer: {
    paddingVertical: 10,
  },
  subcategoryCard: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subcategoryName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default CategoriesScreen;
