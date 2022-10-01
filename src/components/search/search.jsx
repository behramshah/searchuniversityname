import React from 'react';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

const onSearch = (value) => console.log(value);

export default function SearchBlock() {
  return (
    <Space direction="vertical" align="center">
        <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        />    
    </Space>
  );
}
