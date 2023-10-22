import React, {useState} from 'react';
import {View, ScrollView, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

type MovieType = {
  title: string;
  id: string;
  status: string;
  runtime: string;
  release_date: string;
  overview: string;
  genres: {
    name: string;
  }[];
};

export default function MovieScreen() {
  const [movie, setMovie] = useState<MovieType>([]);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      className="flex-1 bg-neutral-800 px-4 text-white">
      <View className="w-full rounded-2xl">
        <Image
          source={require('../assets/images/moviePoster2.png')}
          // source={{uri: image500(movie.poster_path) || fallbackMoviePoster}}
          style={{
            width,
            height: height * 0.55,
          }}
        />
        <Text className="font-extrabold text-lg text-center mt-4">
          {movie?.title}
        </Text>
      </View>

      <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-widest">
          {movie?.title}
        </Text>

        {/* status, release year, runtime */}
        {movie?.id ? (
          <Text className="text-neutral-400 font-semibold text-base text-center">
            {movie?.status} • {movie?.release_date?.split('-')[0] || 'N/A'} •{' '}
            {movie?.runtime} min
          </Text>
        ) : null}

        {/* genres  */}
        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 !== movie.genres.length;
            return (
              <Text
                key={index}
                className="text-neutral-400 font-semibold text-base text-center">
                {genre?.name} {showDot ? '•' : null}
              </Text>
            );
          })}
        </View>

        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
        </Text>
      </View>
    </ScrollView>
  );
}
