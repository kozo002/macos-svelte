import { writable } from 'svelte/store'
import type { Position } from '~/types'

export function createMouseStore() {
  const position = writable<Position>({ x: 0, y: 0 })

  const setPosition = (value: Position) => {
    position.set(value)
  }

  return {
    subscribePosition: position.subscribe,
    setPosition
  }
}

export type MouseStore = ReturnType<typeof createMouseStore>
