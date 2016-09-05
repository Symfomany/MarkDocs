import {Markdocs} from './app'


var user = new Markdocs(
  null,
  {
      mdFiles: [
          'md/doc_markdocs.v1.md',
          'md/samples.md'
      ],
  }
);


document.body.innerHTML =  `<h3>Hye ${user}</h3>`;
