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

const CartScreen = ({ navigation }) => {
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Silk Saree',
      price: '₹2,999',
      image: 'https://example.com/saree1.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Cotton Dress',
      price: '₹1,499',
      image: 'https://example.com/dress1.jpg',
      quantity: 2,
    },
  ]);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + parseInt(item.price.replace('₹', '').replace(',', '')) * item.quantity,
      0
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <View style={{ width: 24 }} />
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Icon name="cart-outline" size={64} color="#ddd" />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <TouchableOpacity
            style={styles.shopNowButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <ScrollView style={styles.cartItems}>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                  resizeMode="cover"
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, item.quantity - 1)}
                      style={styles.quantityButton}
                    >
                      <Icon name="remove" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, item.quantity + 1)}
                      style={styles.quantityButton}
                    >
                      <Icon name="add" size={20} color="#000" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => removeItem(item.id)}
                  style={styles.removeButton}
                >
                  <Icon name="trash-outline" size={24} color="#FF69B4" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* Checkout Section */}
          <View style={styles.checkoutSection}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalAmount}>₹{calculateTotal().toLocaleString()}</Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => {/* Implement checkout */}}
            >
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
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
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyCartText: {
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
  cartItems: {
    flex: 1,
  },
  cartItem: {
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
    justifyContent: 'center',
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 16,
  },
  removeButton: {
    justifyContent: 'center',
    padding: 8,
  },
  checkoutSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  checkoutButton: {
    backgroundColor: '#FF69B4',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen; 