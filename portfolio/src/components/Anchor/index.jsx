import React from 'react';
import PropTypes from 'prop-types';

function Anchor({ href, text }) {
  return (
    <a
      href={ href }
      target="_blank"
      rel="noreferrer"
    >
      { text }
    </a>
  );
}

Anchor.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
}.isRequired;

export default Anchor;
