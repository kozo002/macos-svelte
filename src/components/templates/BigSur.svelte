<script lang="ts">
  import Desktop from '~/components/molecules/Desktop.svelte'
  import MenuBar from '~/components/organisms/MenuBar.svelte'
  import type { MenuBarItem } from '~/types'
  import WindowManager from '~/components/organisms/WindowManager.svelte'

  import { createMouseStore } from '~/stores/mouse'
  import { createWindowsStore } from '~/stores/windows'

  const mouseStore = createMouseStore()
  const windowsStore = createWindowsStore()

  const menuBarItems: MenuBarItem[] = [
    { title: 'Finder', bold: true, children: [
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

  function handleDesktopMousemove(e) {
    const { x, y } = e.detail
    mouseStore.setPosition({ x, y })
  }
</script>

<Desktop
  backgroundImageUrl="/images/big-sur/wallpaper-1.jpg"
  on:mousemove={handleDesktopMousemove}
>
  <svelte:fragment slot="head">
    <MenuBar {menuBarItems} />
  </svelte:fragment>

  <WindowManager {mouseStore} {windowsStore} />
</Desktop>
