import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Display the list of countries and the languages spoken in that country,
 * both in English and native,
 * also display the continent it is located in.
 *
 * Request GraphQL API query to get country data and rendering the list
 */

// API: https://countries.trevorblades.com/

//  query:
//    countries {
//      code
//      name
//  }
class Countries extends React.Component {
  // state = {
  //   isLoaded: false,
  //   countries: [],
  // };

  componentDidMount() {
    // TODO: fetch API data
  }

  render() {
    return (
      <div>
        <h1>Countries Route</h1>

        <ul>
          <li>
            <Link to="/">{'< Back'}</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Countries;
