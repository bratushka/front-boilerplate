import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.css';


export const Tabs = ({
  tabs,
  activeTab,
  onChange,
}) => (
  <section className="tabs">
    {tabs.map(tab => (
      <div
        key={tab}
        className={classNames('tabs__item', { active: activeTab === tab })}
        onClick={() => (activeTab !== tab) && onChange(tab)}
      >
        {tab}
      </div>
    ))}
  </section>
);
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
