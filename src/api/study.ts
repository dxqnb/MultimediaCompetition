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

export function getVideoJs(id: any, iid: any) {
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

export function getZyKcList(szyid: string, userid: any) {
    return service({
        url: "v3/Study/getZyKcList",
        method: "get",
        params: {
            szyid: szyid,
            userid: userid
        }
    });
}

export function getKcList(sid: string, userid: any) {
    return service({
        url: "v3/Study/getKcList",
        method: "get",
        params: {
            sid: sid,
            userid: userid
        }
    });
}

export function ifAnswer(id: string, taoid: any, userid: string, uanswer: string, res: string) {
    return service({
        url: "v3/TestKc/ifAnswer",
        method: "post",
        params: {
            id: id,
            taoid: taoid,
            userid: userid,
            uanswer: uanswer,
            res: res
        }
    });
}

export function getTestKcTiList(taoid: any) {
    return service({
        url: "v3/TestKc/getTestKcTiList",
        method: "get",
        params: {
            taoid: taoid,
        }
    });
}

export function getVideoYw(id: any, iid: any) {
    return service({
        url: "v3/VideoYw/getVideoYw",
        method: "get",
        params: {
            id: id,
            iid: iid
        }
    });
}
export function addYwLike(id: any) {
    return service({
        url: "v3/VideoYw/addYwLike",
        method: "post",
        params: {
            id: id,
        }
    });
}
