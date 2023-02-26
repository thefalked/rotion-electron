import ElectronStore from 'electron-store'

interface StoreType {
  documents: Record<string, any>
}

export const store = new ElectronStore<StoreType>({
  defaults: {
    documents: {},
  },
})

console.log(store.path)
