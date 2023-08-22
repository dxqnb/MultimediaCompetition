import service from "@/utils/request";

export function getBanner() {
    return service({
        url: "v3/Study/getKcDetailList",
        method: "get",
    });
}

export function getKcDetailList(kcdictid: string) {
    return service({
        url: "v3/Study/getKcDetailList",
        method: "get",
        params: {
            kcdictid:kcdictid,
        }
    });
}

export function getVideoJs(id: number,iid: number) {
    return service({
        url: "v3/VideoJs/getVideoJs",
        method: "get",
        params: {
            id:id,
            iid:iid,
        }
    });
}
