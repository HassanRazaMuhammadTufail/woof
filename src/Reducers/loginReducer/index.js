const INITIAL_STATE = {
  isLoginUser: false,
  isSignUpUser: false
};

const loginUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SIGNUP_USER":
      state = {
        ...state,
        isSignUpUser: action.payload
      };
      break;
  }
  console.log("new-State---->", state);
  return state;
};
export default loginUser;
