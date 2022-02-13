import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React from 'react';
import NavOptions from '../components/NavOptions';
import MapView from 'react-native-maps';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
      <View>
        <View style={tw`h-1/2`}>
          <Map />
        </View>
        <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
              />
              <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{
                headerShown: false,
              }}
              />
          </Stack.Navigator>
        </View>
      </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})