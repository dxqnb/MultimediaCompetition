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
export function getKcRecords(userid: any) {
    return service({
        url: "v3/StudyRecords/getKcRecords",
        method: "get",
        params: {
            userid:userid
        }
    });
}
export function getZyRecords(userid: any) {
    return service({
        url: "v3/StudyRecords/getZyRecords",
        method: "get",
        params: {
            userid:userid
        }
    });
}
