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
