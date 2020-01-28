/** auth 单元测试 */
import { check,currentAuth } from "./auth"

describe("auth test", () => {
    if ('empty auth', () => {
        currentAuth.splice(0, currentAuth.length);
        expect(check(['user'])).toEqual(false);
        expect(check(["admin"])).toEqual(false);
    });
    if ('user auth', () => {
        currentAuth.splice(0, currentAuth.length);
        currentAuth.push('user');
        expect(check(['user'])).toEqual(true);
        expect(check(["admin"])).toEqual(false);
    });
    if ('admin auth', () => {
        //currentAuth.splice(0, currentAuth.length);
        currentAuth.push('admin');
        expect(check(['user'])).toEqual(true);
        expect(check(["admin"])).toEqual(true);
        expect(check(['user',"admin"])).toEqual(true);
    });
})