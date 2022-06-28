# GHG dashboard

GHG dashboard is a simple SPA written in React and Typescript. It shows GHG emissions based on country and interval (e.g. month, day, week).
the start and the end dates are hardcoded. User can choose which of the GHGs charts she/he wants to see.

## Development

The GHG dashboard is built on top of the default `create-react-app`, so the usual commands also apply here.

after cloning the repo run the `npm install` or `yarn` command inside of it to install the dependencies.

starting the development server can be done with the command `npm start` or `yarn start`.

to create the minified bundle run `yarn build` or `npm run build`.

to run the tests run `npm run test` or `yarn test`

## TODO

Test coverage is very low, it boils down to the product selection, and the hook that fetches products, for the sake of the task.

Types could eventually be generated based on the be responses, or from a dedicated config file.

ESlint setup is bare bones

Checks in pre-commit hook should not run if the changes are made on non ts/js(x) files
