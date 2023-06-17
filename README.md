# wanted-pre-onboarding-frontend
원티드 프리온보딩 선발과제 프로젝트입니다.

- **`지원자`** : 주양아
- **`배포링크`** : [바로가기👉🏻](https://web-wanted-pre-onboarding-frontend-7xwyjq992llizvha4k.sel4.cloudtype.app)

<br>

## 설치 및 실행
```
$ npm install
$ npm run start
```

<br>

## 데모 영상
<br>

### Home 

| TOKEN❌ | TOKEN⭕️ |
| -- | -- |
| <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/01128ec0-8143-434b-aa77-1fafcae4587a" /> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/8210be6e-f0dc-4b7b-a76b-5928cc5335d5"/> |
| · `시작하기` 클릭 시 /signin 경로 이동 | · `시작하기` 클릭 시 /todo 경로로 이동|

<br>

### Sign up & Sign in

| Sign up 성공 | Sign in 성공 | 유효성 검사 |
| -- | -- | -- |
| <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/f4808efa-4bf2-4d7a-894c-e404b69bab7a"/> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/7877f5b9-2831-4d6c-9695-bca8c1f52d04"/> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/c03f09b5-d67f-4d18-8451-e084122b0e55" /> |
| · /signin 경로로 이동 | · /todo 경로로 이동 <br>  · 응답받은 JWT 로컬 스토리지에 저장| · 이메일 조건: @포함 <br> · 비밀번호 조건 : 8자 이상 <br> · 유효성 검사 통과 시 버튼 활성화 |


<br>

### To do list


| 데모 영상 | 기능 |
| -- | -- |
| <img width=600 src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/9349f1d6-079a-49d1-9e44-8ce90c1ef3c3" /> | · 투두 리스트 목록 조회 <br> · 🍋 아이콘을 통해 `To do` 완료 여부 표시 <br> · `+` 버튼을 클릭하여 새로운 `To do` 추가 <br> · `수정` 버튼을 클릭 시, 수정모드 활성화  <br> · 수정모드에서 `제출`버튼 클릭 시, 수정한 내용 업데이트 <br>  · 수정모드에서 `취소` 버튼 클릭 시, 수정한 내용 초기화 및 수정모드 비활성화 <br> · `삭제` 버튼 클릭 시 해당 아이템 삭제|

<br>

### Nav & Redirect

| 데모 영상 | 기능 |
| -- | -- |
| <img width=600 src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/f543d05d-0a44-4fce-8ace-bfbe9eea9ea2" /> | · `TOKEN⭕️` : /signin, /signup 경로 접속 시 /todo 경로로 리다이렉트 <br> · `TOKEN❌` : /todo 경로로 접속 시 /signin 경로로 리다이렉트 |

