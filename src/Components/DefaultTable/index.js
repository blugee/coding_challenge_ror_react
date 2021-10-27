import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

class DefaultTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    handleChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
        if (this.props.handleDataChange) {
            this.props.handleDataChange(pagination, filters, sorter, extra)
        }

    }

    render() {
        const { columns, data, } = this.props
        return (
            <Table columns={columns} dataSource={data} onChange={this.handleChange} />
        );
    }
}

export default DefaultTable




