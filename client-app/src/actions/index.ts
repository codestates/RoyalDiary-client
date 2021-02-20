// 액션 타입 정의
export const ISLOGIN = "user/ISLOGIN" as const;
export const ACCESS_TOKEN = "user/ACCESS_TOKEN" as const;

// 액션 생성함수
export const isLogin = (state: boolean) => ({ type: ISLOGIN, payload: state });
export const accessToken = (token: string) => ({ type: ACCESS_TOKEN, payload: token });
