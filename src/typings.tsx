// 定义对象的属性名和属性的类型
export interface TreeData {
    name: string;
    key: string;
    type: string;
    collapsed: boolean;
    children?: TreeData[];
}