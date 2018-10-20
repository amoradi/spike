## docs

### front end
- react, client-side rendered
- react router (handles all routing)
- CSS-in-JS with help from Radium (no css/scss/less here)
- axios HTTP client
- react-apollo to query graphQL in react
- no redux thus far

### back end
- node, express
- graphQL, which hits a 3rd party api

### project utils
- prettier

### guidelines
- container / component pattern in react
- react components & js classes are PascalCase
- all others are camelCase
- default exports are banned in favor of named { exports }
- consider separating content from components, perhaps with locales.json files
- project is feature-structured. all the stuff lives within the feature folder