import React, { Component } from 'react';
import {createStackNavigator, createMaterialTopTabNavigator, createAppContainer, } from 'react-navigation';

import StartScreen from './components/start';
import PatternSelectScreen from './components/select';
import PatternScreen from './components/pattern';
import RunScreen from './components/runpattern';
import ShootScreen from './components/shootpattern';
import BirdsEyeScreen from './components/birdseye';
import RangeMasterScreen from './components/rangemaster';
import SpeedScreen from './components/speed';
import DayPatternScreen from './components/daypatternnumber';


const tabNav = createMaterialTopTabNavigator(
    {
        Pattern: { screen: PatternScreen },
        Run: { screen: RunScreen },
        Shoot: { screen: ShootScreen },
        BirdsEye: { screen: BirdsEyeScreen },
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e0b90d',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#2d2d2d',
                paddingBottom: 12,
            },
            labelStyle: {
                fontSize: 7,
            },
            headerStyle: {
                backgroundColor: '#2d2d2d'
            },
        }
    }
);

const appContainer = createStackNavigator(
    {
        Start: {screen: StartScreen},
        Select: {screen: PatternSelectScreen},
        RangeMaster: { screen: RangeMasterScreen},
        Speed: { screen: SpeedScreen },
        Tabs: { screen: tabNav},
        DayPattern: {screen: DayPatternScreen},
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2d2d2d',
            },
            headerTintColor: '#19869c',
        }
    },
    {
        initialRouteName: 'Start',
    },
);

const AppContainer = createAppContainer(appContainer);

export default class App extends Component {
    render() {
        return <AppContainer/>
    }
};
