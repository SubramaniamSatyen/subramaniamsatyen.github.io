# Satyen Subramaniam Personal Website

This repository contains the code and content displayed on my personal website, highlighting my recent projects and experience, and providing users the ability to search through all of my past work.

## Development

This project is divided into four folders: 
* `/components/*` contains the key building blocks of the site used by each page
* `/css/*` contains the styling used for specific components
* `/images/*` contains the image assets used across the site
* `/pages/*` contains the outlined structure for each of the site's main pages

Beyond these folders, the `RenderedWebpage.js` file under the `pages` folder contains the logic for determining whether to render a mobile or desktop view, as well as the site's routing. This site uses MUI components for a consistent style.

To run the site locally, clone the repo, navigate to the project directory and run `npm start`


## Deployment

This site is deployed with github pages. To proceed with deployment, configure a new github pages site on github and run `npm run deploy` in the project directory.
