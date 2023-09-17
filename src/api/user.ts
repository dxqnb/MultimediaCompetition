import service from "@/utils/request";

export function login(user: any) {
    return service({
        url: "v3/User/doLogin",
        method: "post",
        params: {
            userName: user.userName,
            password: user.password
        }
    });
}

export function getKcRecords(userid: any) {
    return service({
        url: "v3/StudyRecords/getKcRecords",
        method: "get",
        params: {
            userid: userid
        }
    });
}

export function getZyRecords(userid: any) {
    return service({
        url: "v3/StudyRecords/getZyRecords",
        method: "get",
        params: {
            userid: userid
        }
    });
}

export function getMyFridenTeam(userid: any) {
    return service({
        url: "v3/FridenTeam/getMyFridenTeam",
        method: "get",
        params: {
            userid: userid
        }
    });
}

export function getMyQj(username: any) {
    return service({
        url: "v3/My/getMyQj",
        method: "get",
        params: {
            username: username
        }
    });
}

export function getMyDor(username: any) {
    return service({
        url: "v3/My/getMyDor",
        method: "get",
        params: {
            username: username
        }
    });
}

//不安全！！！！！
export function getUserDetail(userid: any) {
    return service({
        url: "v3/User/getUserDetail",
        method: "get",
        params: {
            userid: userid
        }
    });
}

//不安全


export function getMyRadar(username: any) {
    return service({
        url: "v3/My/getMyRadar",
        method: "get",
        params: {
            username: username
        }
    });
}

export function getMyWin(username: any) {
    return service({
        url: "v3/My/getMyWin",
        method: "get",
        params: {
            username: username
        }
    });
}

export function getMyCf(username: any) {
    return service({
        url: "v3/My/getMyCf",
        method: "get",
        params: {
            username: username
        }
    });
}

export function getMyKq(username: any, week: any) {
    return service({
        url: "v3/My/getMyKq",
        method: "get",
        params: {
            username: username,
            week: week
        }
    });
}

export function getMyGrades(username: any, year: any) {
    return service({
        url: "v3/My/getMyGrades",
        method: "get",
        params: {
            username: username,
            year: year
        }
    })
}

export function cjzj(username: any, year: any) {
    return service({
        url: "v3/WenXin/cjzj",
        method: "post",
        params: {
            username: username,
            year: year
        }
    });
}

export function firstUpPwd(username: any, password: any, rpassword: any) {
    return service({
        url: "v3/User/firstUpPwd",
        method: "post",
        params: {
            userName: username,
            password: password,
            rpassword: rpassword
        }
    });
}

export function upAvatar(data: any) {
    return service({
        url: "v3/User/upAvatar",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}
