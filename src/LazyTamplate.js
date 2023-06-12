import { lazy } from "react";

export function lazyLoad(path, nameExports) {
    return lazy(() => {
        const promise = import(path);
        if (nameExports == null) {
            return promise
        }
        else {
            return promise.then(module => ({ default: module[nameExports] }));
        }
    })
}
