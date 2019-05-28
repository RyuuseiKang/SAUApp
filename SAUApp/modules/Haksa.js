import React from 'react';
import {AsyncStorage} from 'react-native';

export default class Haksa extends React.Component {
  // 이 하단부터는 학사 서버에 관련된 부분

  // 학사 로그인 세션관련

  // 학사 서버에 로그인
  async Login(userId, password) {
    try {
      let response = await fetch('https://sso.sau.ac.kr/login.jsp', {
        method: 'POST',
        headers: {
          Host: 'sso.sau.ac.kr',
          Connection: 'keep-alive',
          Origin: 'https://sso.sau.ac.kr',
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
          Referer:
            'https://sso.sau.ac.kr/?tmaxsso_next=http://haksa.sau.ac.kr:80',
        },
        body:
          'master_id=' +
          userId +
          '&master_passwd=' +
          password +
          '&x=0' +
          '&y=0',
        json: true,
      });
      let responseJson = await response.json();

      console.log(responseJson);

      return true;
    } catch (error) {
      console.log(error);
      return -1;
    }
  }

  // 이 하단부터는 출석 서버에 관련된 부분

  // 출석 로그인 세션 관련
  csSession = {
    isCsLogin: false,
    csCookie: '',
  };

  getIsCsLogin() {
    return this.csSession.isCsLogin;
  }

  // 출석 서버에 로그인
  async csLogin(userNumber, password) {
    try {
      let response = await fetch('https://cs.sau.ac.kr/m/loginChk.do', {
        method: 'POST',
        headers: {
          Host: 'cs.sau.ac.kr',
          'User-Agent': 'Mozilla/5.0',
          Connection: 'keep-alive',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
          Origin: 'https://cs.sau.ac.kr',
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Referer: 'https://cs.sau.ac.kr/m/login.do',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8,ko;q=0.7',
        },
        body: 'user_id=' + userNumber + '&' + 'user_pw=' + password,
        json: true,
      });
      let responseJson = await response.json();

      this.csSession.isCsLogin = responseJson.result;

      if (this.csSession.isCsLogin != true) {
        return 'done';
      }
      this.csSession.csCookie = response.headers
        .get('set-cookie')
        .replace(', ', '; ');

      console.log('Headers: ', this.csSession.csCookie);

      return 'done';
    } catch (error) {
      console.log(error);

      return 'done';
    }
  }

  // 출석 서버 세션이 살아있는지 검증
  async isAliveCsSession() {
    try {
      let response = await fetch('https://cs.sau.ac.kr/m/student/main.do', {
        method: 'GET',
        headers: {
          Host: 'cs.sau.ac.kr',
          Connection: 'keep-alive',
          'Upgrade-Insecure-Requests': 1,
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
          Referer: 'https://cs.sau.ac.kr/m/login.do',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8,ko;q=0.7',
          Cookie: this.csSession.csCookie,
        },
      });
      //let responseJson = await response.json();

      console.log(await response.text());
    } catch (error) {
      console.log(error);

      return 'done';
    }
  }

  // 로그인을 우선으로 진행하고 진행해야 함
}
