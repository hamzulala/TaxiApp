import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RideOptionsCard from './RideOptionsCard';


const NavigateCard = () => {
    
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`py-2.5 pl-2.5 text-xl font-bold`}>Where would you like to go?</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                    styles={toInputBoxstyles}
                    placeholder='Destination'
                    onPress={(data, details = null) => {
                        //console.log(data);
                        //console.log(details);
            
                        dispatch(
                          setDestination({
                          location: details.geometry.location,
                          description: data.description,
                        }));

                        navigation.navigate("RideOptionsCard");
                      }}

                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en-AU'
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
            </View>
        </View>
    </SafeAreaView>
  );
};

export default NavigateCard

const toInputBoxstyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop:20,
        flex:0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom:0,
    },
});