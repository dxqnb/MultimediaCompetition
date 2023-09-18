import service from "@/utils/request";
export function getBanner(type:any) {
    return service({
        url: "v3/Tool/getIndexCar",
        method: "get",
        params:{
            type:type,
        }
    });
}
export function chats(msg:any) {
    return service({
        url: "v3/WenXin/chats",
        method: "post",
        params:{
            msg:msg,
        }
    });
}
export function ctjl(username:any) {
    return service({
        url: "v3/WenXin/ctjl",
        method: "post",
        params:{
            username:username,
        }
    });
}