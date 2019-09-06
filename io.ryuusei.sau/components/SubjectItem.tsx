import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

export default class SubjectItem extends React.Component{
    render(){
        return(
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#8D8D8D'}}>9:00</Text>
                    <View style={{marginLeft:5, marginRight:5, borderRadius: 10, backgroundColor:'#FF6663', height: 20, width: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{borderRadius:5, backgroundColor:'#FFFFFF', height: 10, width: 10}}></View>
                    </View>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontWeight:'bold', fontSize:18}}>네트워크 시스템</Text>
                                <View style={{backgroundColor:'#FF6663', borderRadius: 5, margin:2.5}}>
                                    <Text style={{fontSize:14, color:'#FFFFFF'}}>김덕은 교수님</Text>
                                </View>
                            </View>
                                <Text style={{color:'#8D8D8D'}}>본관 502호</Text>
                        </View>
                </View>
            </View>
        );
    }
}