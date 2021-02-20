import { isLogin, accessToken, ISLOGIN, ACCESS_TOKEN } from "../actions/index";
import { initialState } from "./initialState";

type ActionType = ReturnType<typeof isLogin> | ReturnType<typeof accessToken>;

const userReducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case ISLOGIN:
			return { isLogin: action.payload };
		case ACCESS_TOKEN:
			return { accessToken: action.payload };

		default:
			return state;
	}
};

export default userReducer;
