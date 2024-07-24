import React from 'react';

function Projects({props}) {
  return (
    <div>
        <div class="card text-white bg-dark mb-3" >
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
          <p class=" card-text text-white text-wrap">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
