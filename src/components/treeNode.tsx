import React from "react";
import { TreeData } from "../typings";
interface Props {//接口
    data: TreeData;
}
class TreeNode extends React.Component<Props> {//泛型
    constructor(props: Props) {
        super(props);
    }
    render() {
        let { data: { name, children } } = this.props;
        return (
            <div className="tree-node">
                <div className="inner">
                    <span className="content">{name}</span>
                </div>
                {
                    (children && children.length > 0) && (
                        <div className="children">
                            {
                                children.map((item: TreeData, index: number) => (
                                    <TreeNode data={item} key={index} />
                                ))
                            }
                        </div>
                    )
                }
            </div>);
    }
}
export default TreeNode;