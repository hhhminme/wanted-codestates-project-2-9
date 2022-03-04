# 원티드 프리온보딩 프론트엔드 코스 - 발란

## 사용 스택

<p>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/react--icons-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/redux tool kit-764ABC?style=for-the-badge&logo=Redux&logoColor=white" />
  <img src="https://img.shields.io/badge/react--redux-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=React-Router&logoColor=white" />
</p>

## 요구 사항 ([참조 링크](https://balaan.co.kr/m2/main/contents.php))
고객이 리뷰를 등록하고 확인할 수 있는 기능을 구현합니다.
  - 리뷰 등록 페이지: 리뷰를 등록하는 페이지
    - [x] 리뷰 제목과 내용, 이미지 선택, 평점(별점 5점 만 점)을 포함해서 리뷰를 등록합니다.
    - [x] 리뷰 등록 페이지는 등록(입력) 기능만 있는 간단한 페이지로 구현합니다.
 
  - 상품 리뷰 리스트 페이지: 고객이 구매한 상품에 대한 전체 리뷰를 확인할 수 있는 페이지
    - [x] 리뷰리스트 무한 스크롤을 구현합니다.
    - [x] 정렬(최신순, 리뷰카운트순, 랜덤 정렬)을 구현합니다.
    - [x] 리뷰 목록 표시 형태 선택(그리드 뷰, 리스트 뷰) 기능을 구현합니다.
 
  - 상품 리뷰 상세 페이지: 특정 리뷰를 클릭하면 볼 수 있는 페이지
    - [x] 해당 리뷰를 클릭 시에 리뷰 상세 이미지와 함께 내용을 보여줍니다.
    - [x] 리뷰에 댓글 기능을 구현합니다.
    - [x] 좋아요 기능을 구현합니다.
    - [x] 해당 페이지의 링크 공유가 가능합니다.

## 기능 구현

### 1팀 : 리뷰 등록 페이지 ([이장민](https://github.com/leo-xee), [허민](https://github.com/hhhminme))

평점(별점)은 라이브러리를 사용하지 않고 직접 구현을 하였습니다. 평점의 index, 별 위에 hover 됐을 때 index, 클릭되어 저장된 평점의 index를 비교하여 반복문을 통해 평점을 구현하였습니다.

리뷰 등록 시 사용자가 올바르지 못한 정보를 입력하거나 누락할 수도 있기 때문에 리뷰 작성 시 필요한 항목에 대해 유효성 검사를 하였습니다. 리뷰 제목과 리뷰 내용은 정규표현식을 활용하였습니다. 이미지와 평점을 포함한 항목을 사용자가 입력하지 않았을 경우 모달을 통해 사용자에게 알려줍니다.

### 2팀 : 리뷰 리스트 페이지 ([박상우](https://github.com/SangWoo9734), [전호용](https://github.com/mooroom))

### 3팀 : 리뷰 상세 페이지 ([강동진](https://github.com/jinn2u), [오카무라카에](https://github.com/kaehehehe))

## 팀원 소개

| 이름         | 깃허브                                           |
| ------------ | --------------------------------------------- |
| 강동진       | [jinn2u](https://github.com/jinn2u)             |
| 박상우       | [SangWoo9734](https://github.com/SangWoo9734)   |
| 신항민       | [ssinking91](https://github.com/ssinking91)     |
| 이장민       | [leo-xee](https://github.com/leo-xee)           |
| 오카무라카에 | [kaehehehe](https://github.com/kaehehehe)         | 
| 허민         | [hhhminme](https://github.com/hhhminme)        |
| 전호용       | [mooroom](https://github.com/mooroom)           |
