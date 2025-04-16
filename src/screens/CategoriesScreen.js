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
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CategoriesScreen = ({ navigation }) => {
  // Mock categories data
  const categories = [
    {
      id: 1,
      name: 'Silk Sarees',
      image: 'https://example.com/silk-sarees.jpg',
      count: 120,
    },
    {
      id: 2,
      name: 'Cotton Sarees',
      image: 'https://example.com/cotton-sarees.jpg',
      count: 85,
    },
    {
      id: 3,
      name: 'Designer Sarees',
      image: 'https://example.com/designer-sarees.jpg',
      count: 65,
    },
    {
      id: 4,
      name: 'Casual Dresses',
      image: 'https://example.com/casual-dresses.jpg',
      count: 95,
    },
    {
      id: 5,
      name: 'Party Dresses',
      image: 'https://example.com/party-dresses.jpg',
      count: 75,
    },
    {
      id: 6,
      name: 'Traditional Dresses',
      image: 'https://example.com/traditional-dresses.jpg',
      count: 110,
    },
    {
      id: 7,
      name: 'Kurtis',
      image: 'https://example.com/kurtis.jpg',
      count: 150,
    },
    {
      id: 8,
      name: 'Lehengas',
      image: 'https://example.com/lehengas.jpg',
      count: 45,
    },
  ];

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('CategoryProducts', { category: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.categoryImage}
        resizeMode="cover"
      />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryCount}>{item.count} products</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.categoriesList}
        showsVerticalScrollIndicator={false}
      />
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
  categoriesList: {
    padding: 8,
  },
  categoryItem: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    width: '100%',
    height: 150,
  },
  categoryInfo: {
    padding: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 12,
    color: '#666',
  },
});

export default CategoriesScreen; 