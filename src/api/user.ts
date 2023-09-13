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
export function getMyFridenTeam(userid: any) {
    return service({
        url: "v3/FridenTeam/getMyFridenTeam",
        method: "get",
        params: {
            userid:userid
        }
    });
}
export function getMyQj(username: any) {
    return service({
        url: "v3/My/getMyQj",
        method: "get",
        params: {
            username:username
        }
    });
}
