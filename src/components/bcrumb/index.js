import React, { PureComponent } from 'react';
import { HashRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
const breadcrumbNameMap = {
    '/front': '前沿',
    '/life': '生活',
    '/life/life1': '生活1',
    '/life/life2': '生活2',
    '/apps': 'Application List',
      '/apps/1': 'Application1',
      '/apps/2': 'Application2',
      '/apps/1/detail': 'Detail',
      '/apps/2/detail': 'Detail'
  };
const Home = (props) => {
  const location = useLocation();
//   路由
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <hr/>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
}
export default class Default extends PureComponent {
    render() {
        return (
            <Home />
        )
  }
}