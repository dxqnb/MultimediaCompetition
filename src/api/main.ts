import service from "@/utils/request";
export function getBanner() {
    return service({
        url: "v3/Tool/getIndexCar",
        method: "get",
    });
}