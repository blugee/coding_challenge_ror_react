import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
const DefaultTable = (props) => {

    const [columns, setColumns] = useState([])

    useEffect(() => {
        let array = []
        for (let i = 0; i < props.columns.length; i++) {
            let columnsData = props.columns[i]
            if (columnsData.isFilter) {
                let filters = []
                for (let i = 0; i < props.data.length; i++) {
                    let matchFound = filters.findIndex(item => item.value === props.data[i][columnsData.dataIndex])
                    if (matchFound === -1) {
                        filters.push({ value: props.data[i][columnsData.dataIndex], text: props.data[i][columnsData.dataIndex] })
                    }
                }
                columnsData.filters = filters
            }
            array.push(columnsData)
        }
        setColumns(array)
    }, [props.columns])

    
    const handleChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
        if (props.handleDataChange) {
            props.handleDataChange(pagination, filters, sorter, extra)
        }
    }


    return (
        <Table columns={columns} dataSource={props.data} onChange={handleChange} />
    );

}

export default DefaultTable




