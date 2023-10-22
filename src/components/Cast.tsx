import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';

// type Person = {
//   original_name: string;
//   character: string;
// };
//
// type Props = {
//   cast: Person[];
// };
//
type Props = {
  cast: number[];
};

export default function Cast(props: Props) {
  const {cast} = props;
  const navigation = useNavigation();
  let character =
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim s';
  let original_name = 'Lorem ipsum dolor sit amet, qui minim labor';

  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                // onPress={() => navigation.push('Person', person)}
                onPress={() => {
                  const stackActions = StackActions.push('Movie', {person});
                  navigation.dispatch(stackActions);
                }}
                className="mr-4 items-center">
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                  <Image
                    className="rounded-2xl h-24 w-20"
                    source={require('../assets/images/castImage1.png')}
                    // source={{
                    //   uri:
                    //     image185(person?.profile_path) || fallbackPersonImage,
                    // }}
                  />
                </View>

                <Text className="text-white text-xs mt-1">
                  {/* {person?.character.length > 10 */}
                  {/*   ? person.character.slice(0, 10) + '...' */}
                  {/*   : person?.character} */}
                  {character.length > 10
                    ? character.slice(0, 10) + '...'
                    : character}
                </Text>
                <Text className="text-neutral-400 text-xs">
                  {/* {person?.original_name.length > 10 */}
                  {/*   ? person.original_name.slice(0, 10) + '...' */}
                  {/*   : person?.original_name} */}
                  {original_name.length > 10
                    ? original_name.slice(0, 10) + '...'
                    : original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
