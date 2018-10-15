# kubernetes-pilot

> A maritime pilot, sometimes simply called a **Pilot**, is a
> sailor who maneuvers ships through dangerous or congested waters.

## :sparkles: Features

- Kubernetes GraphQL API
- Configuration Dashboard

## :package: Installation

You can install Pilot globally, or as a development dependency:
```bash
yarn global add @docamole/kubernetes-pilot
# npm install -g @docamole/kubernetes-pilot

# or

yarn add -D @docamole/kubernetes-pilot
# npm install --save-dev @docamole/kubernetes-pilot
```

## :rocket: Usage

Simply run the `pilot` cli tool to start the API and dashboard.
```bash
pilot
# > Pilot Dashboard:  http://localhost:8080/
# > Pilot API:        http://localhost:8080/graphql
```

Visit [http://localhost:8080/](http://localhost:8080) for a visual resource management dashboard.

Visit [http://localhost:8080/graphql](http://localhost:8080/graphql) to explore the API

## :octocat: Development

Clone this repo, then install the dependencies, you'll need to install them for
both /dashboard and /server as well as the base project. (This is done
to minimize the final package size and to keep components/dependencies isolated)
```bash
git clone https://github.com/docamole/kubernetes-pilot.git
cd kubernetes-pilot
yarn install
yarn --cwd dashboard install
yarn --cwd server install
```

Scripts:

  - `yarn start` Launch the API server and Dashboard
  - `yarn build` Bundle the dashboard and pack npm package for publishing
  - `yarn --cwd server start` Launch the standalone API server
