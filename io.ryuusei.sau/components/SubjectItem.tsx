import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {normalize} from '../modules/FontNormalize';

export default class SubjectItem extends React.Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{height: normalize(20), justifyContent: 'center'}}>
            <Text
              style={{
                color: '#8D8D8D',
                fontWeight: '500',
                fontSize: normalize(15),
              }}
            >
              9:00
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  fontWeight: 'bold',
                  fontSize: normalize(20),
                }}
              >
                네트워크 시스템
              </Text>
              <View
                style={{
                  backgroundColor: '#FF6663',
                  borderRadius: normalize(3),
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: normalize(16),
                    fontWeight: '500',
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  김덕은
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: '#8D8D8D',
                margin: 5,
                fontSize: normalize(18),
                fontWeight: '500',
              }}
            >
              본관 502
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
