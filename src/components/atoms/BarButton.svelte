<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let active: boolean = false
  export let bold: boolean = false

  const dispatchClick = createEventDispatcher<{ click: undefined }>()
  function handleClick() {
    dispatchClick('click')
  }

  const dispatchMouseenter = createEventDispatcher<{ mouseenter: undefined }>()
  function handleMouseenter() {
    dispatchMouseenter('mouseenter')
  }
</script>

<button
  class="a-barButton"
  class:active={active}
  class:bold={bold}
  on:click|stopPropagation={handleClick}
  on:mouseenter={handleMouseenter}
>
  <slot />
</button>

<style lang="scss">
  .a-barButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0 12px;
    background-color: transparent;
    border: 0;
    border-radius: 3px;
    font-size: 13px;

    &:active {
      background-color: transparent;
    }

    &.active {
      background-color: rgba(0, 0, 0, .1)
    }

    &.bold {
      font-weight: bold;
    }
  }
</style>
