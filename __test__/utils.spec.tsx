import {sum} from '../src/utils';
describe('sum', () => { // describe is a test suite 分组
    test('1+1', () => { // test is a test case 一个测试用例/单元测试
        expect(sum(1, 1)).toBe(2);
    });
    test('2+2', () => { // test is a test case 一个测试用例/单元测试
        expect(sum(2, 2)).toBe(4);
    });
})