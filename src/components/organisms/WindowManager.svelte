<script lang="ts">
  import type { MouseStore } from '~/stores/mouse'
  import type { WindowsStore } from '~/stores/windows'
  import type { Position, WindowT } from '~/types'

  import Window from '~/components/atoms/Window.svelte'

  export let mouseStore: MouseStore
  export let windowsStore: WindowsStore

  let mousePosition: Position = { x: 0, y: 0 }
  let grabbingWindow = false
  let grabbedPosition: Position | undefined = undefined
  let movingWindowPosition: Position | undefined = undefined
  let windows: WindowT[] = []
  let activeIndex: number = 0

  mouseStore.subscribePosition((value) => {
    mousePosition = value
    if (grabbingWindow) {
      movingWindowPosition = {
        x: mousePosition.x - grabbedPosition.x,
        y: mousePosition.y - grabbedPosition.y
      }
    }
  })

  windowsStore.subscribeWindows((value) => {
    windows = value
  })

  function handleWindowMousedown(e: CustomEvent<Position>, index: number) {
    grabbingWindow = true
    grabbedPosition = {
      x: e.detail.x - windows[index].position.x,
      y: e.detail.y - windows[index].position.y
    }
    movingWindowPosition = windows[index].position
    activeIndex = index
  }

  function handleWindowMouseup() {
    grabbingWindow = false
    if (activeIndex !== undefined) {
      windowsStore.updateWindow(activeIndex, {
        ...windows[activeIndex],
        position: movingWindowPosition
      })
    }
  }
</script>

{#each windows as win, i (i)}
  <Window
    on:mousedown={(e) => handleWindowMousedown(e, i)}
    on:mouseup={handleWindowMouseup}
    position={activeIndex === i ? movingWindowPosition : win.position}
    size={win.size}
    active={activeIndex === i}
  >
    window {i}
  </Window>
{/each}
