import { BrowserWindow, Menu, nativeImage, Tray } from 'electron'
// @ts-ignore
import appIcon from '../../resources/rotionTemplate.png?asset'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(nativeImage.createFromPath(appIcon))

  const menu = Menu.buildFromTemplate([
    {
      label: 'Rotion',
      enabled: false,
    },
    {
      type: 'separator',
    },
    {
      label: 'Create new document',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Recent Documents',
      enabled: false,
    },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+2',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Rocketseat',
      accelerator: 'CommandOrControl+3',
      acceleratorWorksWhenHidden: false,
    },
    {
      type: 'separator',
    },
    {
      label: 'Quit Rotion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
}
