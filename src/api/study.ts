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

export function addKc(username: string, kcid: string) {
    return service({
        url: "v3/Study/addKc",
        method: "post",
        params: {
            username: username,
            kcid: kcid
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

export function ifKCAnswer(id: string, taoid: any, userid: string, uanswer: string, res: string) {
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

export function ifZYAnswer(id: string, taoid: any, userid: string, uanswer: string, res: string) {
    return service({
        url: "v3/TestZy/ifAnswer",
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

export function getZyKcZj(id: any, userid: any) {
    return service({
        url: "v3/Study/getZyKcZj",
        method: "get",
        params: {
            id: id,
            userid: userid
        }
    });
}

export function getKcXj(id: any, userid: any) {
    return service({
        url: "v3/Study/getKcXj",
        method: "get",
        params: {
            id: id,
            userid: userid
        }
    });
}

export function getKc(id: any) {
    return service({
        url: "v3/Study/getKc",
        method: "get",
        params: {
            id: id,
        }
    });
}

export function getZyKc(id: any) {
    return service({
        url: "v3/Study/getZyKc",
        method: "get",
        params: {
            id: id,
        }
    });
}

export function getTestKcTaoList(kcid: any) {
    return service({
        url: "v3/TestKc/getTestKcTaoList",
        method: "get",
        params: {
            kcid: kcid,
        }
    });
}

export function getTestZyTaoList(kcid: any) {
    return service({
        url: "v3/TestZy/getTestZyTaoList",
        method: "get",
        params: {
            kcid: kcid,
        }
    });
}

export function getTestZyTiList(taoid: any) {
    return service({
        url: "v3/TestZy/getTestZyTiList",
        method: "get",
        params: {
            taoid: taoid,
        }
    });
}

export function addJsLike(id: any) {
    return service({
        url: "v3/VideoJs/addJsLike",
        method: "post",
        params: {
            id: id,
        }
    });
}

export function getZyKcNoteList(kcxjid: any) {
    return service({
        url: "v3/StudyNote/getZyKcNoteList",
        method: "get",
        params: {
            kcxjid: kcxjid,
        }
    });
}

export function getMyKcNoteList(kcxjid: any, userid: any) {
    return service({
        url: "v3/StudyNote/getMyKcNoteList",
        method: "get",
        params: {
            kcxjid: kcxjid,
            userid: userid
        }
    });
}

export function getMyZyKcNoteList(kcxjid: any, userid: any) {
    return service({
        url: "v3/StudyNote/getMyZyKcNoteList",
        method: "get",
        params: {
            kcxjid: kcxjid,
            userid: userid
        }
    });
}

export function delKcNote(id: any) {
    return service({
        url: "v3/StudyNote/delKcNote",
        method: "delete",
        params: {
            id: id
        }
    });
}

export function delZyKcNote(id: any) {
    return service({
        url: "v3/StudyNote/delZyKcNote",
        method: "delete",
        params: {
            id: id
        }
    });
}

export function getKcPjList(kcid: any) {
    return service({
        url: "v3/StudyPj/getKcPjList",
        method: "get",
        params: {
            kcid: kcid
        }
    });
}

export function getZyKcPjList(kcid: any) {
    return service({
        url: "v3/StudyPj/getZyKcPjList",
        method: "get",
        params: {
            kcid: kcid
        }
    });
}

export function addKcNote(data: any) {
    return service({
        url: "v3/StudyNote/addKcNote",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function addZyKcNote(data: any) {
    return service({
        url: "v3/StudyNote/addZyKcNote",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function addKcPj(data: any) {
    return service({
        url: "v3/StudyPj/addKcPj",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function addZyKcPj(data: any) {
    return service({
        url: "v3/StudyPj/addZyKcPj",
        method: "post",
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function getMyKc(username: any) {
    return service({
        url: "v3/Study/getMyKc",
        method: "get",
        params: {
            username: username
        }
    });
}

export function getMyZyKc(username: any) {
    return service({
        url: "v3/Study/getMyZyKc",
        method: "get",
        params: {
            username: username
        }
    });
}

export function getMyZyWorng(userid: any) {
    return service({
        url: "v3/TestZy/getMyZyWorng",
        method: "get",
        params: {
            userid: userid
        }
    });
}

export function getMyKcWorng(userid: any) {
    return service({
        url: "v3/TestKc/getMyKcWorng",
        method: "get",
        params: {
            userid: userid
        }
    });
}

export function ctzyzj(userid: any, taoid: any, tiid: any) {
    return service({
        url: "v3/WenXin/ctzyzj",
        method: "post",
        params: {
            userid: userid,
            taoid: taoid,
            tiid: tiid
        }
    });
}
export function ctkczj(userid: any, taoid: any, tiid: any) {
    return service({
        url: "v3/WenXin/ctkczj",
        method: "post",
        params: {
            userid: userid,
            taoid: taoid,
            tiid: tiid
        }
    });
}
export function addJsPlLike(id: any) {
    return service({
        url: "v3/VideoJs/addJsPlLike",
        method: "post",
        params: {
            id: id,
        }
    });
}
export function getVideoJsPl(lyid: any) {
    return service({
        url: "v3/VideoJs/getVideoJsPl",
        method: "get",
        params: {
            lyid: lyid,
        }
    });
}
export function getKcNoteList(kcxjid: any) {
    return service({
        url: "v3/StudyNote/getKcNoteList",
        method: "get",
        params: {
            kcxjid: kcxjid,
        }
    });
}
