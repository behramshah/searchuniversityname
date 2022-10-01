import React from 'react';
import 'antd/dist/antd.css';
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => text,
  },
  {
    title: 'State/Province',
    dataIndex: 'state-province',
    key: 'state-province',
  },
  {
    title: 'Country code',
    dataIndex: 'alpha_two_code',
    key: 'alpha_two_code',
  },
  {
    title: 'Web pages',
    key: 'web_pages',
    dataIndex: 'web_pages',
  },
];
const data = [
    {
     "name": "Marywood University",
     "alpha_two_code": "US",
     "state-province": null,
     "domains": ["marywood.edu"],
     "web_pages": ["http://www.marywood.edu"],
     "country": "United States"
    },
    {
        "name": "University of Petroleum and Energy Studies", 
        "alpha_two_code": "IN", "state-province": "Dehradun", 
        "domains": ["upes.ac.in"], 
        "web_pages": ["https://www.upes.ac.in/",], 
        "country": "India"
    }
];

const TableComponent = () => <Table columns={columns} dataSource={data} />;

export default TableComponent;
