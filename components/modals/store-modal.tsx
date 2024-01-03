"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"


export const StoreModal = () => {
    const storeModal  = useStoreModal()
    return (
        <Modal 
        title="Create Team" 
        description="Add new Football Team"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}    
    >
        Create Team
    </Modal>
    )
}

