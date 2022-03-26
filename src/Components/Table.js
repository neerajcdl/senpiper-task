import React from "react";
import './Table.css'


const Table = (props) => {

        return (
            <div className="main-container">
                <div className="container-fluid table-containers">
                
                <h2>All Feedback</h2>
                    <table className="table" >
                        <thead style={{ backgroundColor: '#e056fd' }}>
                            <tr>
                                <th scope="col">Form Name</th>
                                <th scope="col">Text field</th>
                                <th scope="col">Phone field</th>
                                <th scope="col">Email field</th>
                                <th scope="col">Radio button</th>
                                <th scope="col">Name</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aromatic bar</td>
                                <td>{props.textarea}</td>
                                <td>{props.phone}</td>
                                <td>{props.email}</td>
                                <td>{props.customRadio}</td>
                                <td>{props.name}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )    
    
}

export default Table;