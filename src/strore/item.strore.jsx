import { createContext, useReducer } from "react";
export const ItemsStore = createContext({
  tolist: [],
  deleteItem: () => { },
  deleteItemList: [],
  editDataOnparent: () => { },
  inputHandler: () => { },
  editedData: () => { }
})

const initialState = {
  item: [],
  deleteItem: [],
  editedData: '',
  handleIndex: undefined
}
function reducerFun(state, action) {
  if (action.type === 'ADD ITEM') {
    if (state.handleIndex == undefined) {
      return { ...state, item: [...state.item, { name: action.payload.itemName }] }
    }
    else {

      let updateData = state.item.map((item, loppIndex) => {

        if (loppIndex === state.handleIndex) {
          return { name: action.payload.itemName }
        }
        return item
      })
      console.log(updateData);
      return { ...state, item: [...updateData], handleIndex: undefined }
    }
  }
  else if (action.type === 'DELETE ITEM') {
    console.log(action.payload.e);
    let result = state.item.filter((item, loopId) => action.payload.e != loopId)
    let deletedList = state.item.filter((item, loopId) => action.payload.e == loopId)
    return { ...state, deleteItem: [...state.deleteItem, ...deletedList], item: [...result] }
  }
  else if (action.type === 'EDIT ITEM') {
    return { ...state, editedData: action.payload.editItemData, handleIndex: action.payload.editIndex }
  }

}


const ToDoItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialState)
  const inputHandler = (itemName) => {
    const additemObj = {
      type: 'ADD ITEM',
      payload: {
        itemName
      }
    }
    dispatch(additemObj)

  }

  const deleteItemClick = (e) => {
    const deleteObj = {
      type: 'DELETE ITEM',
      payload: {
        e
      }
    }
    dispatch(deleteObj)
  }

  const editDataOnparent = (editItemData, editIndex) => {
    const additemObj = {
      type: 'EDIT ITEM',
      editedDataIndex: editIndex,
      payload: {
        editItemData,
        editIndex
      }

    }
    dispatch(additemObj)
  }
  return (
    <ItemsStore.Provider value=
      {{
        tolist: state.item,
        inputHandler: inputHandler,
        deleteItem: deleteItemClick,
        deleteItemList: state.deleteItem,
        editDataOnparent: editDataOnparent,
        editedData: state.editedData
      }}>

      {children}
    </ItemsStore.Provider>
  )
}
export default ToDoItemProvider; 