import React from 'react';
import {AsyncStorage} from 'react-native';

import Cookie from './Cookie.js';
import ResponseParser from './ResponseParser.js';

export default class Haksa extends React.Component {
  async setSession() {
    this.csSession.csCookie = await AsyncStorage.getItem('CsCookie');
  }

  // 이 하단부터는 학사 서버에 관련된 부분

  // 학사 로그인 세션관련
  sauSession = {
    isCsLogin: false,
    Cookie: '',
  };

  async Login(userId, passwd) {
    try {
      this.LoginJsp(userId, passwd);
    } catch (error) {
      //console.log(error);
    }
  }

  cookie = new Cookie();
  responseParser = new ResponseParser();

  // TODO: LoginJsp
  async LoginJsp(userId, passwd) {
    let response = await fetch(
      'https://sso.sau.ac.kr/login.jsp?master_id=' +
        userId +
        '&master_passwd=' +
        passwd +
        '&x=0&y=0',
      {
        method: 'POST',
        headers: {
          Host: 'sso.sau.ac.kr',
          Connection: 'keep-alive',
          Accept: '*/*',
          Origin: 'https://sso.sau.ac.kr',
          Referer:
            'https://sso.sau.ac.kr/?tmaxsso_next=http://haksa.sau.ac.kr:80',
          'User-Agent': 'SAUApp/0.1',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    this.cookie.SetCookie(
      'JSESSIONID',
      await response.headers
        .get('set-cookie')
        .split('JSESSIONID=')[1]
        .split(';')[0]
    );

    this.cookie.SetCookie(
      'ROUTEID',
      await response.headers
        .get('set-cookie')
        .split('ROUTEID=')[1]
        .split(';')[0]
    );

    let body = await response.text().then(responseText => {
      return responseText.split('<form name')[1].split('</form>')[0];
    });

    //responseParser.SetMethod(body.split("method='")[1].split("'")[0]);
    //responseParser.SetLink(body.split("action='")[1].split("'")[0]);

    var paramsCount = (body.length - replaceAll(body, 'input', '').length) / 5;

    for (var i = 0; i < paramsCount; i++) {
      this.responseParser.SetParameter(
        body.split("name='")[i + 1].split("'")[0],
        body.split("value='")[i + 1].split("'")[0]
      );
    }

    this.LoginRegistrationToken();
  }

  // TODO: LoginRegistrationToken
  async LoginRegistrationToken() {
    let JspCookie = this.cookie.GetCookie();
    let JspValue = this.responseParser.GetValue();

    let response = await fetch(
      'https://ssoserver.sau.ac.kr/__tmax_eam_server__?' + JspValue,
      {
        method: 'POST',
        headers: {
          Host: 'ssoserver.sau.ac.kr',
          Connection: 'keep-alive',
          Accept: '*/*',
          Origin: 'https://sso.sau.ac.kr',
          Referer: 'https://sso.sau.ac.kr/login.jsp',
          'User-Agent': 'SAUApp/0.1',
          Cookie: JspCookie,
        },
      }
    );

    this.cookie.SetCookie(
      'tmaxsso_sessionindex',
      await response.headers
        .get('set-cookie')
        .split('tmaxsso_sessionindex=')[1]
        .split(';')[0]
    );

    this.cookie.SetCookie(
      'ROUTEID',
      await response.headers
        .get('set-cookie')
        .split('ROUTEID=')[1]
        .split(';')[0]
    );

    this.cookie.DeleteCookie('JSESSIONID');

    let body = await response.text().then(responseText => {
      return responseText.split('<form name')[1].split('</form>')[0];
    });

    //responseParser.SetMethod(body.split("method='")[1].split("'")[0]);
    //responseParser.SetLink(body.split("action='")[1].split("'")[0]);
    this.responseParser.Clear();

    var paramsCount = (body.length - replaceAll(body, 'input', '').length) / 5;

    for (var i = 0; i < paramsCount; i++) {
      this.responseParser.SetParameter(
        body.split("name='")[i + 1].split("'")[0],
        body.split("value='")[i + 1].split("'")[0]
      );
    }

    this.LoginRegistrationSession();
  }

  // TODO: LoginRegistrationSession
  async LoginRegistrationSession() {
    let JspCookie = this.cookie.GetCookie();
    let JspValue = this.responseParser.GetValue();

    let response = await fetch('http://haksa.sau.ac.kr/?' + JspValue, {
      method: 'POST',
      headers: {
        Host: 'haksa.sau.ac.kr',
        Connection: 'keep-alive',
        Accept: '*/*',
        Origin: 'null',
        'User-Agent': 'SAUApp/0.1',
        Cookie: JspCookie,
      },
    });

    this.cookie.SetCookie(
      'JSESSIONID',
      await response.headers
        .get('set-cookie')
        .split('JSESSIONID=')[1]
        .split(';')[0]
    );

    this.cookie.SetCookie(
      'ROUTEID',
      await response.headers
        .get('set-cookie')
        .split('ROUTEID=')[1]
        .split(';')[0]
    );

    let body = await response.text().then(responseText => {
      return responseText.split('<form name')[1].split('</form>')[0];
    });

    //responseParser.SetMethod(body.split("method='")[1].split("'")[0]);
    //responseParser.SetLink(body.split("action='")[1].split("'")[0]);
    this.responseParser.Clear();

    var paramsCount = (body.length - replaceAll(body, 'input', '').length) / 5;

    for (var i = 0; i < paramsCount; i++) {
      this.responseParser.SetParameter(
        body.split("name='")[i + 1].split("'")[0],
        body.split("value='")[i + 1].split("'")[0]
      );
    }

    this.LoginDistributionToken();
  }

  // TODO: LoginDistributionToken
  async LoginDistributionToken() {
    let JspCookie = this.cookie.GetCookie();
    let JspValue = this.responseParser.GetValue();

    let response = await fetch(
      'http://ssoserver.sau.ac.kr/__tmax_eam_server__?' + JspValue,
      {
        method: 'POST',
        headers: {
          Host: 'ssoserver.sau.ac.kr',
          Connection: 'keep-alive',
          Accept: '*/*',
          Origin: 'http://haksa.sau.ac.kr',
          Referer: 'http://haksa.sau.ac.kr/',
          'User-Agent': 'SAUApp/0.1',
          Cookie: JspCookie,
        },
      }
    );

    this.cookie.SetCookie(
      'ROUTEID',
      await response.headers
        .get('set-cookie')
        .split('ROUTEID=')[1]
        .split(';')[0]
    );

    let body = await response.text().then(responseText => {
      return responseText.split('<form name')[1].split('</form>')[0];
    });

    this.responseParser.Clear();

    var paramsCount = (body.length - replaceAll(body, 'input', '').length) / 5;

    for (var i = 0; i < paramsCount; i++) {
      this.responseParser.SetParameter(
        body.split("name='")[i + 1].split("'")[0],
        body.split("value='")[i + 1].split("'")[0]
      );
    }

    this.LoginCm();
  }

  // TODO: LoginCm
  async LoginCm() {
    let JspCookie = this.cookie.GetCookie();
    let JspValue = this.responseParser.GetValue();

    let response = await fetch(
      'http://haksa.sau.ac.kr/jsp/Tlogin/login_cm.jsp?' + JspValue,
      {
        method: 'POST',
        headers: {
          Host: 'haksa.sau.ac.kr',
          Connection: 'keep-alive',
          Accept: '*/*',
          Origin: 'http://ssoserver.sau.ac.kr',
          Referer:
            'http://ssoserver.sau.ac.kr/__tmax_eam_server__?tmaxsso_action=token_distribution',
          'User-Agent': 'SAUApp/0.1',
          'accept-encoding': 'gzip, deflate',
          Cookie: JspCookie,
        },
      }
    );

    cookie.SetCookie(
      'ROUTEID',
      await response.headers
        .get('set-cookie')
        .split('ROUTEID=')[1]
        .split(';')[0]
    );

    let body = await response;

    console.log('LoginCm Body:', body.indexOf('환영합니다'));

    // this.
  }

  // TODO: GetHaksa
  async GetHaksa() {
    let response = await fetch(
      'http://haksa.sau.ac.kr/jsp/haksa/hak_e0_ma0.jsp',
      {
        method: 'POST',
        headers: {
          Host: 'haksa.sau.ac.kr',
          Connection: 'keep-alive',
          Accept: '*/*',
          'User-Agent': 'SAUApp/0.1',
          'accept-encoding': 'gzip, deflate',
          Cookie: this.cookie.GetCookie(),
        },
      }
    );

    console.log(response);
  }

  setHaksaCookie(_haksaCookie) {
    this.sauSession.Cookie = _haksaCookie;
    console.log(sauSession.Cookie);
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
      this.csSession.csCookie = cookie.parse(
        response.headers.get('set-cookie').replace(', ', '; ')
      );

      await AsyncStorage.setItem('CsCookie', this.csSession.csCookie);

      console.log('Headers: ', this.csSession.csCookie);

      return 'done';
    } catch (error) {
      //console.log(error);

      return 'done';
    }
  }

  // 로그인 하지 않아도 학번을 쿠키로 넘겨 자동로그인으로 세션을 받아올 수 있기 때문에 생성된 메소드
  // 세션에 대한 쿠키는 자동으로 csCookie와 AsyncStorage에 기록됨
  async getCsCookie(userNumber) {
    try {
      this.csSession.csCookie = 'AUTOLOGIN=' + userNumber;

      let mainResponse = await fetch('https://cs.sau.ac.kr/m/student/main.do', {
        method: 'GET',
        headers: {
          Cookie: this.csSession.csCookie,
        },
      });
      const JSession = await mainResponse.headers
        .get('set-cookie')
        .split('JSESSIONID=')[1]
        .split(';')[0];
      this.csSession.csCookie =
        this.csSession.csCookie + '; JSESSIONID=' + JSession;

      let indexResponse = await fetch('https://cs.sau.ac.kr/index.do', {
        method: 'GET',
        headers: {
          Cookie: this.csSession.csCookie,
        },
      });
      const Scouter = await indexResponse.headers
        .get('set-cookie')
        .split('SCOUTER=')[1]
        .split(';')[0];
      this.csSession.csCookie =
        this.csSession.csCookie + '; SCOUTER=' + Scouter;

      this.csSession.isCsLogin = this.isAliveCsSession();

      await AsyncStorage.setItem('CsCookie', this.csSession.csCookie);

      console.log(this.csSession.csCookie);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // 출석 서버 세션이 살아있는지 검증
  async isAliveCsSession() {
    try {
      let response = await fetch('https://cs.sau.ac.kr/m/main.do', {
        method: 'GET',
        headers: {
          Host: 'cs.sau.ac.kr',
          Connection: 'keep-alive',
          'Cache-Control': 'max-age=0',
          'Upgrade-Insecure-Requests': 1,
          'User-Agent': 'Mozilla/5.0',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Referer: 'https://cs.sau.ac.kr/index.do',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8,ko;q=0.7',
          Cookie: this.csSession.csCookie,
        },
        json: true,
      });
      //let responseJson = await response.json();

      let responseText = await response.text();

      console.log('Try this Cookie: ', this.csSession.csCookie);

      if (responseText.indexOf('<title>메인화면</title>') == -1) {
        console.log('로그인 세션 만료');
        return false;
      }

      console.log('로그인 세션 유지되어 있음');
      return true;
    } catch (error) {
      console.log(error);

      return 'done';
    }
  }

  async isClassLive() {}

  // 로그인을 우선으로 진행하고 진행해야 함
}

// 이외의 함수
function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}
