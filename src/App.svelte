<script>
  import data from './sources.json'
  import Card from './Card.svelte'
</script>

<main>
  <div class="container"></div>
  <div class="container p-6">
    <h1 class="title is-3">Flock</h1>
    <p class="subtitle is-6">A package repository for Wren</p>
    <div class="form">
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="Find a package...">
        </div>
        <div class="control">
          <button class="button is-info">Search</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container is-fluid p-6">
    <div class="grid">
      {#each data as repository}
        <Card {repository} />
      {/each}
    </div>
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
      </p>
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
