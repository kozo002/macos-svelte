<script lang="ts">
  import Desktop from '~/components/molecules/Desktop.svelte'
  import MenuBar from '~/components/organisms/MenuBar.svelte'
  import type { MenuBarItem } from '~/types'
  import Window from '~/components/atoms/Window.svelte'

  const menuBarItems: MenuBarItem[] = [
    { title: 'Chrome', bold: true, children: [
      { title: 'Child Item 1' },
      { title: 'Child Item 1' },
      { title: 'Child Item 1' }
    ] },
    { title: 'File', children: [
      { title: 'Child Item 1' },
      { title: 'Child Item 1' },
      { title: 'Child Item 1' }
    ] },
    { title: 'Edit', children: [
      { title: 'Child Item 1' },
      { title: 'Child Item 1' },
      { title: 'Child Item 1' }
    ] },
    { title: 'Section', children: [
      { title: 'Child Item 1' },
      { title: 'Child Item 1' },
      { title: 'Child Item 1' }
    ] },
    { title: 'View', children: [
      { title: 'Child Item 1' },
      { title: 'Child Item 1' },
      { title: 'Child Item 1' }
    ] },
    { title: 'Window', children: [
      { title: 'Child Item 1' },
      { title: 'Child Item 1' },
      { title: 'Child Item 1' }
    ] },
    { title: 'Help', children: [
      { title: 'Child Item 1' },
      { title: 'Child Item 1' },
      { title: 'Child Item 1' }
    ] },
  ]

  let grabbingWindow = false
  let grabbedPosition = { x: 0, y: 0 }
  let windowX = 100
  let windowY = 80

  function handleWindowMousedown(e) {
    grabbingWindow = true
    grabbedPosition.x = e.detail.x
    grabbedPosition.y = e.detail.y
  }

  function handleDesktopMousemove(e) {
    if (grabbingWindow) {
      windowX = e.detail.x - grabbedPosition.x,
      windowY = e.detail.y - grabbedPosition.y
      if (windowY <= 0) {
        windowY = 0
      }
    }
  }
</script>

<Desktop
  backgroundImageUrl="/images/big-sur/wallpaper-1.jpg"
  on:mousemove={handleDesktopMousemove}
>
  <svelte:fragment slot="head">
    <MenuBar {menuBarItems} />
  </svelte:fragment>

  <Window
    on:mousedown={handleWindowMousedown}
    on:mouseup={() => (grabbingWindow = false)}
    x={windowX}
    y={windowY}
  >test</Window>
</Desktop>
