import React from 'react';
import {StyleSheet, PixelRatio} from 'react-native';

import {normalize} from '../modules/FontNormalize';

export const commons = StyleSheet.create({
  icon: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
  },
  title: {
    fontSize: normalize(26),
    fontWeight: 'bold',
  },
  text: {
    fontSize: normalize(14),
    fontWeight: 'normal',
  },
});
