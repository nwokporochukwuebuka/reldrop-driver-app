import React, { useEffect } from "react";
import {
  NavigationContainer,
  NavigationProp,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "App/types/navigation";
import OnboardPage from "App/pages/auth-pages/OnboardPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import Colors from "App/config/Colors";
import DashboardPage from "App/pages/main-pages/DashboardPage";
import { screenHeight, screenSize, screenWidth } from "App/constants/Sizes";
import HomeIcon from "App/assets/icons/HomeIcon";
import OrdersPage from "App/pages/order-pages/OrdersPage";
import OrdersIcon from "App/assets/icons/OrdersIcon";
import PlaceOrdersPage from "App/pages/main-pages/PlaceOrdersPage";
import PlaceOrderButton from "App/assets/icons/PlaceOrderButton";
import { SvgUri } from "react-native-svg";
import { OrdersNavigator } from "./OrdersNavigator";
import * as Haptics from "expo-haptics";
import EarningsIcon from "App/assets/icons/EarningsIcon";
import EarningsPage from "App/pages/main-pages/EarningsPage";
const MainStack = createBottomTabNavigator<MainStackParamList>();

export const MainNavigator: React.FC = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <MainStack.Navigator
      screenOptions={{
        tabBarStyle: {
          /*       marginTop:
            Platform.OS === "ios" ? screenHeight(0.037) : screenHeight(0.02), */
          paddingVertical:
            Platform.OS === "ios" ? screenHeight(0.017) : screenHeight(0.02),
          paddingBottom:
            Platform.OS === "ios" ? screenHeight(0.035) : screenHeight(0.014),
          height:
            Platform.OS === "ios" ? screenHeight(0.12) : screenHeight(0.099),
        },
      }}
    >
      <MainStack.Screen
        name="Home"
        component={DashboardPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              onPress={() => {
                navigation.navigate("Home");
                Haptics.selectionAsync();
              }}
              fill={focused ? Colors.DARK_GREY : Colors.OTHER_GREY}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              onPress={() => {
                navigation.navigate("Home");
                Haptics.selectionAsync();
              }}
              style={{
                fontFamily: "regular500",
                fontSize: screenWidth(0.039),

                color: focused ? Colors.DARK_GREY : Colors.OTHER_GREY,
              }}
            >
              Home
            </Text>
          ),
        }}
      />

      <MainStack.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <OrdersIcon
              onPress={() => {
                navigation.navigate("Orders");
                Haptics.selectionAsync();
              }}
              fill={focused ? Colors.DARK_GREY : Colors.OTHER_GREY}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontFamily: "regular500",
                fontSize: screenWidth(0.039),

                color: focused ? Colors.DARK_GREY : Colors.OTHER_GREY,
              }}
              onPress={() => {
                navigation.navigate("Orders");
                Haptics.selectionAsync();
              }}
            >
              Deliveries
            </Text>
          ),
        }}
      />

      <MainStack.Screen
        name="EarningsPage"
        component={EarningsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <EarningsIcon
              onPress={() => {
                navigation.navigate("Orders");
                Haptics.selectionAsync();
              }}
              fill={focused ? Colors.DARK_GREY : Colors.OTHER_GREY}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontFamily: "regular500",
                fontSize: screenWidth(0.039),

                color: focused ? Colors.DARK_GREY : Colors.OTHER_GREY,
              }}
              onPress={() => {
                navigation.navigate("Orders");
                Haptics.selectionAsync();
              }}
            >
              Earnings
            </Text>
          ),
        }}
      />
    </MainStack.Navigator>
  );
};
