import React, { useState } from 'react';
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

const WishlistScreen = ({ navigation }) => {
  // Mock wishlist items
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Silk Saree',
      price: '₹2,999',
      image: 'https://example.com/saree1.jpg',
    },
    {
      id: 2,
      name: 'Designer Dress',
      price: '₹3,499',
      image: 'https://example.com/dress1.jpg',
    },
  ]);

  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Wishlist</Text>
        <View style={{ width: 24 }} />
      </View>

      {wishlistItems.length === 0 ? (
        <View style={styles.emptyWishlist}>
          <Icon name="heart-outline" size={64} color="#ddd" />
          <Text style={styles.emptyWishlistText}>Your wishlist is empty</Text>
          <TouchableOpacity
            style={styles.shopNowButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={styles.wishlistItems}>
          {wishlistItems.map((item) => (
            <View key={item.id} style={styles.wishlistItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.itemImage}
                resizeMode="cover"
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => {/* Implement add to cart */}}
                  >
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeFromWishlist(item.id)}
                  >
                    <Icon name="trash-outline" size={24} color="#FF69B4" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyWishlist: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyWishlistText: {
    fontSize: 18,
    color: '#666',
    marginTop: 16,
    marginBottom: 24,
  },
  shopNowButton: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 25,
  },
  shopNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wishlistItems: {
    flex: 1,
  },
  wishlistItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  removeButton: {
    padding: 8,
  },
});

export default WishlistScreen; 