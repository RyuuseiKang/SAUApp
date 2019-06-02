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

  Login(userId, passwd) {
    try {
      this.LoginJsp(userId, passwd);
    } catch (error) {
      //console.log(error);
    }
  }

  cookie = new Cookie();
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
        },
      }
    );

    cookie.SetCookie(
      'JSESSIONID',
      await response.headers
        .get('set-cookie')
        .split('JSESSIONID=')[1]
        .split(';')[0]
    );
    cookie.SetCookie('ROUTEID', '.ssoagent1');

    let body = await response.text().then(responseText => {
      return responseText.split('<form name')[1].split('</form>')[0];
    });

    //loginJspResponseParser.SetMethod(body.split("method='")[1].split("'")[0]);
    //loginJspResponseParser.SetLink(body.split("action='")[1].split("'")[0]);

    var paramsCount = (body.length - replaceAll(body, 'input', '').length) / 5;

    for (var i = 0; i < paramsCount; i++) {
      this.loginJspResponseParser.SetParameter(
        body.split("name='")[i + 1].split("'")[0],
        body.split("value='")[i + 1].split("'")[0]
      );
    }

    this.LoginRegistrationToken();
  }
  loginJspResponseParser = new ResponseParser();

  async LoginRegistrationToken() {
    let JspCookie = this.cookie.GetCookie();
    let JspValue = this.loginJspResponseParser.GetValue();

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
          Cookie: JspCookie,
        },
      }
    );

    cookie.SetCookie(
      'tmaxsso_sessionindex',
      await response.headers
        .get('set-cookie')
        .split('tmaxsso_sessionindex=')[1]
        .split(';')[0]
    );

    let body = await response.text().then(responseText => {
      return responseText.split('<form name')[1].split('</form>')[0];
    });

    //loginRegistrationTokenResponseParser.SetMethod(body.split("method='")[1].split("'")[0]);
    //loginRegistrationTokenResponseParser.SetLink(body.split("action='")[1].split("'")[0]);

    var paramsCount = (body.length - replaceAll(body, 'input', '').length) / 5;

    for (var i = 0; i < paramsCount; i++) {
      this.loginRegistrationTokenResponseParser.SetParameter(
        body.split("name='")[i + 1].split("'")[0],
        body.split("value='")[i + 1].split("'")[0]
      );
    }

    console.log(
      'Cookie: ',
      this.loginRegistrationTokenResponseParser.GetCookie()
    );
    console.log(
      'Value: ',
      this.loginRegistrationTokenResponseParser.GetValue()
    );

    this.LoginRegistrationToken();
  }
  loginRegistrationTokenResponseParser = new ResponseParser();

  async LoginRegistrationSession(){
    let JspCookie = this.cookie.GetCookie();
    let JspValue = this.loginJspResponseParser.GetValue();

    let response = await fetch(
      'http://haksa.sau.ac.kr/?' + JspValue,
      {
        method: 'POST',
        headers: {
          Host: 'haksa.sau.ac.kr',
          Connection: 'keep-alive',
          Accept: '*/*',
          Origin: 'null',
          Cookie: JspCookie,
        },
      }
    );

    cookie.SetCookie(
      'tmaxsso_sessionindex',
      await response.headers
        .get('set-cookie')
        .split('tmaxsso_sessionindex=')[1]
        .split(';')[0]
    );

    let body = await response.text().then(responseText => {
      return responseText.split('<form name')[1].split('</form>')[0];
    });

    //loginRegistrationTokenResponseParser.SetMethod(body.split("method='")[1].split("'")[0]);
    //loginRegistrationTokenResponseParser.SetLink(body.split("action='")[1].split("'")[0]);

    var paramsCount = (body.length - replaceAll(body, 'input', '').length) / 5;

    for (var i = 0; i < paramsCount; i++) {
      this.loginRegistrationTokenResponseParser.SetParameter(
        body.split("name='")[i + 1].split("'")[0],
        body.split("value='")[i + 1].split("'")[0]
      );
    }

    console.log(
      'Cookie: ',
      this.loginRegistrationTokenResponseParser.GetCookie()
    );
    console.log(
      'Value: ',
      this.loginRegistrationTokenResponseParser.GetValue()
    );

    this.LoginRegistrationToken();
  }
  loginRegistrationSessionParser = new ResponseParser();

  // 학사 서버에 로그인(Legacy)
  async Legacy_Login(userId, password) {
    // Legacy
    /*
    try {
      let loginResponse = await fetch('https://sso.sau.ac.kr/login.jsp', {
        method: 'POST',
        headers: {
          Host: 'sso.sau.ac.kr',
          Connection: 'keep-alive',
          Origin: 'https://sso.sau.ac.kr',
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
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
      var JSession = await loginResponse.headers
        .get('set-cookie')
        .split('JSESSIONID=')[1]
        .split(';')[0];

      var tmaxeamfmRegistry = await loginResponse.text().then(responseText => {
        return responseText.split('<form ')[1].split('</form>')[0];
      });

      // 여기까지 tmaxeamfmRegistry 등록부 수신 처리

      let tokenRegistrationBody =
        'tmaxsso_enco=utf-8&tmaxsso_tokn=' +
        tmaxeamfmRegistry.split("tmaxsso_tokn' value='")[1].split("'")[0] +
        '&tmaxsso_next=' +
        tmaxeamfmRegistry.split("tmaxsso_next' value='")[1].split("'")[0] +
        '&tmaxsso_clienitip=' +
        tmaxeamfmRegistry.split("tmaxsso_clienitip' value='")[1].split("'")[0] +
        '&tmaxsso_logout=' +
        tmaxeamfmRegistry.split("tmaxsso_logout' value='")[1].split("'")[0] +
        '&tmaxsso_serv=' +
        tmaxeamfmRegistry.split("tmaxsso_serv' value='")[1].split("'")[0] +
        '&tmaxsso_action=token_registration';

      let tokenRegistrationResponse = await fetch(
        'https://ssoserver.sau.ac.kr/__tmax_eam_server__?tmaxsso_action=token_registration',
        {
          method: 'POST',
          headers: {
            Host: 'ssoserver.sau.ac.kr',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            Connection: 'keep-alive',
            Origin: 'https://sso.sau.ac.kr',
            'Content-Type': 'application/x-www-form-urlencoded',
            Referer: 'https://sso.sau.ac.kr/login.jsp',
            Cookie: 'ROUTEID=.ssoserver1;' + 'JSESSIONID=' + JSession,
          },
          body: tokenRegistrationBody,
        }
      );

      var tmaxsso_sessionindex = await tokenRegistrationResponse.headers
        .get('set-cookie')
        .split('tmaxsso_sessionindex=')[1]
        .split(';')[0];

      var tmaxeamfmHaksa = await tokenRegistrationResponse
        .text()
        .then(responseText => {
          return responseText.split('<form ')[1].split('</form>')[0];
        });

      // 여기까지 tmaxeamfmHaksa 등록부 송신 처리 및 토큰 분할 값 수신

      let haksaRegistSessionIdBody =
        'PARAM_OPERATION_TYPE=' +
        tmaxeamfmHaksa.split("PARAM_OPERATION_TYPE' value='")[1].split("'")[0] +
        '&tmaxsso_sessionindex=' +
        tmaxeamfmHaksa.split("tmaxsso_sessionindex' value='")[1].split("'")[0] +
        '&tmaxsso_clienitip=' +
        tmaxeamfmHaksa.split("tmaxsso_clienitip' value='")[1].split("'")[0] +
        '&tmaxsso_sessionid=' +
        tmaxeamfmHaksa.split("tmaxsso_sessionid' value='")[1].split("'")[0];

      let haksaRegistSessionResponse = await fetch('http://haksa.sau.ac.kr/', {
        method: 'POST',
        headers: {
          Host: 'haksa.sau.ac.kr',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
          Connection: 'keep-alive',
          'Cache-Control': 'max-age=0',
          'Upgrade-Insecure-Requests': 1,
          Origin: null,
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie: 'tmaxsso_sessionindex=' + tmaxsso_sessionindex,
        },
        body: haksaRegistSessionIdBody,
      });
      JSession = await haksaRegistSessionResponse.headers
        .get('set-cookie')
        .split('JSESSIONID=')[1]
        .split(';')[0];

      var tmaxeamfmDistribution = await haksaRegistSessionResponse
        .text()
        .then(responseText => {
          return responseText.split('<form ')[1].split('</form>')[0];
        });

      let tokenDistributionBody =
        'tmaxsso_action=' +
        tmaxeamfmDistribution
          .split("tmaxsso_action' value='")[1]
          .split("'")[0] +
        '&tmaxsso_rtrn=' +
        tmaxeamfmDistribution.split("tmaxsso_rtrn' value='")[1].split("'")[0] +
        '&tmaxsso_serv=' +
        tmaxeamfmDistribution.split("tmaxsso_serv' value='")[1].split("'")[0] +
        '&tmaxsso_sessionindex=' +
        tmaxeamfmDistribution
          .split("tmaxsso_sessionindex' value='")[1]
          .split("'")[0] +
        '&tmaxsso_checksingle=' +
        tmaxeamfmDistribution
          .split("tmaxsso_checksingle' value='")[1]
          .split("'")[0] +
        '&tmaxsso_ttype=' +
        tmaxeamfmDistribution.split("tmaxsso_ttype' value='")[1].split("'")[0] +
        '&tmaxsso_logout=' +
        tmaxeamfmDistribution
          .split("tmaxsso_logout' value='")[1]
          .split("'")[0] +
        '&tmaxsso_method=' +
        tmaxeamfmDistribution
          .split("tmaxsso_method' value='")[1]
          .split("'")[0] +
        '&tmaxsso_next=' +
        tmaxeamfmDistribution.split("tmaxsso_next' value='")[1].split("'")[0];

      let tokenDistributionResponse = await fetch(
        'http://ssoserver.sau.ac.kr/__tmax_eam_server__?tmaxsso_action=token_distribution',
        {
          method: 'POST',
          headers: {
            Host: 'ssoserver.sau.ac.kr',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            Connection: 'keep-alive',
            'Cache-Control': 'max-age=0',
            Origin: 'http://haksa.sau.ac.kr',
            'Upgrade-Insecure-Requests': 1,
            'Content-Type': 'application/x-www-form-urlencoded',
            Referer: 'http://haksa.sau.ac.kr/',
            Cookie:
              'ROUTEID=.ssoserver1; ' +
              'JSESSIONID=' +
              JSession +
              '; tmaxsso_sessionindex=' +
              tmaxsso_sessionindex,
          },
          body: tokenDistributionBody,
        }
      );
      JSession = await tokenDistributionResponse.headers
        .get('set-cookie')
        .split('JSESSIONID=')[1]
        .split(';')[0];

      var tmaxeamfmLoginCm = await tokenDistributionResponse
        .text()
        .then(responseText => {
          return responseText.split('<form ')[1].split('</form>')[0];
        });

      // 여기까지 tmaxeamfmHaksa 분할부 송신 처리 및 토큰 분할 값 수신
      // 여기서부터 토큰 주고받고 검증

      tmaxsso_sessionindex = tmaxeamfmLoginCm
        .split("tmaxsso_sessionindex' value='")[1]
        .split("'")[0];

      let loginCmBody =
        'tmaxsso_action=' +
        tmaxeamfmLoginCm.split("tmaxsso_action' value='")[1].split("'")[0] +
        '&tmaxsso_tokn=' +
        tmaxeamfmLoginCm.split("tmaxsso_tokn' value='")[1].split("'")[0] +
        '&tmaxsso_sessionid=' +
        tmaxeamfmLoginCm.split("tmaxsso_sessionid' value='")[1].split("'")[0] +
        '&tmaxsso_rtrn=' +
        tmaxeamfmLoginCm.split("tmaxsso_rtrn' value='")[1].split("'")[0] +
        '&tmaxsso_serv=' +
        tmaxeamfmLoginCm.split("tmaxsso_serv' value='")[1].split("'")[0] +
        '&tmaxsso_sessionindex=' +
        tmaxsso_sessionindex +
        '&tmaxsso_ttype=' +
        tmaxeamfmLoginCm.split("tmaxsso_ttype' value='")[1].split("'")[0] +
        '&tmaxsso_checksingle=' +
        tmaxeamfmLoginCm
          .split("tmaxsso_checksingle' value='")[1]
          .split("'")[0] +
        '&PARAM_OPERATION_TYPE=' +
        tmaxeamfmLoginCm
          .split("PARAM_OPERATION_TYPE' value='")[1]
          .split("'")[0] +
        '&tmaxsso_logout=' +
        tmaxeamfmLoginCm.split("tmaxsso_logout' value='")[1].split("'")[0];
      '&tmaxsso_method=' +
        tmaxeamfmLoginCm.split("tmaxsso_method' value='")[1].split("'")[0];
      '&tmaxsso_next=' +
        tmaxeamfmLoginCm.split("tmaxsso_next' value='")[1].split("'")[0];

      let loginCmResponse = await fetch(
        'http://haksa.sau.ac.kr/jsp/Tlogin/login_cm.jsp',
        {
          method: 'POST',
          headers: {
            Host: 'haksa.sau.ac.kr',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            Connection: 'keep-alive',
            'Cache-Control': 'max-age=0',
            Origin: null,
            'Upgrade-Insecure-Requests': 1,
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie:
              'ROUTEID=.hak1; ' +
              'JSESSIONID=' +
              JSession +
              '; tmaxsso_sessionindex=' +
              tmaxsso_sessionindex,
          },
          body: loginCmBody,
        }
      );

      // 여기서 잠깐 테스트
      JSession = await loginCmResponse.headers
        .get('set-cookie')
        .split('JSESSIONID=')[1]
        .split(';')[0];

      let testResponse = await fetch('http://haksa.sau.ac.kr/blank.jsp', {
        method: 'GET',
        headers: {
          Host: 'haksa.sau.ac.kr',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
          Connection: 'keep-alive',
          'Cache-Control': 'max-age=0',
          'Upgrade-Insecure-Requests': 1,
          'Content-Type': 'application/x-www-form-urlencoded',
          Referer: 'http://haksa.sau.ac.kr/',
          Cookie: 'ROUTEID=.hak1; ' + 'JSESSIONID=' + JSession,
        },
      });

      // 여기까지 마지막으로 토큰 분할 정보 송신
      // 아래로는 정상 접속 테스트

      var roundingToken = loginCmResponse;

      var routedId = '.ssoserver1';

      var isLogin = false;
      for (var m = 0; m < 3; m++) {
        //console.log(await roundingToken);
        try {
          var roundingTokenData = await roundingToken
            .text()
            .then(responseText => {
              return responseText.split('<form name')[1].split('</form>')[0];
            });

          JSession = await roundingToken.headers
            .get('set-cookie')
            .split('JSESSIONID=')[1]
            .split(';')[0];

          routedId = await roundingToken.headers
            .get('set-cookie')
            .split('ROUTEID=')[1]
            .split(';')[0];

          if (routedId == '.hak1') {
            isLogin = true;
            break;
          }
        } catch (error) {}

        var action = roundingTokenData.split("action='")[1].split("'")[0];
        var method = roundingTokenData.split("method='")[1].split("'")[0];

        var parsedBody = '';

        var paramsCount =
          (roundingTokenData.length -
            replaceAll(roundingTokenData, 'input', '').length) /
          5;

        for (var i = 1; i <= paramsCount; i++) {
          parsedBody =
            parsedBody +
            roundingTokenData.split("name='")[i].split("'")[0] +
            '=';
          parsedBody =
            parsedBody +
            roundingTokenData
              .split("value='")
              [i].split("'")[0]
              .replace('=', '%3D');
          if (i != paramsCount) parsedBody = parsedBody + '&';
        }

        console.log('Try this ' + method + ', To: ' + action);
        console.log(parsedBody);
        console.log(
          'Cookie: ',
          'ROUTEID=' +
            routedId +
            '; ' +
            'JSESSIONID=' +
            JSession +
            '; tmaxsso_sessionindex=' +
            tmaxsso_sessionindex
        );

        var roundingToken = await fetch(action, {
          method: method,
          headers: {
            Host: action.split('://')[1].split('/')[0],
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            Connection: 'keep-alive',
            'Cache-Control': 'max-age=0',
            Origin: 'http://haksa.sau.ac.kr',
            'Upgrade-Insecure-Requests': 1,
            'Content-Type': 'application/x-www-form-urlencoded',
            Referer: 'http://haksa.sau.ac.kr/',
            Cookie:
              'ROUTEID=' +
              routedId +
              '; ' +
              'JSESSIONID=' +
              JSession +
              '; tmaxsso_sessionindex=' +
              tmaxsso_sessionindex,
          },
          body: parsedBody,
        });
      }

      let loginHaksaResponse = await fetch('http://haksa.sau.ac.kr/', {
        method: 'GET',
        headers: {
          Host: 'haksa.sau.ac.kr',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
          Connection: 'keep-alive',
          'Cache-Control': 'max-age=0',
          'Upgrade-Insecure-Requests': 1,
          Referer:
            'http://ssoserver.sau.ac.kr/__tmax_eam_server__?tmaxsso_action=token_distribution',
          Cookie:
            'ROUTEID=.hak1; ' +
            'JSESSIONID=' +
            JSession +
            '; tmaxsso_sessionindex=' +
            tmaxsso_sessionindex,
        },
      });
      console.log(loginHaksaResponse);

      // 나중에 쿠키를 통한 자동로그인을 구현
      this.sauSession.Cookie = 'JSESSIONID=' + JSession;

      return true;
    } catch (error) {
      console.log(error);
      return -1;
    }
    */
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
