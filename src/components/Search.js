import React, { useState, useEffect } from 'react';

import wikipedia from '../apis/wikipedia';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wikipedia.get('', {
        params: {
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet
            .toString()
            .replace(/<span class="searchmatch">/g, '')
            .replace(/<\/span>/g, '')}
          {
            //Sets the innerHTML content of the React Div to the String obtained from the Wikipedia API
            //WARNING: Susceptible to XSS attacks
            //<span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
          }
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
