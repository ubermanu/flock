# Flock

A repository for [Wren](https://github.com/wren-lang/wren) projects.

### Submit a package

You can post an issue or submit a PR that edits the `repositories.json` file.

### How it works

It takes the [repository.json](https://github.com/ubermanu/flock/blob/main/repositories.json) file and fetch each repo information using the [GitHub GraphQL API](https://github.com/octokit/graphql.js).

The update occurs every 15 minutes.
