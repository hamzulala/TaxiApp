import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id:"01",
        icon:"home",
        location:"Home",
        destination:"1 Bangs St, Prahran VIC 3181",
    },
    {
        id:"02",
        icon:"briefcase",
        location:"Work",
        destination:"23 Fillo Dr, Somerton VIC 3062",
    },
];

const NavFavourites = () => {
  return <FlatList data={data} keyExtractor={(item) => item.id} 
  renderItem={({item: { location, destination, icon}}) => (
      <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
          style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          name ={icon}
          type="ionicon"
          color="white"
          size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View> 
      </TouchableOpacity>
  )}
  />;
}

export default NavFavourites

const styles = StyleSheet.create({})