<script lang="ts">
  import type { MenuBarItem } from '~/types'
  import BarButton from '~/components/atoms/BarButton.svelte'
  import BarButtonGroup from '~/components/atoms/BarButtonGroup.svelte'
  import DropdownContainer from '~/components/atoms/DropdownContainer.svelte'
  import DropdownItem from '~/components/atoms/DropdownItem.svelte'
  import DropdownDivider from '~/components/atoms/DropdownDivider.svelte'

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
      <div class="o-menuBar__item">
        <BarButton
          active={i === activeMenuBarItemIndex}
          bold={menuBarItem.bold}
          on:click={() => handleBarButtonClick(i)}
          on:mouseenter={() => handleBarButtonMouseenter(i)}
        >
          {menuBarItem.title}
        </BarButton>
        {#if i === activeMenuBarItemIndex && menuBarItem.children !== undefined}
          <DropdownContainer>
            {#each menuBarItem.children as child, i (i)}
              <DropdownItem>{child.title}</DropdownItem>
            {/each}
          </DropdownContainer>
        {/if}
      </div>
    {/each}
  </BarButtonGroup>
</div>

<style lang="scss">
  .o-menuBar {
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    height: 100%;
    background-color: rgba(255, 255, 255, .3);
    user-select: none;

    &__item {
      position: relative;
      display: flex;
      align-items: stretch;
    }
  }
</style>
