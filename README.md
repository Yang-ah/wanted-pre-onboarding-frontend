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

## 사용한 라이브러리

- `React Router` : 각 path에 맞는 페이지 라우팅
- `Axios` : instance 생성&interceptor 사용하여 api 호출 시 공통적으로 필요한 header 넣어서, api 호출 간편화 
- `SCSS` : module.scss 사용을 통해 통일된 className 네이밍 
- `TypeScript` : 타입 지정을 통해 정적 개발 및 자동 완성 기능 사용, 런타임 오류 방지
  
<br>

## 디렉토리 구조&역할

 ```plain
 📂src
	├─ api # axios
	│  ├─ Auth
	│  ├─ ToDoList
	│  └─ apiClient
	├─ assets #svg files
	├─ config
	├─ model #types
	├─ router
	├─ components
	│  └─ Layout # Nav, module.scss
	├─ pages
	│  ├─ Auth # Login, Register, module.scss
	│  ├─ Home # module.scss
	│  └─ ToDoList # module.scss, ToDo
	├─ style # constants, fonts, mixins, global
	└─ index.tsx
```

- `📁api` : axios instance 생성,  API 호출하는 함수들 선언

- `📁assets` : 프로젝트에 필요한 svg file들을 모아놓고 react component로 내보냄

- `📁config` : .env파일로 api 주소를 보관하고 있고, 이를 호출하는 역할.
  <br>(환경 변수 설정의 번거로움을 줄이기 위해 .env 파일은 github에 공개) 

- `📁model` : 프로젝트에 필요한 type 선언 

- `📁router` : 각 path에 맞는 page들 라우팅

- `📂components` :  프로젝트 공통으로 사용되는 컴포넌트 정의 

  - `📁Layout` : 프로젝트 레이아웃 정의 

- `📁pages` : Auth, Home, ToDoList 3페이지 정의


<br>

## 개발 전략

### Flow
style init > route > feature > design > docs 

### Focus
- 폴더 구조화
- 페이지 접근 용이한 nav 구성
  - 평가 시 토큰 유무에 따른 redirect 확인을 위해 logout(storage.clear)기능 추가
- 직관적이지만 지루하지 않고 깔끔한 UI

### Commit Convention
- `Feat`    : 기능 (새로운 기능)
- `Fix`     : 버그 (버그 수정)
- `Design`  : CSS 등 사용자 UI 디자인 변경
- `Style`   : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
- `Refactor`: 리팩토링
- `Comment` : 필요한 주석 추가 및 변경
- `Docs`    : 문서 (문서 추가, 수정, 삭제)
- `Test`    : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
- `Chore`   : 기타 변경사항 (빌드 스크립트, 패키지 매니저 설정 수정 등)
- `Rename`  : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- `Remove`  : 파일을 삭제하는 작업만 수행한 경우
- `!HOTFIX` : 급하게 치명적인 버그를 고쳐야하는 경우
- `!BREAKING CHANGE` : CHANGE 커다란 API 변경의 경우


<br>

## 스타일
- scss를 통해 필요한 스타일들을 분리하여 관리하고, 재사용 가능한 mixins,constants 생성 
- 각 페이지&컴포넌트 별 module scss 사용하여 용도에 맞는 일관된 className 사용

### 스타일 디렉토리 구조&역할 
```plain
📂style
	├─ constants # colors
	├─ fonts/NanumSquareRound #fonts
	├─ mixins
	│  ├─ _flexbox.scss # flex(justifycontent, ....)
	│  ├─ _styles.scss # button, title style
	│  └─ _index.scss # forward sibling styles
	├─ _base.scss # set base css
	├─ _fonts_face.scss
	├─ _reset.scss # reset all css
	└─ global.scss # import (reset, base, fonts_face)
```

- `mixins` : flexbox, 공통 style(button, title)을 index파일에 forward하여 재사용가능한 style 선언

- `constants` : colors 변수 선언 

- `global.scss` : 공통 style만 import

<br>




## 데모 영상

<br>

### Home

| TOKEN❌                        | TOKEN⭕️          |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/01128ec0-8143-434b-aa77-1fafcae4587a" /> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/8210be6e-f0dc-4b7b-a76b-5928cc5335d5"/> |
| · `시작하기` 클릭 시 /signin 경로 이동                                                                                       | · `시작하기` 클릭 시 /todo 경로로 이동                                                                                      |

<br>

### Sign up & Sign in

| Sign up 성공                                                                                                                | Sign in 성공                                                                                                                | 유효성 검사                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/f4808efa-4bf2-4d7a-894c-e404b69bab7a"/> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/7877f5b9-2831-4d6c-9695-bca8c1f52d04"/> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/c03f09b5-d67f-4d18-8451-e084122b0e55" /> |
| · /signin 경로로 이동                                                                                                       | · /todo 경로로 이동 <br> · 응답받은 JWT 로컬 스토리지에 저장                                                                | · 이메일 조건: @포함 <br> · 비밀번호 조건 : 8자 이상 <br> · 유효성 검사 통과 시 버튼 활성화                                  |

<br>

### To do list

| 데모 영상                                                                                                                              | 기능                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/9349f1d6-079a-49d1-9e44-8ce90c1ef3c3" /> | · 투두 리스트 목록 조회 <br> · 🍋 아이콘을 통해 `To do` 완료 여부 표시 <br> · `+` 버튼을 클릭하여 새로운 `To do` 추가 <br> · `수정` 버튼을 클릭 시, 수정모드 활성화 <br> · 수정모드에서 `제출`버튼 클릭 시, 수정한 내용 업데이트 <br> · 수정모드에서 `취소` 버튼 클릭 시, 수정한 내용 초기화 및 수정모드 비활성화 <br> · `삭제` 버튼 클릭 시 해당 아이템 삭제 |

<br>

### Nav & Redirect

| 데모 영상                                                                                                                              | 기능                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/f543d05d-0a44-4fce-8ace-bfbe9eea9ea2" /> | · `TOKEN⭕️` : /signin, /signup 경로 접속 시 /todo 경로로 리다이렉트 <br> · `TOKEN❌` : /todo 경로로 접속 시 /signin 경로로 리다이렉트 |
