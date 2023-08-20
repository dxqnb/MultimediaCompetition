import service from "@/utils/request";
export function getBanner() {
    return service({
        url: "banner",
        method: "get",
    });
}