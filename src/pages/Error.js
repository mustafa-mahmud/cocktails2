import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h2>error page</h2>
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
