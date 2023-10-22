import React, {useState} from 'react';
import {View, ScrollView, Text, Image, Dimensions} from 'react-native';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';

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

const data = [
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

const obj: MovieType = {
  genres: [{name: 'vaibhav'}],
  overview:
    'loremasdf asdjfiowe asdjfie ajdhf Loremipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  release_date: 'adkf ehidhf ekdo skda',
  id: '1234567',
  title: 'loerajd asdjkfj asdkfj fldd asdfsdaf',
  status: 'asdfkjdi dfheje diij kjkj',
  runtime: 'eueroafuafunv',
};

export default function MovieScreen() {
  const [movie, setMovie] = useState<MovieType>(obj);
  const cast = [1, 2, 3, 4, 5];
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
      </View>

      <View className="space-y-3">
        {/* title */}
        <Text className=" text-white text-center text-3xl font-bold tracking-widest">
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

      <Cast cast={cast} />
      <MovieList data={data} header="similar Movies" />
    </ScrollView>
  );
}
