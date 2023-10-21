import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import {MovieCard} from './MovieCard';
import {useNavigation} from '@react-navigation/native';

type Props = {
  data: number[];
};

const {width} = Dimensions.get('window');

export default function TrendingMovies(props: Props) {
  const {data} = props;
  const navigation = useNavigation();

  const handleClick = (item: number) => {
    navigation.navigate('Movie', item);
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        renderItem={() => <MovieCard handelClick={handleClick} />}
        firstItem={1}
        // loop={true}
        // inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{
          display: 'flex',
          alignItems: 'center',
        }}
      />
    </View>
  );
}
