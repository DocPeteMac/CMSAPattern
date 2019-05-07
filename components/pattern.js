import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import pattern from './patterndescript';
import styles from './styles';

class PatternScreen extends Component {
    constructor(props){
        super(props);
    }

    descriptionCard = () => {
        return Alert.alert(
            `Pattern Number ${gPatNum}\n\n`,
            `${pattern.cmsapattern[gPatNum -1].patternDescription }`,
        );
    };

    render() {
        let pattImg;
        if(gPatNum === '1'){
            pattImg = <Image source={require('../img/Pattern/01/1.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if(gPatNum === '3'){
            pattImg = <Image source={require('../img/Pattern/03/3.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '4') {
            pattImg = <Image source={require('../img/Pattern/04/4.jpg')} style={{width: '100%', height: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '6') {
            pattImg = <Image source={require('../img/Pattern/06/6.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '7') {
            pattImg = <Image source={require('../img/Pattern/07/7.jpg')} style={{width: '100%', height: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '8') {
            pattImg = <Image source={require('../img/Pattern/08/8.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '9') {
            pattImg = <Image source={require('../img/Pattern/09/9.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '10') {
            pattImg = <Image source={require('../img/Pattern/010/10.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '12') {
            pattImg = <Image source={require('../img/Pattern/012/12.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '13') {
            pattImg = <Image source={require('../img/Pattern/013/13.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '14') {
            pattImg = <Image source={require('../img/Pattern/014/14.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '17') {
            pattImg = <Image source={require('../img/Pattern/017/17.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '18') {
            pattImg = <Image source={require('../img/Pattern/018/18.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '20') {
            pattImg = <Image source={require('../img/Pattern/020/20.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '21') {
            pattImg = <Image source={require('../img/Pattern/021/21.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '22') {
            pattImg = <Image source={require('../img/Pattern/022/22.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '23') {
            pattImg = <Image source={require('../img/Pattern/023/23.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '24') {
            pattImg = <Image source={require('../img/Pattern/024/24.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '25') {
            pattImg = <Image source={require('../img/Pattern/025/25.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '26') {
            pattImg = <Image source={require('../img/Pattern/026/26.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '27') {
            pattImg = <Image source={require('../img/Pattern/027/27.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '28') {
            pattImg = <Image source={require('../img/Pattern/028/28.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '29') {
            pattImg = <Image source={require('../img/Pattern/029/29.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '31') {
            pattImg = <Image source={require('../img/Pattern/031/31.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '32') {
            pattImg = <Image source={require('../img/Pattern/032/32.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '34') {
            pattImg = <Image source={require('../img/Pattern/034/34.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '35') {
            pattImg = <Image source={require('../img/Pattern/035/35.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '36') {
            pattImg = <Image source={require('../img/Pattern/036/36.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '37') {
            pattImg = <Image source={require('../img/Pattern/037/37.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '40') {
            pattImg = <Image source={require('../img/Pattern/040/40.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '41') {
            pattImg = <Image source={require('../img/Pattern/041/41.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '42') {
            pattImg = <Image source={require('../img/Pattern/042/42.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '43') {
            pattImg = <Image source={require('../img/Pattern/043/43.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '45') {
            pattImg = <Image source={require('../img/Pattern/045/45.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '46') {
            pattImg = <Image source={require('../img/Pattern/046/46.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '47') {
            pattImg = <Image source={require('../img/Pattern/047/47.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '48') {
            pattImg = <Image source={require('../img/Pattern/048/48.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '49') {
            pattImg = <Image source={require('../img/Pattern/049/49.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '50') {
            pattImg = <Image source={require('../img/Pattern/050/50.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '51') {
            pattImg = <Image source={require('../img/Pattern/051/51.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '52') {
            pattImg = <Image source={require('../img/Pattern/052/52.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '53') {
            pattImg = <Image source={require('../img/Pattern/053/53.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '55') {
            pattImg = <Image source={require('../img/Pattern/055/55.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '57') {
            pattImg = <Image source={require('../img/Pattern/057/57.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '59') {
            pattImg = <Image source={require('../img/Pattern/059/59.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '60') {
            pattImg = <Image source={require('../img/Pattern/060/60.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '61') {
            pattImg = <Image source={require('../img/Pattern/061/61.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '62') {
            pattImg = <Image source={require('../img/Pattern/062/62.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '63') {
            pattImg = <Image source={require('../img/Pattern/063/63.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '64') {
            pattImg = <Image source={require('../img/Pattern/064/64.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '66') {
            pattImg = <Image source={require('../img/Pattern/066/66.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '68') {
            pattImg = <Image source={require('../img/Pattern/068/68.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '69') {
            pattImg = <Image source={require('../img/Pattern/069/69.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '71') {
            pattImg = <Image source={require('../img/Pattern/071/71.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '72') {
            pattImg = <Image source={require('../img/Pattern/072/72.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '73') {
            pattImg = <Image source={require('../img/Pattern/073/73.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '74') {
            pattImg = <Image source={require('../img/Pattern/074/74.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '75') {
            pattImg = <Image source={require('../img/Pattern/075/75.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '76') {
            pattImg = <Image source={require('../img/Pattern/076/76.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '77') {
            pattImg = <Image source={require('../img/Pattern/077/77.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '78') {
            pattImg = <Image source={require('../img/Pattern/078/78.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '79') {
            pattImg = <Image source={require('../img/Pattern/079/79.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '81') {
            pattImg = <Image source={require('../img/Pattern/081/81.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '82') {
            pattImg = <Image source={require('../img/Pattern/082/82.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '83') {
            pattImg = <Image source={require('../img/Pattern/083/83.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '84') {
            pattImg = <Image source={require('../img/Pattern/084/84.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '85') {
            pattImg = <Image source={require('../img/Pattern/085/85.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '86') {
            pattImg = <Image source={require('../img/Pattern/086/86.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else{
            this.props.navigation.goBack()
        }


        return(
            <View style={styles.pattScreenContent}>
                <TouchableOpacity
                    onPress={() => {this.descriptionCard()}}
                    style={styles.pattDescript}>
                    <Text style={{color: '#e0b90d', textAlign: 'center', fontSize: 10}}>Description</Text>
                </TouchableOpacity>
                { pattImg }
            </View>
        )
    }
}

export default PatternScreen;
