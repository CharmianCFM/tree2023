module.exports = {
    verbose : true, //显示详细的测试信息
    clearMocks : true, //清除mocks
    collectCoverage : true, //收集测试覆盖率
    reporters: ["default", "jest-junit"],
    moduleFileExtensions : ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories : ['node_modules'],
    transform: { // 用 ts-jest 处理 tsx 文件
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testRegex: '(/__test__/.*|(test|spec)\\.(jsx?|tsx?)$', // 匹配测试文件 __test__目录下或者是(test|spec))\\.(jsx?|tsx?)$的文件
}