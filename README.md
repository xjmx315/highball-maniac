# Highball Maniac

> 내가 가진 재료를 기만으로 만들 수 있는 하이볼을 검색할 수 있었으면 좋겠다!

Highball Maniac은 재료, 태그 기반 하이볼 레시피를 제공하는 1인 개발 서비스 입니다.

 라우팅, 전역 사용자 컨텍스트, 커스텀 훅, 모달/검색 UI, API 클라이언트 구성 등 프론트엔드 핵심 요소들을 다루었습니다.

 [BE Github 바로가기](https://github.com/xjmx315/HighballManiac)

## 데모 화면
- **발견(홈)**: 가지고 있는 재료를 검색해서 추가하고, 해당 재료로 만들 수 있는 레시피를 검색할 수 있습니다. (`/`).
- **레시피 목록**: 다양한 기준으로 추천된 레시피를 확인하실 수 있습니다. (`/recipe`).
- **레시피 상세**: 칵테일 레시피를 상세하게 확인하세요! (`/recipe/:recipeId`).
- **태그별 레시피**: 특정 태그가 적용된 레시피 목록을 제공합니다.  (`/tag/:tagId`).
- **레시피 작성**: 사용자가 직접 커스텀 레시피를 등록할 수 있습니다. (`/new_recipe`).
- **사용자 페이지**: 유저 개인 페이지 입니다. (`/user_info`, `/user_info/:userName`).
- **인증 플로우**: 로그인/회원가입 페이지를 제공하며 독창적인 UI를 적용했습니다. (`/login`, `/join`).
- **About**: 프로젝트 소개 페이지 입니다 (`/about`).

## 실행 방법
```bash
# 1) 의존성 설치
npm install

# 2) 개발 서버 실행 (CRA)
npm start

# 3) 프로덕션 빌드
npm run build
```
- 기본 포트: `http://localhost:3000`
- API 서버 기본값: `http://localhost:4000/api` (파일: `src/common/apiClient.js`)

## 주요 포인트
- **글로벌 팝업 시스템**: `PopupProvider` + `createPopup(message)` 이벤트 기반 전역 토스트(자동 2초 후 제거)
- **Context API**: `UserContext`로 로그인 상태/토큰 전역 관리
- **API 클라이언트 래퍼**: `apiClient.get/post`로 공통 헤더/에러 처리, options 인자로 간편 인증 설정
- **Custom Hooks**: `useModal`, `useItems`, `useTags`로 UI/비즈니스 로직 분리 및 재사용성 향상
- **컴포넌트 아키텍처**: `RecipeContainer`, `Card`, `Modal`, `Popup`, `Tags` 등으로 UI를 모듈화
- **함수형 컴포넌트 설계**: 최신 React 런타임으로 함수형 컴포넌트 위주 설계

## 라우팅 구조
`src/App.js`에서 `BrowserRouter`와 `Routes`로 아래 경로를 매핑합니다.

- `/` → `Discover`
- `/recipe` → `Recipes`
- `/recipe/:recipeId` → `Recipe`
- `/tag/:tagId` → `RecipesWithTag`
- `/new_recipe` → `NewRecipe`
- `/user_info` → `UserInfo` (자기 페이지)
- `/user_info/:userName` → `UserInfo` (다른 사용자)
- `/login` → `Login`
- `/join` → `Join`
- `/about` → `About`

## 인증/권한
- `UserContext`가 `user`, `token`, `login`, `logout`, `checkToken`, `isLoggedIn`을 제공합니다.
- 로그인 시 `localStorage`에 `user`, `token`을 보관하고, `apiClient`의 옵션 `"Authorization"` 사용 시 `Bearer` 토큰을 자동 주입합니다.
- `checkToken()`은 `/user/tokenCheck`로 토큰 유효성을 확인합니다(실패 시 자동 로그아웃).
- `newRecipe`와 같이 로그인이 필요한 페이지 접근시 로그인 여부를 확인하고 로그아웃 상태라면 로그인 페이지로 라우팅합니다. 

## API 클라이언트 규약
- 기본 URL: `API_URL = http://localhost:4000/api` (/src/apiClient.js에서 정의됨)
- 응답 포맷(예시):
```json
{
  "ok": false,
  "code": 401,
  "message": "아이디 또는 비밀번호가 올바르지 않습니다.",
  "data": {}
}
```
- 실패 공통 처리: 네트워크/알 수 없는 에러 시 `ok:false, code:0` 형태로 표준화합니다.
- 메서드: `get(path, ...options)`, `post(path, body, ...options)`
  - 옵션에 `"Authorization"` 전달 시 `Authorization: Bearer <token>` 자동 주입
  - `post` 호출 시 `body`는 JSON 문자열을 기대합니다. 예: `JSON.stringify(payload)`
