import cookies from "next-cookies";

export function authPage(context) {
    return new Promise ((resolve) => {
        const {token} = cookies(context);
        const {token_pengurus} = cookies(context);
        return resolve ({
            token,
            token_pengurus
        })
    })
}