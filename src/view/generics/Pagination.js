import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Pagination.css';

const getPages = (current, total, extend) => new Array(2 * extend + 1)
  .fill(null)
  .map((_, i) => current - extend + i)
  .filter(value => value > 0 && value <= total)
;

export const Pagination = ({
  current,
  total,
  onClick,
  extend,
}) => {
  if (total === 0) {
    total = 1;
  }
  const pages = getPages(current, total, extend);

  return (
    <section className="pagination">
      {pages[0] !== 1 && [
        <div
          key="0"
          className="pagination__item"
          onClick={() => onClick(1)}
        >1</div>,
        <div key="1" className="pagination__item ellipsis">...</div>,
      ]}

      {pages.map(page => (
        <div
          key={page}
          className={classNames('pagination__item', { active: page === current })}
          onClick={() => (page !== current) && onClick(page)}
        >{page}</div>
      ))}

      {pages[pages.length - 1] !== total && [
        <div key="0" className="pagination__item ellipsis">...</div>,
        <div
          key="1"
          className="pagination__item"
          onClick={() => onClick(total)}
        >{total}</div>,
      ]}
    </section>
  );
};
Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  extend: PropTypes.number,
};
Pagination.defaultProps = {
  extend: 2,
};
