import service from "@/utils/request";


export function getKcDetailList(kcdictid: string) {
    return service({
        url: "v3/Study/getKcDetailList",
        method: "get",
        params: {
            kcdictid: kcdictid,
        }
    });
}

export function getZyKcDetailList(zyid: string) {
    return service({
        url: "v3/Study/getZyKcDetailList",
        method: "get",
        params: {
            zyid: zyid,
        }
    });
}

export function getVideoJs(id: number, iid: number) {
    return service({
        url: "v3/VideoJs/getVideoJs",
        method: "get",
        params: {
            id: id,
            iid: iid,
        }
    });
}

export function getNotice() {
    return service({
        url: "v3/Tool/getNotice",
        method: "get",
    });
}

export function getNoticeId(noticeid: number) {
    return service({
        url: "v3/Tool/getNoticeId",
        method: "get",
        params: {
            noticeid: noticeid
        }
    });
}

export function addZyKc(username: string, zykcid: string) {
    return service({
        url: "v3/Study/addZyKc",
        method: "post",
        params: {
            username: username,
            zykcid: zykcid
        }
    });
}

export function getZyKcList(szyid: string) {
    return service({
        url: "v3/Study/getZyKcList",
        method: "get",
        params: {
            szyid: szyid
        }
    });
}
