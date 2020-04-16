import { InventoryActionTypes, ADD_ITEM_TO_INVENTORY, REMOVE_ITEM_FROM_INVENTORY, Item } from './types';

export function removeItemFromInventory(id: number): InventoryActionTypes {
    return {
        type: REMOVE_ITEM_FROM_INVENTORY,
        payload: id
    }
}

export function AddItemToInventory(item: Item): InventoryActionTypes {
    return {
        type: ADD_ITEM_TO_INVENTORY,
        payload: item //we only accept item interface
    }
}