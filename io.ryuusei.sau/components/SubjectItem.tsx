import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SubjectItem extends React.Component{
    render(){
        return(
            <View style={{flexDirection:'row'}}>
            <View style={{margin:2.5}}><Text style={{color:"#8D8D8D"}}>9:00</Text></View>
            <View ><View style={{backgroundColor: '#ff6663',margin:3,padding: 4,borderRadius: 10, alignContent:'center'}}>
                <View style={{backgroundColor:'#ffffff',padding:4,borderRadius:4,alignContent:'center'}}></View>
                </View>
                </View>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight: 'bold',fontSize: 18,margin:2}}>네트워크 시스템</Text>
                    <View style={{backgroundColor: '#ff6663',borderRadius: 5}}>
                        <Text style={{fontSize: 14, color:"#FFFFFF",margin:2}}>
                            김덕은
                        </Text>
                    </View>
                </View>
                <Text style={{color:"#8D8D8D"}}>
                    본관 502호
                </Text>
            </View>
            </View>
        );
    }
}

