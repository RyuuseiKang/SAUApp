// 이 하단부터는 학사 서버에 관련된 부분

// 학사 로그인 세션관련

// 학사 서버에 로그인
// 성공: 1
// 실패 : 0
// 네트워크 미연결 : -1
function Login(userId, password) {
  const formData = new URLSearchParams();
  formData.append('master_id', userId);
  formData.append('master_passwd', password);
  formData.append('x', '0');
  formData.append('y', '0');

  try {
    let response = fetch('https://sso.sau.ac.kr/login.jsp', {
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
      body: formData.toString(),
      json: true,
    });

    let loginResponse = response.json();

    return true;
  } catch (error) {
    console.log(error);
    return -1;
  }
}

// 이 하단부터는 출석 서버에 관련된 부분

// 출석 로그인 세션 관련

// 출석 서버에 로그인
function csLogin(userNumber, password) {
  const formData = new URLSearchParams();
  formData.append('user_id', userNumber);
  formData.append('user_pw', password);

  try {
    let response = fetch('https://cs.sau.ac.kr/m/loginChk.do', {
      method: 'POST',
      headers: {
        Host: 'cs.sau.ac.kr',
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
      body: formData.toString(),
      json: true,
    });

    let loginResponse = response.json();

    console.log('Cookie: ');
    console.log(loginResponse.headers('Set-Cookie'));
  } catch (error) {
    console.log(error);
  }
}

// 로그인을 우선으로 진행하고 진행해야 함
//const cs
