<script lang="ts">
  import Desktop from '~/components/atoms/Desktop.svelte'
  import MenuBar from '~/components/organisms/MenuBar.svelte'
  import type { MenuBarItem } from '~/types'

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
</script>

<Desktop backgroundImageUrl="/images/big-sur/wallpaper-1.jpg">
  <MenuBar {menuBarItems} />
</Desktop>
