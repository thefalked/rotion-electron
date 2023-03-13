import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { IPC } from '@shared/constants/ipc'
import {
  CreateDocumentResponse,
  DeleteDocumentRequest,
  FetchAllDocumentsResponse,
  FetchDocumentRequest,
  FetchDocumentResponse,
  SaveDocumentRequest,
} from '@shared/types/ipc'

declare global {
  export interface Window {
    api: typeof api
  }
}

// Custom APIs for renderer
const api = {
  fetchDocuments: async (): Promise<FetchAllDocumentsResponse> => {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH_ALL)
  },

  fetchDocument: async (
    req: FetchDocumentRequest,
  ): Promise<FetchDocumentResponse> => {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH, req)
  },

  createDocument: async (): Promise<CreateDocumentResponse> => {
    return ipcRenderer.invoke(IPC.DOCUMENTS.CREATE)
  },

  saveDocument: async (req: SaveDocumentRequest): Promise<void> => {
    ipcRenderer.invoke(IPC.DOCUMENTS.SAVE, req)
  },

  deleteDocument: async (req: DeleteDocumentRequest): Promise<void> => {
    ipcRenderer.invoke(IPC.DOCUMENTS.DELETE, req)
  },

  onNewDocumentRequest: (callback: () => void) => {
    ipcRenderer.on('new-document', callback)

    return () => {
      ipcRenderer.off('new-document', callback)
    }
  },
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
