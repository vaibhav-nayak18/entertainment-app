import {TouchableWithoutFeedback, Image, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

type Props = {
  handelClick: (item: number) => void;
  item: number;
};
export function MovieCard(props: Props) {
  const {handelClick, item} = props;
  return (
    <TouchableWithoutFeedback onPress={() => handelClick(item)}>
      <Image
        source={require('../assets/images/moviePoster1.png')}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
}
