<script lang="ts">
  import type { MenuBarItem } from '~/types'
  import BarButton from '~/components/atoms/BarButton.svelte'
  import BarButtonGroup from '~/components/atoms/BarButtonGroup.svelte'

  export let menuBarItems: MenuBarItem[] = []

  let activeMenuBarItemIndex: number | undefined = undefined

  function handleBarButtonClick(i: number) {
    if (activeMenuBarItemIndex === i) {
      activeMenuBarItemIndex = undefined
    } else {
      activeMenuBarItemIndex = i
    }
  }

  function handleBarButtonMouseenter(i: number) {
    if (activeMenuBarItemIndex !== undefined) {
      activeMenuBarItemIndex = i
    }
  }

  function handleBodyClick() {
    activeMenuBarItemIndex = undefined
  }
</script>

<svelte:body on:click={handleBodyClick} />

<div class="o-menuBar">
  <BarButtonGroup>
    {#each menuBarItems as menuBarItem, i}
      <BarButton
        active={i === activeMenuBarItemIndex}
        bold={menuBarItem.bold}
        on:click={() => handleBarButtonClick(i)}
        on:mouseenter={() => handleBarButtonMouseenter(i)}
      >
        {menuBarItem.title}
      </BarButton>
    {/each}
  </BarButtonGroup>
</div>

<style lang="scss">
  .o-menuBar {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 6px;
    height: 24px;
    background-color: rgba(255, 255, 255, .3);
  }
</style>
