import React from 'react';
import {View, ScrollView, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default function MovieScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      className="flex-1 bg-neutral-800 px-4 text-white">
      <View className="w-full bg-green-200">
        <Image
          source={require('../assets/images/moviePoster2.png')}
          // source={{uri: image500(movie.poster_path) || fallbackMoviePoster}}
          style={{width, height: height * 0.55}}
        />
      </View>
    </ScrollView>
  );
}
