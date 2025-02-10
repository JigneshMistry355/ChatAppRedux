// actions.tsx

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface User {
    username : string;
    email: string;
}

interface LoginAction {
    type: typeof LOGIN;
    payload: User;
}

interface LogoutAction {
    type: typeof LOGOUT;
}



export type AuthActionTypes = LoginAction | LogoutAction;

export const login = (user:User):AuthActionTypes => ({
    type: LOGIN,
    payload: user,
});

export const logout = ():AuthActionTypes => ({
    type: LOGOUT,
});



