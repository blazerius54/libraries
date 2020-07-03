import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Input } from 'antd';
import { TableColumnHeader } from '../../components/TableColumnHeader';
import { LIBRARY_LIST_FETCH } from '../../modules/consts';

const { Column } = Table;

const LibraryTableComponent = ({libraryStore }) => {
    const [libraryList, setLibraryList] = useState([]);
    const dispatch = useDispatch();

    const filterRegionsByName = (e) => {
        const filteredLibraries = libraryStore.list
            .filter((item) => item.territory.toLowerCase().includes(e.target.value.toLowerCase()));
        setLibraryList(filteredLibraries);
    };

    useEffect(() => {
        dispatch({
            type: LIBRARY_LIST_FETCH,
        });
    }, [dispatch]);

    useEffect(() => {
        setLibraryList(libraryStore.list);
    }, [libraryStore]);

    return (
        <>
            <Input onChange={filterRegionsByName} placeholder="Поиск по регионам" />
            <Table
                rowKey="order"
                dataSource={libraryList}
                size="small"
            >
                <Column
                    title={<TableColumnHeader>Регион</TableColumnHeader>}
                    key="territory"
                    width="50%"
                    align="center"
                    render={(props) => <Link to={`${props.order}`}>{props.territory}</Link>}
                />
                <Column
                    title={<TableColumnHeader>Библиотек</TableColumnHeader>}
                    dataIndex="libraries"
                    key="libraries"
                    width="50%"
                    align="center"
                    sorter={(a, b) => a.libraries - b.libraries}
                />
            </Table>
        </>
    );
};

const mapStateToProps = ({ libraryReducer }) => ({
    libraryStore: libraryReducer,
});

export const LibraryTable = connect(mapStateToProps)(LibraryTableComponent);
