import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import { LibraryTable } from './containers/LibraryTable';
import { SingleLibrary } from './containers/SingleLibrary';

const App = () => (
    <div className="mainWrapper">
        <div className="layoutWrapper">
            <Layout>
                <Switch>
                    <Route exact path="/:order" component={SingleLibrary} />
                    <Route path="/" component={LibraryTable} />
                </Switch>
            </Layout>
        </div>
    </div>
);

export default App;
