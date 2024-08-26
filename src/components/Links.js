import React from 'react';

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={"https://github.com/liza"} target="_blank" rel="noopener noreferrer">
        {github}
      </a>
      <br />
      <a href={"https://www.linkedin.com/in/liza/"} target="_blank" rel="noopener noreferrer">
        {linkedin}
      </a>
    </div>
  );
}

export default Links;