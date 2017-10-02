# Angular 4 Isomorphic App + API Node Express server starter

## Static or Dynamic

**Static** Also known as prerendering
* Happens at build time
* Renders your application and replaces the dist index.html with a version rendered at the route `/`.

**Dynamic**
* Happens at runtime
* Uses `ngExpressEngine` to render you application on the fly at the requested url.

## Installation
* `npm install`

## Development
* run `npm run start` to run angular dev server on `localhost:4200` with live reload
* run `npm run start:api` to run express dev server on `localhost:4000`, and access api from angular at `localhost:4200/api` through proxy

## Production 
**`npm run build:dynamic && npm run serve:dynamic`** - Compiles your application and spins up a Node Express to dynamically serve your Universal application on `http://localhost:4000`.

**`npm run build:static && npm run serve:static`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://127.0.0.1:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`


This demo is built following this guide: https://github.com/angular/angular-cli/wiki/stories-universal-rendering
Along with https://github.com/angular/universal/tree/master/modules/ng-module-map-ngfactory-loader to enable Lazy Loading

Enhanced by Paul Antoine to dev a REST API Server on the same server that serve the Angular App.