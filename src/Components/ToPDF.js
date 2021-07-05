import React, { useRef, createRef } from "react";
import ReactToPrint from "react-to-print";


const thStyle = {
    fontFamily: "Anton",
    fontWeight: "normal",
    fontStyle: "normal"
};



// const ToPDF = () => {

//     return (
//         <h1>
//             )
// }




const Example = () => {
    const inref = useRef();
    return (
        <div>
            <h1>asd</h1>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => inref.current}
            />
            <table ref={inref}>
                <thead style={thStyle}>
                    <th>column 1</th>
                    <th>column 2</th>
                    <th>column 3</th>
                </thead>
                <tbody>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => {
                console.log(inref)
            }}>ads</button>
        </div>
    )
}

export default Example




