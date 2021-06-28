<script>
  export let repository
</script>

<div class="card">
  <div class="card-content">
    <a href="{repository.url}" target="_blank"><strong>{repository.nameWithOwner}</strong></a>
    <p class="card-description pt-1">{repository.description}</p>
    <div class="card-information pt-1">
      {#if repository.stargazerCount}
        <small><i class="fas fa-star"></i> {repository.stargazerCount}</small>
      {/if}
      {#if repository.forkCount}
        <small><i class="fa fa-code-branch"></i> {repository.forkCount}</small>
      {/if}
    </div>
  </div>
</div>

<style>
    .card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .card-information {
        margin-top: auto;
        text-align: right;
    }

    .card-information small + small {
        margin-left: 1rem;
    }
</style>
