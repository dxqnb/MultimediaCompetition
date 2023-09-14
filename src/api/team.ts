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
