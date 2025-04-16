import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  // Mock data for demonstration
  const trendingProducts = [
    { id: 1, name: 'Silk Saree', price: '₹2,999', image: 'https://example.com/saree1.jpg' },
    { id: 2, name: 'Cotton Dress', price: '₹1,499', image: 'https://example.com/dress1.jpg' },
    { id: 3, name: 'Designer Saree', price: '₹3,999', image: 'https://example.com/saree2.jpg' },
  ];

  const categories = [
    { id: 1, name: 'Sarees', icon: 'color-palette' },
    { id: 2, name: 'Dresses', icon: 'shirt' },
    { id: 3, name: 'Kurtis', icon: 'shirt-outline' },
    { id: 4, name: 'Lehengas', icon: 'diamond' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <Text style={styles.appName}>Mirvaa</Text>
        <View style={styles.topBarIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Icon name="heart-outline" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="cart-outline" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <Text style={styles.searchText}>Search for sarees, dresses, and more...</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://example.com/banner.jpg' }}
            style={styles.banner}
            resizeMode="cover"
          />
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryItem}>
                <Icon name={category.icon} size={30} color="#FF69B4" />
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Trending Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Now</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trendingProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() => navigation.navigate('ProductDetails', { product })}
              >
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                  resizeMode="cover"
                />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  topBarIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 16,
    padding: 12,
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchText: {
    color: '#666',
    fontSize: 14,
  },
  bannerContainer: {
    height: 200,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    width: '22%',
  },
  categoryName: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  productCard: {
    width: 160,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
});

export default HomeScreen; 