import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
} from 'react-native';

import styles from './styles';

class StartScreen extends Component {
    constructor(props){
        super(props);
    };

    static navigationOptions = {
            headerStyle: {
                backgroundColor: '#000',
            },
    };

    render() {
        return (
            <ImageBackground source={require('../img/MS11.jpg')} style={{width: '100%', height:'100%'}}>
                <StatusBar barStyle='light-content'/>
                <View>
                    <Text style={styles.copyright}>Copyright © 2019 Peter Fischer. All Rights Reserved</Text>
                </View>
                    <View style={styles.container}>
                        <Image source={require('../img/2-revolver.png')}/>
                        <Text style={styles.welcome}>Welcome to the CMSA Pattern App </Text>
                        <Text style={styles.subtext}>everything in 3D for better visualisation</Text>
                        <Text style={styles.instructions}>'All CMSA Pattern with different views, like from the air, to get a better understanding with an animated way how to ride and how to shoot the pattern'</Text>
                        <Text style={{fontSize: 8, color: '#4f4f4f'}}>V1.0.7</Text>
                        <ScrollView>
                            <Text style={styles.disclaimTitle}>Please read carefully (Disclaimer):</Text>
                            <Text style={styles.disclaimText}>All pattern correspond to the CMSA rulebook 2019/2020. Also, all pattern in this App are drawn in scale according to the measurements in the CMSA rulebook 2019/2020. But in 'real life' competition setup, the pattern can look slightly different from those here because the length and the width of the given arena, where the competition is hold, can be different. Sometimes they are longer or shorter or even more narrow. But, mostly the way how to run and shoot the pattern (drawn in the App here), is the way how a beginner should engage the course (pattern). Sure, it is a suggestion. You can modify/ change the way or if the setup at a competition does vary a little bit, adjust the way how you engage the pattern.</Text>
                            <Text style={styles.disclaimText}>The developer is not responsible for any mistakes or  misinterpretations and the resulting outcome of the run.</Text>
                        </ScrollView>
                    </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Select') }>
                    <Text style={[styles.button, { textAlign: 'center'}]}>Start Here</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default StartScreen;