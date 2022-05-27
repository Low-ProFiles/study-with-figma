import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [SigninOpen, setSigninOpen] = useState(false);
  const [SignupOpen, setSignupOpen] = useState(false);

  const SigninClose = () => {
    setSigninOpen(!SigninOpen);
  };

  const SignupClose = () => {
    setSignupOpen(!SignupOpen);
  };

  return (
    <div>
      <button onClick={SigninClose}>로그인</button>
      {SigninOpen && <SignIn SigninClose={SigninClose}></SignIn>}
      <button onClick={SignupClose}>회원가입</button>
      {SignupOpen && <SignUp SignupClose={SignupClose}></SignUp>}
    </div>
  );
}

export default App;
