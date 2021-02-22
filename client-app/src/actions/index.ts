// 액션 타입 정의
export const ISLOGIN = "ISLOGIN" as const;
export const ACCESS_TOKEN = "ACCESS_TOKEN" as const;

// 액션 생성함수
export const isLogin = (state: boolean): { type: typeof ISLOGIN; payload: boolean } => {
	return { type: ISLOGIN, payload: state };
};
export const accessToken = (token: string): { type: typeof ACCESS_TOKEN; payload: string } => ({
	type: ACCESS_TOKEN,
	payload: token,
});
