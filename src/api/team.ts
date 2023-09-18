import service from "@/utils/request";
import {a} from "vitest/dist/types-63abf2e0";

export function getFridenTeam(id: any) {
    return service({
        url: "v3/FridenTeam/getFridenTeamList",
        method: "get",
        params: {
            id: id.id
        }

    });
}

export function getChatGroupMessage(groupid: any) {
    return service({
        url: "v3/ChatGroup/getChatGroupMessage",
        method: "get",
        params: {
            groupid: groupid
        }
    });
}

export function getNotice() {
    return service({
        url: "v3/Tool/getNotice",
        method: "get",
    });
}

export function getFridenTeamUserList(tid: any) {
    return service({
        url: "v3/FridenTeam/getFridenTeamUserList",
        method: "get",
        params: {
            tid: tid,
        }
    });
}

export function getFridenTeamTaskList(tid: any) {
    return service({
        url: "v3/FridenTeamTask/getFridenTeamTaskList",
        method: "get",
        params: {
            tid: tid,
        }
    });
}

export function getFridenTeamTaskfinshYes(tid: any) {
    return service({
        url: "v3/FridenTeamTask/getFridenTeamTaskfinshYes",
        method: "get",
        params: {
            tid: tid,
        }
    });
}

export function getFridenTeamTaskfinshNo(tid: any) {
    return service({
        url: "v3/FridenTeamTask/getFridenTeamTaskfinshNo",
        method: "get",
        params: {
            tid: tid,
        }
    });
}

export function upTaskOpen(id: any, tid: any) {
    return service({
        url: "v3/FridenTeamTask/upTaskOpen",
        method: "post",
        params: {
            id: id,
            tid: tid,
        }
    });
}

export function delFridenTeamTaskById(id: any) {
    return service({
        url: "v3/FridenTeamTask/delFridenTeamTaskById",
        method: "delete",
        params: {
            id: id,
        }
    });
}

export function addFridenTeamTask(data: any) {
    return service({
        url: "v3/FridenTeamTask/addFridenTeamTask",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function upTaskFinsh(data: any) {
    return service({
        url: "v3/FridenTeamTask/upTaskFinsh",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function addFridenTeam(data: any) {
    return service({
        url: "v3/FridenTeam/addFridenTeam",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}
export function addFridenTeamBgimg(data: any) {
    return service({
        url: "v3/FridenTeam/addFridenTeamBgimg",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function delFridenTeam(id: any) {
    return service({
        url: "v3/FridenTeam/delFridenTeam",
        method: "delete",
        params: {
            id: id
        }
    });
}

export function getTaskDetail(id: any) {
    return service({
        url: "v3/FridenTeamTask/getTaskDetail",
        method: "get",
        params: {
            id: id
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

export function getFridenTeamMessageList(tid: any) {
    return service({
        url: "v3/FridenTeam/getFridenTeamMessageList",
        method: "get",
        params: {
            tid: tid
        }
    });
}

export function getFridenList(listclass: any) {
    return service({
        url: "v3/FridenList/getFridenList",
        method: "get",
        params: {
            listclass: listclass
        }
    });
}

export function getAllFridenTeam() {
    return service({
        url: "v3/FridenTeam/getAllFridenTeam",
        method: "get",
    });
}

export function addTeamMessage(tid: any, userid: any, content: any) {
    return service({
        url: "v3/FridenTeam/addTeamMessage",
        method: "post",
        params: {
            tid: tid,
            userid: userid,
            content: content
        }
    });
}

export function addFridenTeamUser(tid: any, userid: any) {
    return service({
        url: "v3/FridenTeam/addFridenTeamUser",
        method: "post",
        params: {
            tid: tid,
            userid: userid,
        }
    });
}

export function getFridenTeamByAttribute(attribute: any) {
    return service({
        url: "v3/FridenTeamTask/getFridenTeamByAttribute",
        method: "get",
        params: {
            attribute: attribute
        }
    });
}

export function getFridenTeamByAttribute111() {
    return service({
        url: "v3/FridenTeamTask/getFridenTeamByAttribute111",
        method: "get",
    });
}

export function delFridenUser(userid: any, tid: any) {
    return service({
        url: "v3/FridenTeamUser/delFridenUser",
        method: "post",
        params: {
            userid: userid,
            tid: tid
        }
    });
}
export function zj(userid: any, tid: any) {
    return service({
        url: "v3/WenXin/zj",
        method: "post",
        params: {
            userid: userid,
            tid: tid
        }
    });
}
