import React from 'react';
import './styles.scss';

const Header = ({ title }) => (
  <div className='layout-title'>
    <h1 id='header'>{title}</h1>
  </div>
);

const Index = props => {
  const { children, title } = props;
  const getClassName = title => {
    const defaultName = 'column-wide';
    return Boolean(title) ? `${defaultName}-title` : defaultName;
  };

  return (
    <div className={getClassName(title)}>
      {Boolean(title) ? <Header title = {title} /> : null}
      {children}
    </div>
  );
};

export default Index;