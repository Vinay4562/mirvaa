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

const OrdersScreen = ({ navigation }) => {
  // Mock orders data
  const orders = [
    {
      id: 'ORD001',
      date: '2024-03-15',
      status: 'Delivered',
      items: [
        {
          id: 1,
          name: 'Silk Saree',
          price: '₹2,999',
          image: 'https://example.com/saree1.jpg',
          quantity: 1,
        },
      ],
      total: '₹2,999',
    },
    {
      id: 'ORD002',
      date: '2024-03-10',
      status: 'Shipped',
      items: [
        {
          id: 2,
          name: 'Cotton Dress',
          price: '₹1,499',
          image: 'https://example.com/dress1.jpg',
          quantity: 2,
        },
      ],
      total: '₹2,998',
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return '#4CAF50';
      case 'shipped':
        return '#2196F3';
      case 'processing':
        return '#FFC107';
      case 'cancelled':
        return '#F44336';
      default:
        return '#666';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyOrders}>
          <Icon name="receipt-outline" size={64} color="#ddd" />
          <Text style={styles.emptyOrdersText}>No orders yet</Text>
          <TouchableOpacity
            style={styles.shopNowButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.shopNowText}>Start Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={styles.ordersList}>
          {orders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <View>
                  <Text style={styles.orderId}>Order #{order.id}</Text>
                  <Text style={styles.orderDate}>{order.date}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                  <Text style={styles.statusText}>{order.status}</Text>
                </View>
              </View>

              {order.items.map((item) => (
                <View key={item.id} style={styles.orderItem}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                    resizeMode="cover"
                  />
                  <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>₹{item.price}</Text>
                    <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
                  </View>
                </View>
              ))}

              <View style={styles.orderFooter}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalAmount}>{order.total}</Text>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => {/* Implement reorder */}}
                >
                  <Text style={styles.actionButtonText}>Reorder</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.trackButton]}
                  onPress={() => {/* Implement track order */}}
                >
                  <Text style={[styles.actionButtonText, styles.trackButtonText]}>Track Order</Text>
                </TouchableOpacity>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyOrders: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyOrdersText: {
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
  ordersList: {
    flex: 1,
    padding: 16,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orderItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 12,
    color: '#666',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  trackButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF69B4',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  trackButtonText: {
    color: '#FF69B4',
  },
});

export default OrdersScreen; 