import cookies from "next-cookies";

export function authPage(context) {
    return new Promise((resolve) => {
        const {token} = cookies(context);
        return resolve({
            token: token
        })
    })
}