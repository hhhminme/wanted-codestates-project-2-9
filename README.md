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
## review-detail Page구현 - [동진](https://github.com/jinn2u)

### 좋아요 구현하기

현재 사용자의 id가 없기 때문에 접속해있는 사람이 좋아요를 눌렀는지 안눌렀는지 확인할 수 없었습니다. 따라서 기본 상태를 안눌렀다고 가정하고 구현하였습니다.

리덕스를 사용하는 이유중 하나는 prop drilling을 방지하기 위함도 있지만 데이터를 오직 dispatch와 reducer를 통해 수행함으로써 데이터가 변화하는 곳을 일관되게 관리하기 위함도 있다고 생각합니다.  

그렇기 때문에 데이터 변화의 부분을 store에서 일관되게 처리하기 위해 노력했습니다.

따라서 likeCnt의 경우 증가해야되는지, 감소해야되는지에 대한 상태만 받은 후 변경하는 곳은 reducer에서 처리했습니다.

```tsx
reducer: (
	state: Review[],
	{ payload: { id, isIncrease } }: PayloadAction<{ id: string; isIncrease: boolean }>,
) => {
	const review = state.find((review) => review.id === id);
	if (!review) return;

	const newLikeCnt = isIncrease ? review.likeCnt + 1 : review.likeCnt - 1;
	review.likeCnt = newLikeCnt;
},
```

### 공유하기 기능 구현

og태그를 사용하게 된다면 링크를 공유했을 때 사용자에게 더 좋은 정보를 보여줄 수 있습니다.

csr은 index.html이 하나입니다. 때문에 동적으로 meta 데이터를 생성할 수 없습니다.

ssr을 하게 된다면 정적인 페이지를 서버 사이드에서 만들어진 상태이기 때문에 쉽게 meta 데이터들을 적용할 수 있습니다.

#### react-helmet 적용하기 

react-helmet을 적용하게 된다면 동적으로 meta데이터를 적용할 수 있습니다.

```tsx
import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    );
  }
};
```

다음과 같은 방식으로 아주 편하게 사용할 수 있습니다.

사실 helmet만을 사용해서 og태그를 설정하여도 원하는 결과는 나오게 됩니다. 

하지만 이왕 Meta data를 적용한 김에 seo까지 신경써보기로 마음 먹게 되었습니다.

#### react-snap 적용하기

여전히 빌드를 하게 되면 html파일이 index.html 하나만 존재하는것을 확인할 수 있습니다. 

즉, helmet으로 meta 데이터를 적용한다고 하더라도 server side에서는 하나의 html만이 존재한다는 뜻입니다.

따라서 js를 읽기 힘들어하는 seo는 metadata를 읽을 수 없습니다.  이러한 것 들을 해결해 주는 것이 react-snap입니다.

react-snap의 문서를 보게 된다면 `Pre-renders a web app into static HTML`라는 말을 볼 수 있습니다.  사용하는 방식은 문서를 보게 된다면 자세히 나와 있습니다.

##### 에러 상황

하지만 여기서 문제가 나타나게 됩니다.

아무리 하여도 하나의 index.html파일만 나타나게 되는것입니다.

저의 폴더 구조는 App.tsx에서 react-router로 라우팅처리를 선언하는 방식으로 사용하였습니다.

구글링을 계속 해보았지만, 다 공식문서에 나와있는 방식대로 설명한 글이었습니다.

따라서 어쩔수 없이 react-snap을 직접 까보게 되었습니다.

react-snap의 코드를 보면 

```tsx
if (!options.publicPath.startsWith("/")) {
    options.publicPath = `/${options.publicPath}`;
  }
  options.publicPath = options.publicPath.replace(/\/$/, "");

  options.include = options.include.map(
    include => options.publicPath + include
  );
  return options;
```

이런 부분을 볼 수 있습니다. 

options의 include 프로퍼티를 돌면서 publicPath와 include url을 더해주는 부분입니다.

옵션은 reactSnap이라는 프로퍼티를 package.json에 정의함으로써 수정할 수 있는데 이는 공식문서에 나와 있습니다. 

따라서 저는 제가 prerender하기 위해 필요한 url을 package.json에 명시해 주었습니다.

```tsx
"reactSnap": {
    "include":["/","/details"]
  }
```

react-snap을 사용하면서 빌드 시 html파일이 여러개 생기지 않으셨던 분들은 

react-snap의 공식문서에 나와있는 대로 설정한 다음 package.json에 별도의 url을 설정하신다면 잘 해결 됩니다.

어떤 경우 이런 문제가 생기는지 더 테스트 해본 결과 app.tsx에서 link태그 또는 데이터가 있는 상태에서 react-router로 outlet 설정을 한 경우, app.tsx에서 있는 링크들은 여러개의 html로 잘 빌드가 됩니다. 

하지만 app.tsx에서 라우팅을 정의한 경우 다음과 같은 에러가 발생하는것 같습니다.

### 추후 구현

시간이 부족하여 구현하지 못한 부분들이 있습니다.

pathname을 통해 Review id를 가져오게 되는데 reviewId에 해당하는 review가 없을 때 안내 페이지 등 예외 처리를 할 예정입니다. (pathname은 string | undefined이지만 현재 타입을 string으로 타입단언해주었습니다.)

테스트 배포 url이 존재하지 않고 main브랜치에서 마지막에 배포를 하다보니 동적으로 meta데이터를 넣어주는 부분을 개발 도중에 테스트를 하지 못했습니다. 확인해보니 현재는 meta데이터를 동적으로 받아오지 못하는 상황입니다. 

공유하기를 통해 prerender된 페이지의 경우 styled-component를 받아오지 못하여 style이 깨지고 있습니다
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
