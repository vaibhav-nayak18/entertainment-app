import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {StatusBar} from 'expo-status-bar';

import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
// import {useNavigation} from '@react-navigation/native';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';

const data = [1, 2, 3, 4];
const movie = [
  {
    title: ' est proident. Nostrud officia pariatur ut officia. ',
  },
  {
    title: ' est proident. Nostrud officia pariatur ut officia. ',
  },
  {
    title: ' est proident. Nostrud officia pariatur ut officia. ',
  },
  {
    title: ' est proident. Nostrud officia pariatur ut officia. ',
  },
];

export default function Home() {
  // const navigation = useNavigation();

  return (
    <View className="flex-1 bg-neutral-800 text-white">
      <SafeAreaView className={'my-8'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text className="text-yellow-300">M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {data.length > 0 && <TrendingMovies data={data} />}
        {movie.length > 0 && <MovieList data={movie} header={'Movies'} />}
        {movie.length > 0 && <MovieList data={movie} header={'Top Rated'} />}
      </ScrollView>
    </View>
  );
}
