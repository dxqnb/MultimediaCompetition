import service from "@/utils/request";

export function getFridenTeam(id:any) {
    return service({
        url: "v3/FridenTeam/getFridenTeamList",
        method: "get",
        params: {
            id: id.id
        }

    });
}
export function getChatGroupMessage(groupid:any) {
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

export function getFridenTeamUserList(tid:any) {
    return service({
        url: "v3/FridenTeam/getFridenTeamUserList",
        method: "get",
        params:{
            tid:tid,
        }
    });
}
