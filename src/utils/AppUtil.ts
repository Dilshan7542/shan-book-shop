import {RegexService} from "./regex.service.ts";
import {IPage} from "../service/ApiClient.ts";

export function pageCheck(page:{pageNo?:string,rowCount?:string}):IPage{
    if(page.pageNo && page.rowCount)
    if (RegexService.NUMBER.test(page.pageNo)) {
        if (RegexService.NUMBER.test(page.rowCount)) {
            return {
                pageNo: +page.pageNo,
                rowCount: +page.rowCount
            };
        }
    }
    return {
        pageNo:1,
        rowCount:10
    }
}
export function pageCheck2(page: { pageNo?: string; rowCount?: string }): IPage {
    const isValidNumber = (value?: string) => RegexService.NUMBER.test(value || "");
    return {
        pageNo: isValidNumber(page.pageNo) ? +page.pageNo! : 1,
        rowCount: isValidNumber(page.rowCount) ? +page.rowCount! : 10
    };
}