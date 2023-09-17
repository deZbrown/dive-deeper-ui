import React from 'react'
import { Button } from '@/components/ui/button'

const AppButton = ({ children, className, ...rest }) => (
    <Button
        variant="destructive"
        className={`
            float-right
            bg-black
            text-white
            hover:bg-gray-100
            hover:text-black
            dark:bg-gray-300
            dark:text-black
            dark:hover:bg-gray-400
            px-4 rounded
            mr-3
            ${className || ''}
        `}
        {...rest}>
        {children}
    </Button>
)

const EditAndDelete = ({ onEdit, onUpdate, onDelete, isEditing }) => {
    const buttons = [
        {
            label: isEditing ? 'Update' : 'Edit',
            additionalProps: {
                onClick: isEditing ? onUpdate : onEdit,
                className: '',
            },
        },
        {
            label: 'Delete',
            additionalProps: {
                onClick: onDelete,
                className: 'px-2',
            },
        },
    ]

    return (
        <div className="flex space-x-0">
            {buttons.map((button, index) => (
                <AppButton key={index} {...button.additionalProps}>
                    {button.label}
                </AppButton>
            ))}
        </div>
    )
}

export default EditAndDelete
