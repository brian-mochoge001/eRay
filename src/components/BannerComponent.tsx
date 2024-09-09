import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BANNER_WIDTH = width - 12; // Full width minus padding (6 * 2)
const BANNER_HEIGHT = 200; // Fixed height for all banners

const banners = [
  require('../../assets/banners/banner1.jpg'),
  require('../../assets/banners/banner2.jpg'),
  require('../../assets/banners/banner3.jpg'),
];

const BannerComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / BANNER_WIDTH) % banners.length;
    setCurrentIndex(index);
  };

  const getItemLayout = (_: any, index: number) => ({
    length: BANNER_WIDTH,
    offset: BANNER_WIDTH * index,
    index,
  });

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.bannerContainer}>
      <Image source={item} style={styles.banner} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[...banners, banners[0]]} // Add the first item to the end for infinite scroll
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={BANNER_WIDTH}
        decelerationRate="fast"
        snapToAlignment="center"
        getItemLayout={getItemLayout}
        onEndReached={() => {
          flatListRef.current?.scrollToIndex({ index: 0, animated: false });
        }}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
  },
  bannerContainer: {
    width: BANNER_WIDTH,
    height: BANNER_HEIGHT,
    borderRadius: 12,
    overflow: 'hidden',
  },
  banner: {
    width: BANNER_WIDTH,
    height: BANNER_HEIGHT,
    resizeMode: 'cover',
  },
});

export default BannerComponent;