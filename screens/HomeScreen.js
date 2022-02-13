import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React from 'react';
import NavOptions from '../components/NavOptions';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const HomeScreen = () => {
  return (
    <SafeAreaView style= { tw `bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
        style={{
            width: 100, 
            height: 100,
            resizeMode: 'contain'
        }}
        source={require('../images/taxi_logo.png')}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
