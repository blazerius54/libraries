import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export const TableColumnHeader = ({ children }) => (
    <div>
        <Title level={4} className="title">{children}</Title>
    </div>
);
