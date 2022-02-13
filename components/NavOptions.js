import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id:"123",
        title: "Book a Ride",
        image: "https://links.papareact.com/3pn", //Make own logo
        screen: "MapScreen",
    },
    {
        id:"456",
        title: "Order Food",
        image: "https://links.papareact.com/28w", //Make Own Logo
        screen: "EatScreen",
    },
];

const NavOptions = () => {

  const navigation = useNavigation();

  return (
    <FlatList 
      data = {data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
            style={{width: 110, height: 110, resizeMode: "contain" }}
            source={{uri: item.image}}
            />
            <Text style ={tw `mt-2 text-lg font-bold`}>{item.title}</Text>
            <Icon
            style={tw `p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
