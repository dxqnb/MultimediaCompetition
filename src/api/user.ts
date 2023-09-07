import service from "@/utils/request";

export function login(user: any) {
    return service({
        url: "v3/User/doLogin",
        method: "post",
        params: {
            userName:user.userName,
            password:user.password
        }
    });
}
