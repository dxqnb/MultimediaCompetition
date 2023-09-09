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
