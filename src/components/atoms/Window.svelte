<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let x = 0
  export let y = 0
  let width = 500
  let height = 250

  const dispatchMousedown = createEventDispatcher<{ mousedown: { x: number, y: number } }>()
  function handleMousedown(e: MouseEvent) {
    dispatchMousedown('mousedown', {
      x: e.clientX - x,
      y: e.clientY - y
    })
  }

  const dispatchMouseup = createEventDispatcher<{ mouseup: undefined }>()
  function handleMouseup() {
    dispatchMouseup('mouseup')
  }
</script>

<div
  class="a-window"
  style="
    --pos-x: {x}px;
    --pos-y: {y}px;
    --size-width: {width}px;
    --size-height: {height}px;
  "
  on:mousedown={handleMousedown}
  on:mouseup={handleMouseup}
>
  <slot />
</div>

<style lang="scss">
  .a-window {
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
    box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
  }
</style>
