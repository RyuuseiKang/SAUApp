import React from 'react';
import {View, Text, StyleSheet, WebView} from 'react-native';

export default class SubjectItem extends React.Component {
    render(){
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 10}}><Text style={{color: '#8D8D8D', marginLeft: 5}}>9:00</Text></View>
                        <View>
                            <View style={{backgroundColor: '#FF6663', width: 10, height: 10, borderRadius: 7.5, justifyContent: 'center', alignContent: 'center', marginTop: 4.5, marginLeft: 7}}>
                            <View style={{backgroundColor: '#FFFFFF', width: 6, height: 6, borderRadius: 7.5, marginLeft: 2}}></View>
                        </View>
                    </View>
                    <View style={{marginLeft: 7}}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>네트워크 시스템</Text>
                    <View style={{backgroundColor: '#FF6663', borderRadius: 5, padding: 2, marginLeft: 5}}>
                        <Text style={{color: '#FFFFFF', fontSize: 14}}>김덕은 교수님</Text>
                    </View>
                    </View>
                    <Text style={{color: '#8D8D8D'}}>본관 502호</Text></View>
                </View>
            </View>
            );
        };
    }