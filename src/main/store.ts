import ElectronStore from 'electron-store'
import { Document } from '@shared/types/ipc'

interface StoreType {
  documents: Record<string, Document>
}

export const store = new ElectronStore<StoreType>({
  defaults: {
    documents: {},
  },
})

console.log(store.path)
