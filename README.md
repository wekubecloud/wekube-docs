### Installation

This is a repository for storing wekube documents

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deploy to kubernetes

```
$ kubectl create ns wekube-web
$ kubectl apply -f deploy/wekube-docs.yaml
```

