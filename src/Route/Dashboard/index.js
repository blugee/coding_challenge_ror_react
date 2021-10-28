import React from 'react'
import DefaultTable from '../../Components/DefaultTable';
// import { Tooltip } from 'antd';
import dataJson from "../companies.json"
import { DataGrid } from '@mui/x-data-grid';

let rows = dataJson

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfCompanies:'',
            rowsPerPage:10,
        }

        this.columns=[
            
                {field:"name",headerName : 'Name' ,width:150}, 
                {field:"address",headerName : 'address',width:400},
                {field:"avatar_url",headerName : 'avatar_url',width:400}, 
                {field:"business_structure",headerName : 'business_structure',width:200}, 
                {field:"naics_code",headerName : 'naics_code',width:200}, 
                {field:"created_at",headerName : 'created_at',width:200}, 
                {field:"updated_at",headerName : 'updated_at',width:200}, 
        ]
    }


componentDidMount=()=>{
    this.fetchData()
}

fetchData=()=>{

for (let i = 0; i < rows.length; i++) {
    const address = rows[i].addresses
    if(address){
        let primaryAddressIndex = address.findIndex(item => item.type === 'primary' )
        if(primaryAddressIndex > -1){
            let primaryAddress = `${address[primaryAddressIndex].street_address} , ${address[primaryAddressIndex].city} , ${address[primaryAddressIndex].state} , ${address[primaryAddressIndex].postal_code}`
            rows[i]['address'] = primaryAddress
        }else{
            rows[i]['address'] = '---'
        }
    }
    
}
let numberOfCompanies= rows.length
this.setState({numberOfCompanies:numberOfCompanies})
}

 handleChangeRowsPerPage = (event) => {
     debugger
    this.setState({rowsPerPage:+event.target.value});

  };


    render() {
        const {numberOfCompanies, rowsPerPage}=this.state
        return (
            <>

                <h1>Dashboard</h1>

                <h2>Number Of Companies : {numberOfCompanies}</h2>

                <div style={{ height: 800, width: '100%' }}>

                <DataGrid
                rowsPerPageOptions={[10, 25, 100]}
                rows={rows}
                columns={this.columns}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={this.handleChangeRowsPerPage}
                // checkboxSelection
                />

                </div>

            </>
        );
    }
}

export default Dashboard;