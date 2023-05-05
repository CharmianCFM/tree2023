import React from "react";
import './index.less';
import { TreeData } from "../typings";
import TreeNode from "./treeNode";
interface Props {//接口
    data: TreeData;
}
class Tree extends React.Component<Props> {//泛型
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div className="tree">
                <div className="tree-nodes">
                    <TreeNode data={this.props.data} />
                </div>
            </div>
        );
    }
}
export default Tree;