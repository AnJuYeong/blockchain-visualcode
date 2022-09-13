// AWS EC2 배포하기 

// 1. EC2 ubuntu로 인스턴스
// AWS 페이지에 로그인하고 서비스 탭 옆에 EC2 검색

// EC2
// 클라우드의 가상 서버 뜹니다.
// 오른쪽 상단에 아이디 옆에 리전은 최대한 가깝게 설정
// 한국이 안될 때 거의 일본 씀
// 인스턴스 클릭해서 인스턴스 창으로 이동
// 인스턴스 시작 버튼 클릭
// 인스턴스 중지가 잠시 꺼두는거 인스턴스 종료가 아예 삭제

// 인스턴스 이름 써주고
// 우분투 클릭

// 키페어 생성해서 잘 보관해야하고
// 이동시에 자장매체에 담아서 옮기는게 보안에 좋다.
// 연결 방법 vs 코드에서 아니면 터미널에서
// ssh -i "mykey.pem" ubuntu@ec2-52-79-231-15.ap-northeast-2.compute.amazonaws.com

// mysql 인스턴스에 설치하자

// mysql 설치 명령어 

// 우분투 서버를 업데이트하고 그리고 mysql-server 설치
// sudo apt-get update
// sudo apt-get install mysql-server

// EC2 우분투 mysql 접속
// sudo mysql -u root -p
// 비밀번호 입력창이 뜨면 그냥 엔터

// 데이터베이스 세팅
// 1. 사용할 데이터베이스 하나 만들어주자
// create database 여기에 이름;

// 한번 확인해보자
// show databases;

// 이 데이터베이스를 사용해야하니깐 유저를 만들어서 사용하자 
// 접속할 때 유저 정보가 있어야 접속이 가능하니깐
// 사용할 유저 생성
// create user '여기에 유저 이름'@'%' identified by '비밀번호';
// (예)create user 'admin'@'%' identified by '1234';

// 만든 유저에게 데이터베이스 권환을 주자
// grant all on 데이터베이스 이름. (이름 뒤에 점 붙이기) * to '유저 이름'@'%';
// (예)grant all on mydb.* to 'admin'@'%';

// 권한이 주어졌는지 확인
// show grant for '여기에 유저 이름';
// (예) show grant for 'admin';

// 외부에서 접속 해보자

// 인스턴스 페이지로 돌아와서
// 하단에 보안 탭을 클릭하고
// 보안 그룹 클릭

// 트래픽에 네트워크 간에 이동 방향을 말하는 것
// 인바운드 규칙 : 네트워크에 들어오는 정보
// 클라이언트에서 서버로 향하는 것

// 아웃바운드 규칙 : 네트워크에서 나가는 정보 
// 클라이언트에서 요청을 하고 서버에서 클라이언트로 다시 보내주는 것

// 보안 규칙 추가에 인바운드, 아웃바운드
// HTTP, HTTPS, MYSQL 모두 추가 해준다.

// 보안그룹 규칙설정을 끝냈으면 우리가 EC2에 설치한 MYSQL 접속 허용 설정을 해주자

// sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf;
// 수정모드는 i를 눌러서 들어갈 수 있다.
// :wq! = 저장후 종료
// :q! = 종료
// :w! = 강제 종료

// 이 파일에서 수정할 부분은 bind-address의 127.0.0.1 이부분을 0.0.0.0 이렇게 모두로 설정해 주면된다.

// mysql 서버 재실행 해주어야한다.
// sudo service mysql restart

// 외부접속 이제 끝.....

// 로컬에 워크벤치 켜고
// connection을 추가하는데
// connection 옵션은 hostname에 인스턴스 퍼블릭 IPv4 DNS 주소를 입력

// port는 3306번을 적는다.
// username은 접속할 유저 이름 우리가 권한 줬던 애
// password는 store in valut 버튼을 눌러서 mysql 비밀번호 입력
// 잘되면 mysql 화면이 보인다 보이는 화면은 우리가 만든 EC2 우분투에 설치한 mysql

// 프로젝트 EC2 우분투에 설치하기
// 본인이 올릴 프로젝트를 깃허브에 올리고
// config.js 잘 확인하고 데이터 베이스 이름과 비밀번호 유저 이름을
// EC2 우분투에 설치한 mysql의 접속 옵션과 동일하게 바꿔준다.
// 인스턴스에 git init하고
// git remote add origin 깃 저장소 주소
// 예) git remote add origin https://github.com/mydreamis-a/teamProject_AJJ.git
// pull 받아서 파일 갱신

// nodejs를 설치합니다.

// sudo apt-get update
// sudo apt-get install -y build-essential
// sudo apt-get install curl
// 원하는 노드 버전을 적어주면 된다.
// curl -sl https://deb.nodesource.com/setup_16.x | sudo -E bash --

// nodejs 설치합니다.
// sudo apt-get install -y nodejs

// node 버전 확인 node -v
// npm 버전 확인 npm -v

// EC2 포트 포워딩
// 뒤에 포트번호 안보이게 접속

// http 80, https 443 포트

// 명령어
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
// dport 80, --to-port 3000 = 80포트로 접속하면 3000포트로 재매핑

// 포트포워딩을 확인하는 명령어
// sudo iptables -t nat -L --line-numbers

// 포트포워딩 삭제 명령어
// sudo iptables -t nat -D PREROUTING 인덱스 번호

/////////////////////////////// 여기서 부터
// pm2 설치 명령어 npm i pm2

// packjson.json에 start 부분을 pm2 start app.js로 변경

// pm2 설치 서버가 종료되어도 노드 서버 실행

// npx pm2 monit : 상태 불러오기. (list, logs, custom metrics, metadata 등이 나옴)

// npx pm2 logs : 모든 로그 불러오기.

// npx pm2 logs --error : 에러 로그 불러오기.

// npx pm2 list : 리스트(npm start 하면 나왔던 표) 불러오기.

// npx pm2 kill : pm2 종료

// npx pm2 start app.js : app.js 실행

// npx pm2 reload all : 서버 재시작
