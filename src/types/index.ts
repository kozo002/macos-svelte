export type MenuBarItem = {
  title: string
  bold?: boolean
  children?: MenuBarItem[]
}

export type Position = {
  x: number
  y: number
}

export type Size = {
  width: number
  height: number
}

export type WindowT = {
  position: Position
  size: Size
}
