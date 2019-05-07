import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, Alert,} from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';
import pattern from "./patterndescript";
import styles from './styles';


class RangeMasterScreen extends Component {
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
            pattImg = <Image source={require('../img/Pattern/01/1rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if(gPatNum === '3'){
            pattImg = <Image source={require('../img/Pattern/03/3rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '4') {
            pattImg = <Image source={require('../img/Pattern/04/4rm.jpg')} style={{width: '100%', height: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '6') {
            pattImg = <Image source={require('../img/Pattern/06/6rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '7') {
            pattImg = <Image source={require('../img/Pattern/07/7rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '8') {
            pattImg = <Image source={require('../img/Pattern/08/8rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '9') {
            pattImg = <Image source={require('../img/Pattern/09/9rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '10') {
            pattImg = <Image source={require('../img/Pattern/010/10rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '12') {
            pattImg = <Image source={require('../img/Pattern/012/12rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '13') {
            pattImg = <Image source={require('../img/Pattern/013/13rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '14') {
            pattImg = <Image source={require('../img/Pattern/014/14rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '17') {
            pattImg = <Image source={require('../img/Pattern/017/17rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '18') {
            pattImg = <Image source={require('../img/Pattern/018/18rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '20') {
            pattImg = <Image source={require('../img/Pattern/020/20rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '21') {
            pattImg = <Image source={require('../img/Pattern/021/21rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '22') {
            pattImg = <Image source={require('../img/Pattern/022/22rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '23') {
            pattImg = <Image source={require('../img/Pattern/023/23rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '24') {
            pattImg = <Image source={require('../img/Pattern/024/24rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '25') {
            pattImg = <Image source={require('../img/Pattern/025/25rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '26') {
            pattImg = <Image source={require('../img/Pattern/026/26rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '27') {
            pattImg = <Image source={require('../img/Pattern/027/27rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '28') {
            pattImg = <Image source={require('../img/Pattern/028/28rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '29') {
            pattImg = <Image source={require('../img/Pattern/029/29rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '31') {
            pattImg = <Image source={require('../img/Pattern/031/31rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '32') {
            pattImg = <Image source={require('../img/Pattern/032/32rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '34') {
            pattImg = <Image source={require('../img/Pattern/034/34rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '35') {
            pattImg = <Image source={require('../img/Pattern/035/35rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '36') {
            pattImg = <Image source={require('../img/Pattern/036/36rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '37') {
            pattImg = <Image source={require('../img/Pattern/037/37rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '40') {
            pattImg = <Image source={require('../img/Pattern/040/40rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '41') {
            pattImg = <Image source={require('../img/Pattern/041/41rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '42') {
            pattImg = <Image source={require('../img/Pattern/042/42rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '43') {
            pattImg = <Image source={require('../img/Pattern/043/43rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '45') {
            pattImg = <Image source={require('../img/Pattern/045/45rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '46') {
            pattImg = <Image source={require('../img/Pattern/046/46rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '47') {
            pattImg = <Image source={require('../img/Pattern/047/47rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '48') {
            pattImg = <Image source={require('../img/Pattern/048/48rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '49') {
            pattImg = <Image source={require('../img/Pattern/049/49rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '50') {
            pattImg = <Image source={require('../img/Pattern/050/50rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '51') {
            pattImg = <Image source={require('../img/Pattern/051/51rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '52') {
            pattImg = <Image source={require('../img/Pattern/052/52rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '53') {
            pattImg = <Image source={require('../img/Pattern/053/53rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '55') {
            pattImg = <Image source={require('../img/Pattern/055/55rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '57') {
            pattImg = <Image source={require('../img/Pattern/057/57rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '59') {
            pattImg = <Image source={require('../img/Pattern/059/59rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '60') {
            pattImg = <Image source={require('../img/Pattern/060/60rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '61') {
            pattImg = <Image source={require('../img/Pattern/061/61rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '62') {
            pattImg = <Image source={require('../img/Pattern/062/62rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '63') {
            pattImg = <Image source={require('../img/Pattern/063/63rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '64') {
            pattImg = <Image source={require('../img/Pattern/064/64rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '66') {
            pattImg = <Image source={require('../img/Pattern/066/66rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '68') {
            pattImg = <Image source={require('../img/Pattern/068/68rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '69') {
            pattImg = <Image source={require('../img/Pattern/069/69rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '71') {
            pattImg = <Image source={require('../img/Pattern/071/71rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '72') {
            pattImg = <Image source={require('../img/Pattern/072/72rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '73') {
            pattImg = <Image source={require('../img/Pattern/073/73rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '74') {
            pattImg = <Image source={require('../img/Pattern/074/74rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '75') {
            pattImg = <Image source={require('../img/Pattern/075/75rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '76') {
            pattImg = <Image source={require('../img/Pattern/076/76rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '77') {
            pattImg = <Image source={require('../img/Pattern/077/77rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '78') {
            pattImg = <Image source={require('../img/Pattern/078/78rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '79') {
            pattImg = <Image source={require('../img/Pattern/079/79rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '81') {
            pattImg = <Image source={require('../img/Pattern/081/81rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '82') {
            pattImg = <Image source={require('../img/Pattern/082/82rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '83') {
            pattImg = <Image source={require('../img/Pattern/083/83rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '84') {
            pattImg = <Image source={require('../img/Pattern/084/84rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '85') {
            pattImg = <Image source={require('../img/Pattern/085/85rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else if( gPatNum === '86') {
            pattImg = <Image source={require('../img/Pattern/086/86rm.jpg')} style={{height: '100%', width: '100%'}} resizeMode='contain'/>
        }else{
            this.props.navigation.goBack()
        }

        return(
            <PinchZoomView
                style={styles.screenContent}
                maxScale={3}
                minScale={1}
            >
                <TouchableOpacity
                    onPress={() => {this.descriptionCard()}}
                    style={styles.rmDescript}>
                    <Text style={{color: '#1da0ba', textAlign: 'center', fontSize: 10}}>Description</Text>
                </TouchableOpacity>
                { pattImg }
            </PinchZoomView>
        )
    }
}

export default RangeMasterScreen;