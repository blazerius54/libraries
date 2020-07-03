import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import './style.css';

const SingleLibraryComponent = ({ libraryList }) => {
    const { order } = useParams();

    const returnToMainPage = () => {
        window.history.back();
    };
    if (libraryList.length === 0) {
        returnToMainPage();
        return <></>;
    }

    const currentLibrary = libraryList[order - 1];
    return (
        <>
            <Divider orientation="left" className="libraryTitle">
                <LeftCircleOutlined onClick={returnToMainPage} />
                {currentLibrary.fullname}
            </Divider>
            <Row>
                <Col span={8}>
                    <div className="gridCol">
                        <p>Фонды:</p>
                        <p>{currentLibrary.funds}</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="gridCol">
                        <p>Сотрудников:</p>
                        <p>{currentLibrary.employees}</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="gridCol">
                        <p>Компютеров:</p>
                        <p>{currentLibrary.computers}</p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = ({ libraryReducer }) => ({
    libraryList: libraryReducer.list,
});

export const SingleLibrary = connect(mapStateToProps)(SingleLibraryComponent);
