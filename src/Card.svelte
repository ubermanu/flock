<script>
  export let repository

  /**
   * Returns TRUE if the repo has been updated the last month
   * @param updatedAt
   * @return {boolean}
   */
  function isRecentlyUpdated(updatedAt) {
    const now = new Date()
    const updated = new Date(updatedAt)
    const diff = now.getTime() - updated.getTime()
    return diff <= (3600 * 24 * 30) * 1000
  }
</script>

<div class="card">
  <div class="card-content">
    <a href="{repository.url}" target="_blank"><strong>{repository.nameWithOwner}</strong></a>
    <p class="card-description pt-1">{repository.description}</p>
    <div class="card-information pt-1">
      {#if isRecentlyUpdated(repository.updatedAt)}
        <small class="has-text-success mr-auto" title="Updated the last 30 days">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </small>
      {/if}
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
        display: flex;
        margin-top: auto;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .card-information small + small {
        margin-left: 1rem;
    }
</style>
