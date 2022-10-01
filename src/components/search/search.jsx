import React from 'react';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch } from "react-redux";
import { getSearchResult } from "../../redux/actions";

const { Search } = Input;



export default function SearchBlock() {

  const dispatch = useDispatch();
 
  const onSearch = (value) => {
    const searchitem = `search?name=${value}`
    dispatch(getSearchResult(searchitem))
  };

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
