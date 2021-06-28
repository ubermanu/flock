import depot from 'svelte-depot'

const repositories = depot()

async function fetchSources() {
  const res = await fetch('./sources.json')
  const data = await res.json()

  if (res.ok) {
    repositories.add(...data.sort(sortByUpdatedAt))
    return data
  } else {
    throw new Error(data)
  }
}

/**
 * Sort function, by update date (desc)
 * @param a
 * @param b
 * @return {number}
 */
function sortByUpdatedAt(a, b) {
  return Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
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
  const rx = new RegExp(text, 'i')
  return repositories.values().filter(item => rx.test(item.nameWithOwner) || rx.test(item.description))
}

/**
 * Export store as default
 */
export default repositories.store
