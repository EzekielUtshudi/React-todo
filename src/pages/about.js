import React from 'react';
// import { Link, Route, useRouteMatch } from 'react-router-dom';

// import SinglePage from './singlePage';

function About() {
  // const { url, path } = useRouteMatch();
  return (
    <div className="about__content">
      this is the about page.
      {/* <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
      <Outlet /> */}
    </div>
  );
}

export default About;
