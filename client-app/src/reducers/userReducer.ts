import { isLogin, accessToken, ISLOGIN, ACCESS_TOKEN } from "../actions/index";
import { initialState } from "./initialState";

type ActionA = ReturnType<typeof isLogin>;
// { type: typeof ISLOGIN; payload: boolean }
type ActionB = ReturnType<typeof accessToken>;
// { type: typeof ACCESS_TOKEN; payload: string }
type Action = ActionA | ActionB;

type Return = {
	isLogin: boolean;
	accessToken: string;
};

const userReducer = (state = initialState, action: Action): Return => {
	switch (action.type) {
		// action.type => typeof ISLOGIN("ISLOGIN") | typeof ACCESS_TOKEN("ACCESS_TOKEN")
		case ISLOGIN:
			// action.type => const ISLOGIN=> "ISLOGIN"
			return { isLogin: action.payload, accessToken: state.accessToken };
		case ACCESS_TOKEN:
			// action.type => const ACCESS_TOKEN=> "ACCESS_TOKEN"
			return { isLogin: state.isLogin, accessToken: action.payload };
		default:
			return state;
	}
};
export default userReducer;
