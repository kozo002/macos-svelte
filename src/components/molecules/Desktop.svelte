<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let backgroundImageUrl: string

  const dispatchMousemove = createEventDispatcher<{ mousemove: { x: number, y: number } }>()
  function handleMousemove(e: MouseEvent) {
    dispatchMousemove('mousemove', { x: e.clientX, y: e.clientY })
  }
</script>

<div
  class="m-desktop"
  style={`background-image: url(${backgroundImageUrl});`}
  on:mousemove={handleMousemove}
>
  <div class="m-desktop__head">
    <slot name="head" />
  </div>
  <div class="m-desktop__body">
    <slot />
  </div>
</div>

<style lang="scss">
  .m-desktop {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    &__head {
      flex-shrink: 0;
      height: 24px;
    }

    &__body {
      flex-grow: 1;
    }
  }
</style>
