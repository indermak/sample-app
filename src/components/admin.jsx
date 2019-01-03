import React from 'react';
import usersData from '../usersData';

export default () => {
    const renderRows = () => {
        return usersData.map((row, index) => (
            <tr key={row.name + index}>
                <th scope="row">{index + 1}</th>
                <td>{row.name}</td>
                <td>{row.pass}</td>
                <td>{row.role}</td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
