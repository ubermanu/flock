<script>
  import Card from './Card.svelte'

  async function getSources() {
    const res = await fetch('./sources.json')
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error(data)
    }
  }

  let promise = getSources()
</script>

<main>
  <div class="container"></div>
  <div class="container p-6">
    <h1 class="title is-3">Flock</h1>
    <p class="subtitle is-6">
      A package repository for <a href="https://github.com/wren-lang/wren/" target="_blank"><i class="fab fa-github"></i> Wren</a>
    </p>
    <div class="form">
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="Find a package...">
        </div>
        <div class="control">
          <button class="button is-info" aria-label="Search">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container is-fluid p-6">
    {#await promise}
      <div class="fa-3x has-text-centered">
        <i class="fas fa-spinner fa-pulse" aria-label="Loading repository data, hang tight"></i>
      </div>
    {:then sources}
      <div class="grid">
        {#each sources as repository}
          <Card {repository} />
        {/each}
      </div>
    {:catch error}
      <p class="has-text-danger has-text-centered">
        <i class="fa fa-exclamation-triangle"></i> Could not get the repository sources
      </p>
    {/await}
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>Your project on <a href="https://github.com/ubermanu/flock/" target="_blank"><i class="fab fa-github"></i> Flock</a></p>
    </div>
  </footer>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        grid-gap: 1.4rem;
    }

    .footer {
        margin-top: auto;
    }
</style>
