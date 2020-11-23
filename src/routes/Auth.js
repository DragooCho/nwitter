import { authService } from "fbase";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const onChange = (event) => {
        const {target: {name, value}} = event; //=== const {name, value} = event.target
        if(name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async(event) => {
      event.preventDefault();
      try {
        let data;
        if (newAccount) {
          data = await authService.createUserWithEmailAndPassword(
            email, 
            password
          );
        } else {
          data = await authService.signInWithEmailAndPassword(
            email, 
            password
          );
        };
        console.log(data);
      } catch(error) {
        console.log(error);
      };
    };

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} />
          <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
          <input type="submit" value={ newAccount ? "Create Account" : "Log In"} />
        </form>
        <div>
          <button>Continue with Google</button>
          <button>Continue with GitHub</button>
        </div>
      </div>
    );
};
export default Auth;

// required 속성은 불리언(boolean) 속성입니다. 
// 불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 
// false 값을 가지게 되며, 명시하면 자동으로 true 값을 가지게 됩니다.

// event.preventDefault()  
// 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다. 


