import React from 'react';
import 'antd/dist/antd.css';
import { Table, Anchor } from 'antd';
import { useSelector } from "react-redux";

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
    render: (text) => <a href={text}>{text}</a>,
  },
];

const TableComponent = () => {

  const data = useSelector((state) => state.table);

  return(
    <Table columns={columns} dataSource={data} />
  )
};

export default TableComponent;
