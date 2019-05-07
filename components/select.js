import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Alert, ScrollView, } from 'react-native';
import styles from './styles';

class PatternSelectScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            PatternNumber: '',
            delPatNum: ['2', '5', '11', '15', '16', '30', '33', '38', '39', '44', '54', '56', '58', '65', '67', '70', '80'],
            todaysNumber: '',
            todaysPattern: [],
            todaysNum1: '',
        };
    };

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#2d2d2d',
        },
    };

    onChangeInput = (value) => {
        this.setState({PatternNumber:value})
    };

    checkPatternInput = () => {
        if(this.state.delPatNum.indexOf(gPatNum) !== -1){
            Alert.alert(
                'Pattern Number Alert',
                `The Pattern Number ${gPatNum} is not available within the CMSA Pattern anymore`,
                [
                    {text: 'Select Another Pattern', onPress: () => this.props.navigation.navigate('Select')}
                    ],
            )
        }
        else if(this.state.PatternNumber !== '') {
            this.props.navigation.navigate('Tabs');
        }else{
            alert('Please Enter a Pattern Number')
        }
    };

    checkRmInput = () => {
        if(this.state.delPatNum.indexOf(gPatNum) !== -1){
            Alert.alert(
                'Pattern Number Alert',
                `The Pattern Number ${gPatNum} is not available within the CMSA Pattern anymore`,
                [
                    {text: 'Select Another Pattern', onPress: () => this.props.navigation.navigate('Select')}
                ],
            )
        }
        else if(this.state.PatternNumber !== '') {
            this.props.navigation.navigate('RangeMaster')
        }else{
            alert('Please Enter a Pattern Number')
        }
    };

    checkSpeedInput = () => {
        if(this.state.delPatNum.indexOf(gPatNum) !== -1){
            Alert.alert(
                'Pattern Number Alert',
                `The Pattern Number ${gPatNum} is not available within the CMSA Pattern anymore`,
                [
                    {text: 'Select Another Pattern', onPress: () => this.props.navigation.navigate('Select')}
                ],
            )
        }
        else if(this.state.PatternNumber !== ''){
            this.props.navigation.navigate('Speed')
        }else{
            alert('Please Enter a Pattern Number')
        }
    };

    render() {
        global.gPatNum = this.state.PatternNumber;
        return(
            <View style={styles.screenContent}>
                <KeyboardAvoidingView
                    behavior="padding"
                    enabled
                    keyboardVerticalOffset='10'>
                    <SafeAreaView>
                        <TouchableOpacity
                            style={{backgroundColor: '#988c03',marginBottom: 5, alignItems: 'center', paddingVertical: 5,}}
                            onPress={() => this.props.navigation.navigate('DayPattern')}>
                            <Text>Tap here to put in today's pattern</Text>
                        </TouchableOpacity>
                        <Text style={{color: '#09ff05', margin: 5, textAlign: 'center', paddingHorizontal: 40,}}>Please type in the pattern number you want to see:</Text>
                        <View style={{alignItems: 'center'}}>
                            <TextInput
                                value={this.state.PatternNumber}
                                style={[styles.inputLine, {marginBottom: 20}]}
                                keyboardType='number-pad'
                                keyboardAppearance='dark'
                                placeholder='Pattern #'
                                placeholderTextColor='#19869C'
                                onChangeText={this.onChangeInput}
                                returnKeyType='done'
                                onFocus={() => this.setState({PatternNumber: ''})}/>

                            <ScrollView style={{alignContent: 'center', paddingHorizontal: 20}}>
                                <View style={{backgroundColor: '#4f4a42', alignItems: 'center', paddingBottom: 30, width: '90%'}}>
                                <Text style={styles.buttonDescription}>Tap here to see the pattern</Text>
                                <TouchableOpacity
                                    style={styles.patternButton}
                                    onPress={this.checkPatternInput}>
                                    <Text style={[styles.patternButtonText, {color: '#09ff05'}]}>See The Pattern Here</Text>
                                </TouchableOpacity>
                                <Text style={styles.buttonDescription}>Tap here to see the measurements for this pattern</Text>
                                <TouchableOpacity
                                    style={styles.patternButton}
                                    onPress={this.checkRmInput}>
                                    <Text style={styles.patternButtonText}>Range Master View</Text>
                                </TouchableOpacity>
                                <Text style={styles.buttonDescription}>See here how to improve your speed</Text>
                                <TouchableOpacity
                                    style={styles.patternButton}
                                    onPress={this.checkSpeedInput}>
                                    <Text style={styles.patternButtonText}>Speed</Text>
                                </TouchableOpacity>
                                <Text style={styles.buttonDescription}>Back to the start screen</Text>
                                <TouchableOpacity
                                    style={styles.patternButton}
                                    onPress={() => this.props.navigation.goBack()}>
                                    <Text style={styles.patternButtonText}>Back</Text>
                                </TouchableOpacity>
                                </View>
                                </ScrollView>
                            </View>
                    </SafeAreaView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default PatternSelectScreen;