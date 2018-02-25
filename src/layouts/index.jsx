import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';
import favicon from './favicon.ico';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by Leonbec">
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default Layout;
