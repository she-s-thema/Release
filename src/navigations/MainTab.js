import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, Mypage, ChannelList, Home } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name }) => {
  const theme = useContext(ThemeContext);
  return (
    <MaterialIcons
      name={name}
      size={28}
      color="black"
    />
  );
};

const MainTab = ({ navigation, route }) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const title = getFocusedRouteNameFromRoute(route) ?? '채팅';
    navigation.setOptions({
      headerRight: () =>
        title === '채팅' && (
          <MaterialIcons
            name="add"
            size={26}
            style={{ margin: 10 }}
            onPress={() => navigation.navigate('Channel Creation')}
          />
        ),
    });
  }, [route]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.tabActiveColor,
        inactiveTintColor: theme.tabInactiveColor,
      }}
    >
      <Tab.Screen
         name="홈"
         component={Home}
         options={{
           tabBarIcon: ({ focused }) =>
               TabBarIcon({
                   focused,
                   name: focused ? 'home' : 'HomeOutlined',
               }),
         }}
      />
      <Tab.Screen
        name="채팅"
        component={ChannelList}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({
              focused,
              name: focused ? 'chat-bubble' : 'chat-outline',
            }),
        }}
      />
      <Tab.Screen
         name="글 작성"
         component={Profile}
         options={{
            tabBarIcon: ({ focused }) =>
                TabBarIcon({
                    focused,
                    name: focused ? 'person' : 'plus-circle',
                }),
         }}
      />
      <Tab.Screen
        name="내 소개"
        component={Mypage}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({
              focused,
              name: focused ? 'person' : 'person-outline',
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
