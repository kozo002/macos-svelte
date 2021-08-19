<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Position, Size } from '~/types'

  export let position: Position = { x: 0, y: 0 }
  export let size: Size = { width: 500, height: 250 }
  export let active: boolean = false

  const dispatchMousedown = createEventDispatcher<{ mousedown: { x: number, y: number } }>()
  function handleMousedown(e: MouseEvent) {
    dispatchMousedown('mousedown', {
      x: e.clientX,
      y: e.clientY,
    })
  }

  const dispatchMouseup = createEventDispatcher<{ mouseup: undefined }>()
  function handleMouseup() {
    dispatchMouseup('mouseup')
  }
</script>

<div
  class="a-window"
  class:active={active}
  style="
    --pos-x: {position.x}px;
    --pos-y: {position.y}px;
    --size-width: {size.width}px;
    --size-height: {size.height}px;
  "
  on:mousedown={handleMousedown}
  on:mouseup={handleMouseup}
>
  <slot />
</div>

<style lang="scss">
  .a-window {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 250px;
    min-height: 200px;
    transform: translate(var(--pos-x), var(--pos-y));
    width: var(--size-width);
    height: var(--size-height);
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(4px);
    border-radius: 14px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .05);

    &.active {
      z-index: 50;
      box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
    }
  }
</style>
