<script>
  import Card from './Card.svelte'
  import repositories, { findInNameAndDescription, promise } from './repositories.mjs'
  import FlappingBirds from './FlappingBirds.svelte'

  let search = ''
  let results = []

  function handleKeyUp(ev) {
    search = ev.target.value
    results = findInNameAndDescription(search)
  }
</script>

<main>
  <FlappingBirds />
  <div class="container"></div>
  <div class="container p-6">
    <h1 class="title is-3">Flock</h1>
    <p class="subtitle is-6">
      A package repository for <a href="https://github.com/wren-lang/wren/" target="_blank"><i
      class="fab fa-github"></i> Wren</a>
    </p>
    <div class="form">
      <div class="field">
        <div class="control has-icons-right">
          <input class="input" type="text" placeholder="Find a package..."
                 on:keyup={handleKeyUp}>
          <span class="icon is-small is-right">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="container is-fluid p-6">
    {#await promise}
      <div class="fa-3x has-text-centered">
        <i class="fas fa-spinner fa-pulse" aria-label="Loading repository data, hang tight"></i>
      </div>
    {:then _}
      <div class="grid">
        {#if search.length > 0}
          {#each results as repository}
            <Card {repository} />
          {/each}
        {:else}
          {#each $repositories as repository}
            <Card {repository} />
          {/each}
        {/if}
      </div>
    {:catch error}
      <p class="has-text-danger has-text-centered">
        <i class="fa fa-exclamation-triangle"></i> Could not get the repository sources
      </p>
    {/await}
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>Your project in the <a href="https://github.com/ubermanu/flock/" target="_blank"><i class="fab fa-github"></i>
        Flock</a></p>
    </div>
  </footer>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    h1 {
        font-family: "Sanchez", "Helvetica", serif;
        letter-spacing: 0.12rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        grid-gap: 1.4rem;
    }

    .footer {
        margin-top: auto;
        background: none;
    }
</style>
