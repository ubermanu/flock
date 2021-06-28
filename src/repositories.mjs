import depot from 'svelte-depot'

const repositories = depot()

async function fetchSources() {
  const res = await fetch('./sources.json')
  const data = await res.json()

  if (res.ok) {
    repositories.add(...data)
    return data
  } else {
    throw new Error(data)
  }
}

/**
 * Export the promise so it can be used in FE
 * @type {Promise<any|undefined>}
 */
export let promise = fetchSources()

/**
 * Return a filtered list of repos
 */
export function findInNameAndDescription(text) {
  return repositories.values().filter(item => item.nameWithOwner.includes(text) || item.description.includes(text))
}

/**
 * Export store as default
 */
export default repositories.store
