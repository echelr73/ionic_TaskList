export enum alertType {
    Success = 'Completado!',
    Error = 'Error!',
    Delete = 'Eliminar?'
};

export enum alertMessage {
    Success = 'El item se agrego correctamente',
    Error = 'El item ya existe',
    Delete = 'Quieres borrar este item?'
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