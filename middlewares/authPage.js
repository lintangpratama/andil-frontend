import cookies from "next-cookies";

export function authPage(context) {
    return new Promise((resolve) => {
        const {user_cookie} = cookies(context);
        return resolve({
            token: user_cookie
        })
    })
}