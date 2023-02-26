import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', () => {
  return [
    {
      id: '1',
      title: 'test',
    },
  ]
})
