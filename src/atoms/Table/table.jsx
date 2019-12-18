import React from 'react';
import constants from '../../util/constants'
import './table.css';

const Table = ({
    content
}) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>{constants.tableHeaderName}</th>
                        <th>{constants.tableHeaderCCNumber}</th>
                        <th>{constants.tableHeaderBalance}</th>
                        <th>{constants.tableHeaderLimit}</th>
                    </tr>
                </thead>
                <tbody>{content.users && content.users.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.userName}</td>
                            <td>{item.userCCNumber}</td>
                            <td>{item.balance}</td>
                            <td>{item.userCCLimit}</td>
                        </tr>
                    )
                })}</tbody>
            </table>
        </div>
    );
};


export default Table;
