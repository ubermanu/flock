<script>
  import repositories from './sources.json'

  console.log(repositories)
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
  <div class="container">
    <div class="grid">
      {#each repositories as repo}
        <div class="card">
          <div class="card-content">
            {repo.name}
          </div>
        </div>
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
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }

    .footer {
        margin-top: auto;
    }
</style>
