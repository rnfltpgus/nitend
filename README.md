# ⛳️ Nit-End

<br/>

## ⚙️ 기능구현 리스트

### ✅ Level 1

- [x] React Native 기반 앱을 제작
- [x] 앱 하단에 Bottom Tabs Navigator를 추가하고 4개(홈 / 캘린더 / 라이브러리 / 마이페이지)의 탭을 추가, 탭 연결

### ✅ Level 2 (외부 캘린더 라이브러리를 이용 X)

- [x] 기능 1 : 캘린더에 현재 월을 출력하고 오늘 날짜를 아래 이미지와 같이 구현
- [x] 기능 2 : 상단 좌우 화살표 버튼 클릭 시 전월, 익월을 캘린더에 출력
- [x] 기능 3 : 캘린더 상에 특정 날짜를 선택하면 해당 날짜에 원을 표시(마지막으로 선택된 날짜만 표시)

### ⛔️ Level 3

- [ ] react-native-reanimated, react-native-gesture-handler 라이브러리를 이용하여 `주 <-> 월` 캘린더로 변환 가능하도록 구현 - 시도중

<br/>

## 🕹 사용방법

```
  1. git clone https://github.com/rnfltpgus/nitend.git
  2. cd nitend
  3. npm install or npm i
  4. cd ios
  5. pod install
  6. cd ..
  7. npm start
  8. npm run ios
```

<br/>

## 🗺 진행하며 참고한 링크

- [CLI 개발환경 셋팅](https://reactnative.dev/docs/environment-setup)
- [컴포넌트 요소 체크](https://reactnative.dev/docs/components-and-apis)
- [Rn 사용정리 글](https://wit.nts-corp.com/2020/03/23/6014)
- [하단탭 네비게이션 구현](https://reactnavigation.org/docs/bottom-tab-navigator/)
- [MaterialIcons 아이콘 이용](https://oblador.github.io/react-native-vector-icons/)
- [네이티브 캘린더 오픈소스 참고](https://github.com/wix/react-native-calendars)
- [flatList 이용 방법](https://reactnative.dev/docs/flatlist)
- [React Native 라이브러리 이용방법](https://reactnative.dev/blog/2022/06/16/resources-migrating-your-react-native-library-to-the-new-architecture#migration-status-of-popular-libraries)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/touchables/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs)

<br/>

## 🚀 알게된 것과 시도

1. Css Style 요소가 Rn에서는 사용하는 것도 있고 다른 것도 있는 것을 알게 되었습니다.
2. 켈린더 데이터를 뿌려줄 때 Map과 flatList를 이용해 보았는데, flatList의 옵션의 많은 부분을 이용해 보지 못하였지만 옵션으로 다양한 것을 해결할 수 있을 것 같습니다. (RN의 기능을 한번 전반적으로 체크해볼 예정입니다.)
3. Level 3의 기능을 해결하기 위해서 DrawerLayout, new Animated.Value()를 이용하여 이동, Animated.View를 이용해서 해야되나 시도 중에 있습니다.

- 구현한 켈린더 날짜 데이터는 7일을 기준으로 1개의 달에 대해서 배열로 만들어 표현하게 되는데, 이벤트가 발생하여 줄어 들었을 때는 배열 1개를 보여주고 늘어나면 구한 켈린더의 날을 모두 보여주면될 것 이라고 생각하였다.
- 하지만 이용방법에 대해서 너무 늦게 알아채고 구현 레퍼런스 조사 및 적용을 진행하다 보니 제출 시간이 끝이 나게 되었습니다.
