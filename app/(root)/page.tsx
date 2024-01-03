"use client"

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";


const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen)
    const isOpen = useStoreModal((state) => state.isOpen)

    console.log(isOpen);
    
    useEffect(() => {
        if (!isOpen) {
            onOpen()
        }
    }, [isOpen, onOpen])
    // route grouping
    return (
        <div className="p-4">
           Root man
        </div>
    )
} 

export default SetupPage;