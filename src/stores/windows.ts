import { writable } from 'svelte/store'
import type { WindowT } from '~/types'

export function createWindowsStore() {
  const windows = writable<WindowT[]>([
    {
      position: { x: 0, y: 0 },
      size: { width: 500, height: 250 }
    },
    {
      position: { x: 100, y: 100 },
      size: { width: 500, height: 250 }
    },
  ])

  const updateWindow = (index: number, value: WindowT) => {
    windows.update((values) => {
      return [
        ...values.slice(0, index),
        value,
        ...values.slice(index + 1)
      ]
    })
  }

  return {
    subscribeWindows: windows.subscribe,
    updateWindow
  }
}

export type WindowsStore = ReturnType<typeof createWindowsStore>
