import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Mock product details
  const productDetails = {
    ...product,
    description: 'Beautiful handcrafted saree with intricate designs. Made with premium quality silk fabric. Perfect for special occasions.',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Red', 'Blue', 'Green', 'Black'],
    rating: 4.5,
    reviews: 128,
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log('Added to cart:', productDetails);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWishlist}>
          <Icon
            name={isWishlisted ? 'heart' : 'heart-outline'}
            size={24}
            color={isWishlisted ? '#FF69B4' : '#000'}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <Image
          source={{ uri: productDetails.image }}
          style={styles.productImage}
          resizeMode="cover"
        />

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{productDetails.name}</Text>
          <Text style={styles.productPrice}>{productDetails.price}</Text>
          
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>
              {productDetails.rating} ({productDetails.reviews} reviews)
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{productDetails.description}</Text>

          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeContainer}>
            {productDetails.size.map((size) => (
              <TouchableOpacity key={size} style={styles.sizeButton}>
                <Text style={styles.sizeText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Color</Text>
          <View style={styles.colorContainer}>
            {productDetails.color.map((color) => (
              <TouchableOpacity
                key={color}
                style={[styles.colorButton, { backgroundColor: color.toLowerCase() }]}
              />
            ))}
          </View>

          <View style={styles.quantityContainer}>
            <Text style={styles.sectionTitle}>Quantity</Text>
            <View style={styles.quantityButtons}>
              <TouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.quantityButton}
              >
                <Icon name="remove" size={20} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                style={styles.quantityButton}
              >
                <Icon name="add" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.button, styles.addToCartButton]}
          onPress={handleAddToCart}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buyNowButton]}
          onPress={() => {/* Implement buy now */}}
        >
          <Text style={[styles.buttonText, styles.buyNowText]}>Buy Now</Text>
        </TouchableOpacity>
      </View>
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
  },
  productImage: {
    width: width,
    height: width,
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  sizeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  sizeText: {
    fontSize: 14,
  },
  colorContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  quantityButtons: {
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
  actionButtons: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  addToCartButton: {
    backgroundColor: '#FF69B4',
  },
  buyNowButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF69B4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNowText: {
    color: '#FF69B4',
  },
});

export default ProductDetailsScreen; 