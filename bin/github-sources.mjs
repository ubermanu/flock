import dotenv from 'dotenv'
import { readFileSync, writeFileSync } from 'fs'
import { graphql } from '@octokit/graphql'

dotenv.config()

let fc = readFileSync('./repositories.json').toString()
const repositories = JSON.parse(fc)

const query = `
fragment repoProperties on Repository {
  name
  nameWithOwner
  description
  openGraphImageUrl
  url
  sshUrl
  isArchived
  createdAt
  updatedAt
  owner {
    login
    avatarUrl
    url
  }
  licenseInfo {
    name
  }
  forkCount
  stargazerCount
  issues {
    totalCount
  }
  defaultBranchRef {
    name
  }
  releases(last: 3) {
    totalCount
    edges {
      node {
        author {
          login
        }
        tag {
          name
        }
        publishedAt
      }
    }
  }
}

{
  ${repositories
  .map(
    (r, index) => `r${index + 1}: repository(owner: "${r.split('/')[0]}", name: "${r.split('/')[1]}") {
    ...repoProperties
  }`
  )
  .join('\n')}
}`

/**
 * @type {[]}
 */
const res = await graphql(query, {
  headers: {
    authorization: `token ${process.env.FLOCK_GITHUB_ACCESS_TOKEN}`
  }
})

/**
 * Writes the query results into a json file
 */
writeFileSync('./public/sources.json', JSON.stringify(Object.values(res)))
