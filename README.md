<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.architect.io/logo/horizontal-inverted.png">
    <source media="(prefers-color-scheme: light)" srcset="https://cdn.architect.io/logo/horizontal.png">
    <img width="320" alt="Architect Logo" src="https://cdn.architect.io/logo/horizontal.png">
  </picture>
</p>

<p align="center">
  A dynamic microservices framework for building, connecting, and deploying cloud-native applications.
</p>

---
# Running Node.js on Architect
In this example, you'll learn how to capture an app written with Node.js, Express, and a [Postgres](https://www.postgresql.org/)
database as a [dependency](https://docs.architect.io/components/dependencies/) using Architect to enable automated deployments, networking and network security for your application - wherever it gets deployed.

In the `architect.yml` file for this project, we describe this app as two deployable services. However, we also
leverage Architect's [service discovery](//docs.architect.io/components/service-discovery) features to populate environment
secrets by reference. This not only allows us to automatically connect the services to each other, but it also allows
Architect to build strict network policies to whitelist the traffic between these services. Now we won't have any work ahead
of us to promote this stack from local dev all the way through to production!

[Learn more about the architect.yml file](//docs.architect.io/configuration)

## Using the API
This API implements basic CRUD functionality for a simple `Todos` schema consisting of a `name`, a `description`, `createdate`, `createdby`, and `updateddate`.
Use the data below as part of a `post` request to `/api/todo` to populate your todo list.

### The `Todos` Schema:

```
  {
    "todo": {
      name: "Buy grocery",
      description: "Milk and honey",
      createdby: "Architect"
    }
  }
```

## Running Locally
The `architect.yml` file is declarative, which allows the Architect Component it describes to be run in any environment,
from local development all the way to production. Follow these steps to clone this repository and run the application
locally.

Once the deployment has completed, you can reach your new service by going to https://api.localhost.architect.sh.

```sh
# Clone the repository and navigate to this directory
$ git clone git@github.com:architect-templates/nodejs.git
$ cd ./nodejs

# Deploy locally using the dev command
$ architect dev architect.yml
```

## Deploying to the Cloud

Want to try deploying this to a cloud environment? Architect's got you covered there, too! It only takes a minute to
[sign up for a free account](https://cloud.architect.io/signup).

You can then [deploy the component](https://docs.architect.io/getting-started/introduction/#deploy-to-the-cloud) using the command below from the `nodejs` directory. Note that “example-environment” is the free environment that is created with your Architect account.

The `<account-name>` is the name you used when you created your account in Architect Cloud. Use "example-environment" for
the `<environment-name>` to deploy to the free environment that is created when you register with Architect.

```sh
# Deploy to Architect Cloud
$ architect deploy architect.yml -e example-environment
```

## Deploying to the Cloud

Want to try deploying this to a cloud environment? Architect's got you covered there, too! It only takes a minute to
[sign up for a free account](https://cloud.architect.io/signup).

You can then [deploy the application](https://docs.architect.io/getting-started/introduction/#deploy-to-the-cloud) by running the command below. Note that “example-environment” is the free environment that is created with your Architect account.

```sh
# Deploy to Architect Cloud
$ architect deploy architect.yml -e example-environment
```
