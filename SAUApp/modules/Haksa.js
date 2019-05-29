import React from 'react';
import {AsyncStorage} from 'react-native';

export default class Haksa extends React.Component {
  async setSession() {
    this.csSession.csCookie = await AsyncStorage.getItem('CsCookie');
  }

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
      console.log(await response);

      // 여기까지 tmax 토큰등을 받아오는 작업을 수행함
      /* 해당 리스폰스 값)
      
INFO
18:08
Response {
  "_bodyInit": "

















		<html>
			<head>
				<script type=\"text/javascript\" src=\"/js/jquery-1.7.0.min.js\"></script>
				<script type=\"text/javascript\">
					$(document).ready( function () {
						var tmaxeamfm = $(\"form[name=tmaxeamfm]\");
						if(tmaxeamfm.length > 0 && tmaxeamfm != null && tmaxeamfm != \"\")
						{
							tmaxeamfm.submit();
						}
						else
						{
							alert('token registration failure');
							document.location.href='https://sso.sau.ac.kr/logout.jsp';
						}
					});
				</script>
			</head>
			<body>
<form name='tmaxeamfm' method='post' action='https://ssoserver.sau.ac.kr/__tmax_eam_server__?tmaxsso_action=token_registration'>
<input type=hidden name='tmaxsso_enco' value='utf-8'>
<input type=hidden name='tmaxsso_tokn' value='ffff1c92900f12244a70a02932ec7f478934be10b2dec9c42b335a4a1e3f7a3e573a9ab9ab0d308ccd81ae25b00e3805f8cf104249ec9290cf7c465cb7f479e7a66dc233285d448431abb13162aa318b329b'>
<input type=hidden name='tmaxsso_next' value='687474703a2f2f68616b73612e7361752e61632e6b722f'>
<input type=hidden name='tmaxsso_clienitip' value='223.62.163.5'>
<input type=hidden name='tmaxsso_logout' value='68747470733a2f2f73736f2e7361752e61632e6b722f6c6f676f75742e6a73703b6a73657373696f6e69643d4233424434423432313145424631424335413530303630463038374237413437'>
<input type=hidden name='tmaxsso_serv' value='sso'>
<input type=hidden name='tmaxsso_action' value='token_registration'>
</form>

			</body>
		</html>
",
  "_bodyText": "

















		<html>
			<head>
				<script type=\"text/javascript\" src=\"/js/jquery-1.7.0.min.js\"></script>
				<script type=\"text/javascript\">
					$(document).ready( function () {
						var tmaxeamfm = $(\"form[name=tmaxeamfm]\");
						if(tmaxeamfm.length > 0 && tmaxeamfm != null && tmaxeamfm != \"\")
						{
							tmaxeamfm.submit();
						}
						else
						{
							alert('token registration failure');
							document.location.href='https://sso.sau.ac.kr/logout.jsp';
						}
					});
				</script>
			</head>
			<body>
<form name='tmaxeamfm' method='post' action='https://ssoserver.sau.ac.kr/__tmax_eam_server__?tmaxsso_action=token_registration'>
<input type=hidden name='tmaxsso_enco' value='utf-8'>
<input type=hidden name='tmaxsso_tokn' value='ffff1c92900f12244a70a02932ec7f478934be10b2dec9c42b335a4a1e3f7a3e573a9ab9ab0d308ccd81ae25b00e3805f8cf104249ec9290cf7c465cb7f479e7a66dc233285d448431abb13162aa318b329b'>
<input type=hidden name='tmaxsso_next' value='687474703a2f2f68616b73612e7361752e61632e6b722f'>
<input type=hidden name='tmaxsso_clienitip' value='223.62.163.5'>
<input type=hidden name='tmaxsso_logout' value='68747470733a2f2f73736f2e7361752e61632e6b722f6c6f676f75742e6a73703b6a73657373696f6e69643d4233424434423432313145424631424335413530303630463038374237413437'>
<input type=hidden name='tmaxsso_serv' value='sso'>
<input type=hidden name='tmaxsso_action' value='token_registration'>
</form>

			</body>
		</html>
",
  "headers": Headers {
    "map": Object {
      "connection": "close",
      "content-length": "1441",
      "content-type": "text/html;charset=utf-8",
      "date": "Wed, 29 May 2019 09:08:13 GMT",
      "set-cookie": "JSESSIONID=B3BD4B4211EBF1BC5A50060F087B7A47; Path=/; Secure, ROUTEID=.ssoagent1; path=/",
    },
  },
  "ok": true,
  "status": 200,
  "statusText": undefined,
  "type": "default",
  "url": "https://sso.sau.ac.kr/login.jsp",
}
 */

      //console.log(responseJson);

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
