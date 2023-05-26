import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})

export class GeneralConfig {

    public removeUndefinedValues(obj:any) {
        Object.keys(obj).forEach(key => {
            if (obj[key] === undefined) {
                delete obj[key]
            }
        })
        return obj
    }

    public removeUndefinedEmptyAndNullValues(obj:any) {
        Object.keys(obj).forEach(key => obj[key] !== false && !obj[key] && delete obj[key])
        return obj
    }

    public queryParams(params:any) {
        return Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join('&');
    }

    public isEmpty(value:any){
        return  value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    }
}