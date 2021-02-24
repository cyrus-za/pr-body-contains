# Pull Request Lint: body contains string [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

:octocat: A fast 🔥 TypeScript GitHub Action to ensure that your PR body contains a given string.

## Usage

Create a workflow definition at `.github/workflows/<my-workflow>.yml` with
something like the following contents:

```yaml
name: PR Lint

on:
  pull_request:
    # By default, a workflow only runs when a pull_request's activity type is opened, synchronize, or reopened. We
    # explicity override here so that PR titles are re-linted when the PR text content is edited.
    #
    # Possible values: https://help.github.com/en/actions/reference/events-that-trigger-workflows#pull-request-event-pull_request
    types: [opened, edited, reopened]

jobs:
  body-contains:
    runs-on: ubuntu-latest
    steps:
      - uses: cyrus-za/pr-body-contains@master
        with:
          bodyContains: '- [x] Performed self review'
          repo-token: "${{ secrets.GITHUB_TOKEN }}"
```

## Developing

### Build

`yarn install`

`yarn build`

We package everything to a single file with Vercel's
[ncc](https://github.com/vercel/ncc). Outputs to `dist/index.js`.

## Related Reading

- [GitHub Action Metadata Syntax](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions)
