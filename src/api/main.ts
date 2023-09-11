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