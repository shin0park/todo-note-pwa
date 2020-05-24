url: https://vue-note-todo.firebaseapp.com

## 주제
### Todo & Note
- 회원가입 & 로그인
- 할일 등록 및 삭제 
- 완료한 일과 진행중인 일로 분류
- 기록장 (Note)
- 홈 화면 다운로드 
- offline 동작
- serverless


## 활용 기술 스택
### web

- vue 
  * vuex (리서치 필요)
  * vuetify 
  * vuelidate (login & register) (리서치 필요)

- pwa : workbox (리서치 필요)


### infra
- firebase

---
### 개발 과정
- vuex로 spa를 구현하는 방법을 공부하여 front를 구현하는데 시간 소요.
- dashboard.vue 는 vuex를 사용하지 않고, todo.vue 는 vuex를 사용하여 개발함으로써 vuex의 필요성에 대해 배움. 
- pwa 기술 이론 공부와 vue-cli를 통한 pwa 적용 방법에 대해 공부하는데 대부분의 시간을 소요

### 데모 사진
![pwa1](https://user-images.githubusercontent.com/38244852/82762719-8df41a00-9e3d-11ea-9db6-8d23623559d8.jpg)
![pwa2](https://user-images.githubusercontent.com/38244852/82762720-8e8cb080-9e3d-11ea-93e1-3db5939ff9dc.jpg)
![pwa3](https://user-images.githubusercontent.com/38244852/82762721-8f254700-9e3d-11ea-98bf-6344a6313785.jpg)


## 앞으로 추가할 기능
- 등록한 일에 대한 알림 (push notification) (리서치 필요)

### 참고자료
- [vuex](https://vuex.vuejs.org/kr/guide/)
- [vuelidate](https://www.npmjs.com/package/vuelidate)
- [vue-cli PWA 플러그인](https://joshua1988.github.io/vue-camp/pwa/cli-pwa-plugin.html#%EB%B7%B0-cli%EC%9D%98-pwa-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8)
- [프로그레시브 웹 앱에서 Firebase 사용](https://firebase.google.com/docs/projects/pwa?hl=ko)
- [강아지 포스트 웹앱 ](https://medium.com/@eder.ramirez87/modern-pwa-with-vue-cli-3-vuetify-firestore-workbox-part-1-974383be5540)
- [workbox](https://developers.google.com/web/tools/workbox)
- [service-workers-lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
