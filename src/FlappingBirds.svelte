<script>
  const birdCount = 20

  function randomBirdConfig() {
    const { random, floor } = Math
    return `--bird-fly-duration: ${floor(random() * 15) + 10}s;
    --bird-animation-delay: -${(random() * 5) % 5}s;
    --bird-fly-timing: cubic-bezier(${random()}, ${random()}, ${random()}, ${random()});`
  }
</script>

<div class="flapping-birds">
  {#each Array(birdCount) as _, i }
    <div class="bird" style={randomBirdConfig()}></div>
  {/each}
</div>

<style>
    .flapping-birds {
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: -1;
        background: rgba(149, 205, 246, 0.4);
        background: linear-gradient(0deg, rgba(149, 205, 246, 0.1) 0%, rgba(179, 211, 234, 0.4) 15%);
    }

    .bird {
        background: url('./images/wren-2x.png');
        background-size: auto 100%;
        width: 50px;
        height: 50px;
        will-change: background-position;

        --bird-fly-duration: 18s;
        --bird-fly-timing: cubic-bezier(.52, .22, .52, .5);
        --bird-animation-delay: 0;

        animation: bird-flap 0.2s infinite steps(4),
        bird-fly-y var(--bird-fly-duration) infinite var(--bird-fly-timing),
        bird-fly-x 6s infinite linear;

        animation-delay: var(--bird-animation-delay);

        transform: scale(0.6) translateY(-20vh);
        transform-origin: top left;
        opacity: 0.15;

        position: relative;
        top: 10%;
        left: -10%;
    }

    @keyframes bird-flap {
        100% {
            background-position: -200px 0;
        }
    }

    @keyframes bird-fly-x {
        0% {
            left: 0;
        }
        100% {
            left: 100%;
        }
    }

    @keyframes bird-fly-y {
        0% {
            top: 10vh;
        }
        33% {
            top: 0;
        }
        66% {
            top: 20vh;
        }
    }
</style>
