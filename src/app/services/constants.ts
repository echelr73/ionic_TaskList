export enum alertType {
    Success = 'Success!',
    Error = 'Error!',
    Delete = 'Delete?'
};

export enum alertMessage {
    Success = 'Item added successfully',
    Error = 'Item already exists',
    Delete = 'Do you want to delete this item?'
};

export const alertButtons = {
    Ok: ['OK'],
    Delete: ['Delete', 'Cancel']
};
export type AlertButtonType = keyof typeof alertButtons;

export const itemList = {
    name: '',
    checked: false
};
export type ItemListType = typeof itemList;