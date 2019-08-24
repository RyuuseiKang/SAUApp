import React from 'react';

const map = new Map();
export default class Cookie extends React.Component {
  Cookie() {}

  SetCookie(name, value) {
    map.set(name, value);
  }

  GetCookie(name) {
    return map.get(name);
  }

  GetCookie() {
    var resCookie = '';
    for (const [key, value] of map) {
      resCookie = resCookie + key + '=' + value + '; ';
    }
    return resCookie;
  }

  DeleteCookie(name) {
    map.delete(name);
  }

  ClearCookie() {
    map.clear();
  }
}
