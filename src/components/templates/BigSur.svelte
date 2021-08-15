<script lang="ts">
  import Desktop from '~/components/atoms/Desktop.svelte'
  import MenuBar from '~/components/organisms/MenuBar.svelte'
  import type { MenuBarItem } from '~/types'

  const menuBarItems: MenuBarItem[] = [
    { title: 'Chrome', bold: true },
    { title: 'File' },
    { title: 'Edit' },
    { title: 'Section' },
    { title: 'View' },
    { title: 'Window' },
    { title: 'Help' },
  ]
</script>

<Desktop backgroundImageUrl="/images/big-sur/wallpaper-1.jpg">
  <MenuBar {menuBarItems} />
</Desktop>
