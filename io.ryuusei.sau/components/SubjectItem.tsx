import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SubjectItem extends React.Component{
    render(){
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 21}}>
                        <Text style={{fontWeight: 'bold', color: '#8D8D8D'}}>9:00</Text>
                    </View>
                    <View style={{backgroundColor: '#FF6663', width: 15, height: 15, borderRadius: 7.5, justifyContent:'center', alignItems:'center', marginTop: 5.5, marginLeft: 19, marginRight: 19}}>
                        <View style={{backgroundColor: '#ffffff', width: 10, height: 10, borderRadius: 5}}></View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>네트워크 시스템</Text>
                            <View style={{backgroundColor: '#FF6663', borderRadius: 5, margin: 2.5, alignItems: "center", paddingLeft: 3.5, paddingRight: 3.7}}>
                                <Text style={{fontSize: 14, color: '#ffffff'}}>김덕은</Text>
                            </View>
                        </View>
                        <Text style={{color: '#8D8D8D'}}>본관 502호</Text>
                    </View>
                </View>
            </View>
        );
    }
}