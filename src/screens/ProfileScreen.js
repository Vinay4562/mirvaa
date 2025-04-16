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

const ProfileScreen = ({ navigation }) => {
  // Mock user data
  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    address: '123, Green Park, New Delhi - 110016',
  };

  const menuItems = [
    {
      id: 1,
      title: 'My Orders',
      icon: 'receipt-outline',
      screen: 'Orders',
    },
    {
      id: 2,
      title: 'My Addresses',
      icon: 'location-outline',
      screen: 'Addresses',
    },
    {
      id: 3,
      title: 'Payment Methods',
      icon: 'card-outline',
      screen: 'PaymentMethods',
    },
    {
      id: 4,
      title: 'Notifications',
      icon: 'notifications-outline',
      screen: 'Notifications',
    },
    {
      id: 5,
      title: 'Help & Support',
      icon: 'help-circle-outline',
      screen: 'Help',
    },
    {
      id: 6,
      title: 'About Us',
      icon: 'information-circle-outline',
      screen: 'About',
    },
  ];

  const handleLogout = () => {
    // Implement logout functionality
    console.log('Logout pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://example.com/profile.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <TouchableOpacity
              style={styles.editProfileButton}
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.menuItemLeft}>
                <Icon name={item.icon} size={24} color="#666" />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="log-out-outline" size={24} color="#FF69B4" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
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
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  editProfileButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  editProfileText: {
    fontSize: 12,
    color: '#666',
  },
  menuSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF69B4',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginLeft: 8,
  },
});

export default ProfileScreen; 