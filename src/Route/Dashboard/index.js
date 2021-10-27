import React from 'react'
import DefaultTable from '../../Components/DefaultTable';

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.sorter = (v1, v2) => {
            return (v1 === null) - (v2 === null) || (isFinite(v1) && isFinite(v2) ? v1 - v2 : v1.toString().localeCompare(v2))
        }
        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                defaultSortOrder: 'descend',
                sorter: (a, b) => this.sorter(a.name, b.name),
            },
            {
                title: 'Age',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
                sorter: (a, b) => this.sorter(a.age, b.age),
            },
            {
                title: 'Address',
                dataIndex: 'address',
            },
        ]

    }
    render() {
        return (
            <>
                <h1>Dashboard</h1>
                <DefaultTable data={data} columns={this.columns} />
            </>
        );
    }
}

export default Dashboard;