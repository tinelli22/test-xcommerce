const ActionsStoreTypes = {
    SET_MODAL: 'SET_MODAL',
    SET_SEARCH: 'SET_SEARCH'
} as const

type NamesActionsStoreTypes = typeof ActionsStoreTypes[keyof typeof ActionsStoreTypes];

export default NamesActionsStoreTypes