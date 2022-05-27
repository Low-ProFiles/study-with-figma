# 전체 개요

> 리액트로 구현하였으며 styled-component를 사용하였다. 재사용에 대해 고민한 코드이다. input은 재사용에 실패하여 따로 폴더를 두어 각 모달에 맞는 파일을 제작하였다.

모달은 다음과 같이 구현할 수 있다.

```jsx

// App.js
const [modalOpen, setModalOpen] = useState(false); // 초기상태와 
                                                   // setter 함수 설정

const modalClose = () => {
  setModalOpen(!modalOpen); // 모달의 현재 상태와 반대되는 상태 부여
};

return(
    <div>
      <button onClick={modalClose}>예제</button>
      {modalOpen && <모달컴포넌트 modalClose={modalClose}></모달컴포넌트>}
    </div>
    // &&은 조건부 렌더링이다. 초기 상태가 false였는데 onClicke을 함으로써 true 가 되었고 && 앞에가 true일 경우 && 뒤에 식이 실행된다
)

//모달컴포넌트.js
const 모달컴포넌트 = ({modalClose}) => { //App.js에서 modalClose 함수를 가져온다.
    const onModalClose = (e) => {
        if(e.target === e.currentTarget){
            modalClose(); // modalClose 함수 실행
        }
        // e.target => 실제 이벤트가 발생한 요소 (배경)
        // e.currentTarget => 이벤트 리스너가 달린 요소 (배경)
    }
    return(
        <컴포넌트이름 onClick={onModalClose}>
        ...
        </컴포넌트이름>
    )
}
```

# 폴더 구조

```

├── src # has all the integrations, features
│ ├── components
│     ├── parts
│         ├── input
│             ├── SigninInput.js # Signin에 들어갈 파일. 이메일, 패스워드, 로그인 버튼을 포함
|             ├── SigninInput.js # Signup에 들어갈 파일. 이메일, 패스워드, 로그인 버튼을 포함
│         ├── Info.js # 로그인 버튼 밑의 안내 메시지를 포함
│         ├── Logo.js # 상단의 로고와 텍스트를 포함
|         ├── Row.js # 중단의 세로선을 포함
│         ├── Sns.js # 하단의 SNS 로고들을 포함
│     ├── SignIn.js # 로그인 모달
|     ├── SignUp.js # 회원가입 모달
│ ├── images
|     ├── logo
|         ├── watchapedia.png # 로고는 이미지로 처리
|     ├── row
|         ├── row.png # 세로선은 이미지로 처리
|     ├── sns
|         ├── google.png # 로고는 이미지로 처리
|         ├── kakao.png # 로고는 이미지로 처리
|         ├── line.png # 로고는 이미지로 처리
|         ├── twitter.png # 로고는 이미지로 처리
├── App.js # 모달 설정
├── index.js
```

## 기본페이지

![](https://velog.velcdn.com/images/abroak07/post/d063892b-af50-48d0-9bf6-2fc32a2ff483/image.png)

1. 로그인 버튼 클릭 시 로그인 모달 생성
2. 회원가입 클릭 시 회원가입 모달 생성

## SignIn.js

![](https://velog.velcdn.com/images/abroak07/post/f2551a92-f8ff-484f-8e40-8d4e3eda90f0/image.png)

1. Email 유효성 검사 (에러메시지)
2. password 타입
3. 로그인 버튼 호버 ( 클릭 시 콘솔 로그 달아 둠 )
4. 회원가입 클릭 시 회원가입 모달로 이동
5. SNS 로고들 호버 시에 투명도 부여 ( 클릭 시 콘솔 로그 달아 둠 )

## SignUp.js

![](https://velog.velcdn.com/images/abroak07/post/7108282c-26de-456a-ab28-d0724d65854e/image.png)

1. 이름, 이메일유효성 검사 (에러메시지)
2. password 타입
3. 로그인 버튼 호버 ( 클릭 시 콘솔 로그 달아 둠 )
4. 로그인 클릭 시 로그인 모달로 이동
5. SNS 로고들 호버 시에 투명도 부여 ( 클릭 시 콘솔 로그 달아 둠 )
