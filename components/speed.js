import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert,} from 'react-native';
import pattern from "./patterndescript";
import styles from './styles';

class SpeedScreen extends Component {
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
            pattImg = <Image source={require('../img/Pattern/01/1speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if(gPatNum === '3'){
            pattImg = <Image source={require('../img/Pattern/03/3speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '4') {
            pattImg = <Image source={require('../img/Pattern/04/4speed.jpg')} style={{width: '100%', height: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '6') {
            pattImg = <Image source={require('../img/Pattern/06/6speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '7') {
            pattImg = <Image source={require('../img/Pattern/07/7speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '8') {
            pattImg = <Image source={require('../img/Pattern/08/8speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '9') {
            pattImg = <Image source={require('../img/Pattern/09/9speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '10') {
            pattImg = <Image source={require('../img/Pattern/010/10speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '12') {
            pattImg = <Image source={require('../img/Pattern/012/12speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '13') {
            pattImg = <Image source={require('../img/Pattern/013/13speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '14') {
            pattImg = <Image source={require('../img/Pattern/014/14speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '17') {
            pattImg = <Image source={require('../img/Pattern/017/17speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '18') {
            pattImg = <Image source={require('../img/Pattern/018/18speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '20') {
            pattImg = <Image source={require('../img/Pattern/020/20speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '21') {
            pattImg = <Image source={require('../img/Pattern/021/21speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '22') {
            pattImg = <Image source={require('../img/Pattern/022/22speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '23') {
            pattImg = <Image source={require('../img/Pattern/023/23speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '24') {
            pattImg = <Image source={require('../img/Pattern/024/24speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '25') {
            pattImg = <Image source={require('../img/Pattern/025/25speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '26') {
            pattImg = <Image source={require('../img/Pattern/026/26speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '27') {
            pattImg = <Image source={require('../img/Pattern/027/27speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '28') {
            pattImg = <Image source={require('../img/Pattern/028/28speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '29') {
            pattImg = <Image source={require('../img/Pattern/029/29speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '31') {
            pattImg = <Image source={require('../img/Pattern/031/31speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '32') {
            pattImg = <Image source={require('../img/Pattern/032/32speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '34') {
            pattImg = <Image source={require('../img/Pattern/034/34speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '35') {
            pattImg = <Image source={require('../img/Pattern/035/35speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '36') {
            pattImg = <Image source={require('../img/Pattern/036/36speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '37') {
            pattImg = <Image source={require('../img/Pattern/037/37speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '40') {
            pattImg = <Image source={require('../img/Pattern/040/40speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '41') {
            pattImg = <Image source={require('../img/Pattern/041/41speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '42') {
            pattImg = <Image source={require('../img/Pattern/042/42speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '43') {
            pattImg = <Image source={require('../img/Pattern/043/43speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '45') {
            pattImg = <Image source={require('../img/Pattern/045/45speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '46') {
            pattImg = <Image source={require('../img/Pattern/046/46speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '47') {
            pattImg = <Image source={require('../img/Pattern/047/47speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '48') {
            pattImg = <Image source={require('../img/Pattern/048/48speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '49') {
            pattImg = <Image source={require('../img/Pattern/049/49speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '50') {
            pattImg = <Image source={require('../img/Pattern/050/50speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '51') {
            pattImg = <Image source={require('../img/Pattern/051/51speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '52') {
            pattImg = <Image source={require('../img/Pattern/052/52speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '53') {
            pattImg = <Image source={require('../img/Pattern/053/53speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '55') {
            pattImg = <Image source={require('../img/Pattern/055/55speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '57') {
            pattImg = <Image source={require('../img/Pattern/057/57speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '59') {
            pattImg = <Image source={require('../img/Pattern/059/59speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '60') {
            pattImg = <Image source={require('../img/Pattern/060/60speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '61') {
            pattImg = <Image source={require('../img/Pattern/061/61speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '62') {
            pattImg = <Image source={require('../img/Pattern/062/62speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '63') {
            pattImg = <Image source={require('../img/Pattern/063/63speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '64') {
            pattImg = <Image source={require('../img/Pattern/064/64speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '66') {
            pattImg = <Image source={require('../img/Pattern/066/66speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '68') {
            pattImg = <Image source={require('../img/Pattern/068/68speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '69') {
            pattImg = <Image source={require('../img/Pattern/069/69speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '71') {
            pattImg = <Image source={require('../img/Pattern/071/71speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '72') {
            pattImg = <Image source={require('../img/Pattern/072/72speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '73') {
            pattImg = <Image source={require('../img/Pattern/073/73speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '74') {
            pattImg = <Image source={require('../img/Pattern/074/74speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '75') {
            pattImg = <Image source={require('../img/Pattern/075/75speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '76') {
            pattImg = <Image source={require('../img/Pattern/076/76speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '77') {
            pattImg = <Image source={require('../img/Pattern/077/77speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '78') {
            pattImg = <Image source={require('../img/Pattern/078/78speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '79') {
            pattImg = <Image source={require('../img/Pattern/079/79speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '81') {
            pattImg = <Image source={require('../img/Pattern/081/81speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '82') {
            pattImg = <Image source={require('../img/Pattern/082/82speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '83') {
            pattImg = <Image source={require('../img/Pattern/083/83speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '84') {
            pattImg = <Image source={require('../img/Pattern/084/84speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '85') {
            pattImg = <Image source={require('../img/Pattern/085/85speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '86') {
            pattImg = <Image source={require('../img/Pattern/086/86speed.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
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
                {pattImg}
            </View>
        )
    }
}

export default SpeedScreen;