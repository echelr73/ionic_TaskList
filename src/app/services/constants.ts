export const alertType = {
    success: { es: 'Completado!', en: 'Completed!' },
    error: { es: 'Error!', en: 'Error!' },
    delete: { es: 'Eliminar', en: 'Delete' }
};

export const alertMessage = {
    success: { es: 'El item se agregó correctamente', en: 'Item added successfully' },
    error: { es: 'El item ya existe', en: 'Item already exists' },
    delete: { es: '¿Quieres borrar este item?', en: 'Do you want to delete this item?' }
};

export const alertButtonsText = {
    deleteButton: { es: 'Borrar', en: 'Delete' },
    cancelButton: { es: 'Cancelar', en: 'Cancel' }
}

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