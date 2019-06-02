import React from 'react';

import Cookie from './Cookie.js';

cookie = new Cookie();
let link;
let method;
const map = new Map();

var getValue;
var getCookie;

export default class ResponseParser extends React.Component {
  ResponseParser() {}

  SetLink(_link) {
    link = _link;
  }

  SetMethod(_method) {
    method = _method;
  }

  SetParameter(name, value) {
    map.set(name, value);
  }

  GetParameter(name) {
    return map.get(name);
  }

  GetValue() {
    var resValue = '';
    for (const [key, value] of map) {
      resValue = resValue + key + '=' + value + '&';
    }

    getValue = resValue.substr(0, resValue.length - 1);
    return getValue;
  }

  SetCookie(_cookie) {
    cookie = _cookie;
  }

  GetCookie() {
    getCookie = cookie.GetCookie();
    return getCookie;
  }
}
