import React from 'react';
import './NotFoundPage.css';

const NotFoundPage: React.FC<{}> = () => (
  <section className="section-not-found-page">
    <div className="not-found-page-container">
      <h2 className="not-found-page-title">Ooops!</h2>
      <div className="not-found-page-inf">404 Page not found!</div>
    </div>
  </section>
);

export default NotFoundPage;
