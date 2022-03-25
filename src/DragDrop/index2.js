import React, {useState, useCallback, useRef} from "react";
import {Table} from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

const type = "DragableBodyRow";

const DragableBodyRow = ({
    index, 
    moveRow, 
    className, 
    style,
     ...restProps
    }) => {
const ref = useRef();
const [{isOver, dropClassName}, drop] = useDrop(() =>({
    accept: type,
    collect: (monitor) => {
        const{index: dragIndex} = monitor.getItem() || {};
        if(dragIndex === index){
            return {}
        }
        return {
            isOver: monitor.isOver(),
            dropClassName: dragIndex < index ? "drop-over-downward": "drop-over-upward",
        };
    },
    drop: (item) =>{
        moveRow(item.index, index);
        console.log("inside drop", item.index, " ", index);
    }, 
}),
    [index]
);
const [, drag] = useDrag(() => ({
    type, 
    item: {index},
    collect: (monitor) => ({
        isDragging: monitor.isDragging(),
    }),
}), [index]);
drop(drag(ref));
return (
    <tr
    ref={ref}
    className={`${className}${isOver ? dropClassName: ""}`}
    style={{cursor: "move", ...style}}
    {...restProps}
    ></tr>
);
};

const columns = [
    {
       title: "Name", 
       dataIndex: "name", 
       key: "name" 
    },
    {
        title: "Age", 
        dataIndex: "age", 
        key: "age" 
     },
     {
        title: "Address", 
        dataIndex: "address", 
        key: "address" 
     }
]

const DragDrop = () =>{
    const [data, setData] = useState([
        {
            key: "1",
            name: "James",
            age: 26,
            address: "India"
        }, 
        {
            key: "2",
            name: "John",
            age: 29,
            address: "USA"
        },
        {
            key: "3",
            name: "Alex",
            age: 32,
            address: "UK"
        },
    ]);
    const components = {
        body:{
            row: DragableBodyRow,
        },
    };

    const moveRow = useCallback((dragIndex, hoverIndex) =>{
        // const dragRow = data[dragIndex];
        // let newArr = [...data];
        // const dragRow = newArr[dragIndex];
        // newArr[dragIndex]=newArr[hoverIndex];
        // newArr[hoverIndex]=dragRow;
        // setData(update(data, {
        //     $splice: [
        //         [dragIndex, 1],
        //         [hoverIndex, 0, dragRow],
        //     ]
        // }))
        // setData(newArr);
        const dragRow = data[dragIndex];
        data[dragIndex]=data[hoverIndex];
        data[hoverIndex]=dragRow;
        let newArr = [...data];
        setData(newArr);
        // let x = dragIndex;
        // let y = hoverIndex;
        // data[x]=data.splice(y, 1, data[x])[0];
        // let newArr = [...data];
        // setData(newArr);


        console.log("Data ", data);
        // console.log("newArr ", newArr);
        console.log("dragIndex", dragIndex);
        console.log("hoverIndex", hoverIndex);
        // console.log("dragRow", dragRow);
    }, 
    [data]
    );
    return (
        <div className = "container mt-5">
            <DndProvider backend={HTML5Backend}>
                <Table
                    columns={columns}
                    dataSource={data}
                    components={components}
                    onRow={(record, index) => ({
                        index,
                        moveRow,
                    })}
                />
            </DndProvider>
        </div>
    );
};
export default DragDrop;