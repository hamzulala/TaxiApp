import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React from 'react';
import NavOptions from '../components/NavOptions';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import {setDestination, setOrigin} from "../slices/navSlice"
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {
  const dispatch = useDispatch();
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
        <GooglePlacesAutocomplete 
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            //console.log(data);
            //console.log(details);

            dispatch(
              setOrigin({
              location: details.geometry.location,
              description: data.description,
            }))
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}

          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en-AU'
          }}

          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
        <NavFavourites/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
