# The 908 St Clair Microsite

## Built With

* [Bootstrap 4](https://getbootstrap.com/)
* [Gulp 4](https://gulpjs.com/)
* [Sass](https://sass-lang.com/)

## Getting Started

The below instructions will help you get a copy of the project up and running on your local machine for HTML/JS/SASS development.

### Prerequisites

This document assumes you have node.js installed on your local system.

If you don't have Gulp installed globally already, use this command to install it globally on your system.

```
npm install gulp -g
```

### Local Setup

Clone the project from this repo.  In the root folder of this project, run the following command to install the packages included in `package.json`:

```
$ npm install
```

### Start command -- for running a local dev server

For live development and running the project in a browser. It will continuously monitor HTML/SASS/JS files and copy over/concat changes as you make them.

```
$ npm run start
```

### Making live edits

While you run `npm run start`, you can make HTML, SASS, JS and asset edits in `/src` and they will be copied automatically to `/public`.

### Partial HTML files

Site head, header/footer, and the registration form exists as partial HTML files in `assets/partials`. Be careful making changes to these, because they are used on many pages sitewide. The dev server will automatically copy over any partial changes to pages that use them, and a build command will copy them over as well.

### Build command -- for building a package to deploy

This command will just do one build, into the `/public` folder, without the local dev server running. It will compile any SASS changes, copy any changed file, partial or asset, and concatenate the JS into one file, ready to deploy.

```
$ npm run build
```

### Deploy the public folder

The contents of the `/public` folder should be deployed to test or live server.
