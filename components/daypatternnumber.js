import React, { Component } from 'react';
import {AsyncStorage, Platform, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";


class DayPatternScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: '',
            backgroundColor: '#4b4b4b'
        }
    }

    addPatternNumber1 = (value) => {
        this.setState({num1: value});
    };
    addPatternNumber2 = (value) => {
        this.setState({num2: value});
    };
    addPatternNumber3 = (value) => {
        this.setState({num3: value});
    };
    addPatternNumber4 = (value) => {
        this.setState({num4: value});
    };
    addPatternNumber5 = (value) => {
        this.setState({num5: value});
    };

    storeTodaysPatternNum = () => {
        AsyncStorage.setItem('Num1').then((val) => this.setState({num1: val}));
    };


    render() {
        return (
            <View style={styles.screenContent}>
                <Text style={{color: '#fff', paddingBottom: 10, marginHorizontal: 20, textAlign: 'justify',}}>What pattern are we running today? - take note below:</Text>
                <Text style={{color: '#a3a3a3', paddingBottom: 10, marginHorizontal: 20, textAlign: 'justify', fontSize: 10}}>The Input allow only two numbers. If you want to change any input you need to delete the number in the corresponding field{'\n'}</Text>
                <View style={{flexDirection: 'row', marginTop: 5,}}>
                    <TextInput
                        style={[styles.dayPatNum, { borderColor: '#3b959b', backgroundColor: this.state.backgroundColor }]}
                        value={this.state.num1}
                        keyboardType='number-pad'
                        placeholder="# 1"
                        placeholderTextColor='#c0bcbc'
                        keyboardAppearance='dark'
                        onChangeText={this.addPatternNumber1}
                        autoFocus={true}
                        returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                        maxLength={2}
                        onEndEditing={() => {this.input2.focus()}}
                    />
                    <TextInput
                        ref={(input) => this.input2 = input}
                        style={[styles.dayPatNum, { borderColor: '#49bec3', }]}
                        value={this.state.num2}
                        keyboardType='number-pad'
                        placeholder="# 2"
                        placeholderTextColor='#c0bcbc'
                        keyboardAppearance='dark'
                        onChangeText={this.addPatternNumber2}
                        returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                        maxLength={2}
                        onEndEditing={() => {this.input3.focus()}}
                    />
                    <TextInput
                        ref={(input) => {this.input3 = input}}
                        style={styles.dayPatNum}
                        value={this.state.num3}
                        keyboardType='number-pad'
                        placeholder="# 3"
                        placeholderTextColor='#c0bcbc'
                        returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                        maxLength={2}
                        keyboardAppearance='dark'
                        onChangeText={this.addPatternNumber3}
                        onEndEditing={() => {this.input4.focus()}}
                    />
                    <TextInput
                        ref={(input => this.input4 = input)}
                        style={[styles.dayPatNum, { borderColor: '#49bec3' }]}
                        value={this.state.num4}
                        keyboardType='number-pad'
                        placeholder="# 4"
                        placeholderTextColor='#c0bcbc'
                        returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                        maxLength={2}
                        keyboardAppearance='dark'
                        onChangeText={this.addPatternNumber4}
                        onEndEditing={() => {this.input5.focus()}}
                    />
                    <TextInput
                        ref={(input) => {this.input5 = input}}
                        style={[styles.dayPatNum, { borderColor: '#3b959b' }]}
                        value={this.state.num5}
                        keyboardType='number-pad'
                        placeholder="# 5"
                        placeholderTextColor='#c0bcbc'
                        returnKeyType={'done'}
                        maxLength={2}
                        keyboardAppearance='dark'
                        onChangeText={this.addPatternNumber5}
                    />
                </View>

                <TouchableOpacity onPress={this.getNum1} style={{borderWidth: 1, borderColor: '#52e5eb', padding: 5, borderRadius: 5, marginTop: 15, }}>
                    <Text style={{color: 'yellow'}}>Store The Number</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

export default DayPatternScreen;

