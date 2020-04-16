import {
  InventoryState,
  InventoryActionTypes,
  ADD_ITEM_TO_INVENTORY,
  REMOVE_ITEM_FROM_INVENTORY
} from './types'

//setup a default or "initial" state for our app
const initialState: InventoryState = {
  items: [
    {
      id: 1,
      name: 'socks'
    },
    {
      id: 2,
      name: 'Pants'
    },
    {
      id: 3,
      name: 'shirts'
    }
  ]
}

//Now we are going to setup reducer / functionality
export function inventoryReducer (
  state = initialState,
  action: InventoryActionTypes
) {
  switch (action.type) {
    case REMOVE_ITEM_FROM_INVENTORY:
      return {
        ...state,
        //filter through,and return array without mathcing ID.
        items: state.items.filter(item => item.id !== action.payload)
      }
    case ADD_ITEM_TO_INVENTORY:
      return {
        ...state,
        //add one new item into the end of our array !!
        items: [...state.items, action.payload]
      }
    default:
      return state
  }
}
