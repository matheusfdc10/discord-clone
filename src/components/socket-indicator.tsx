"use client"

import { useSocket } from "@/components/providers/socket-provider"
import { Badge } from "@/components/ui/badge"

export const SocketIndicator = () => {
    const { isConnected } = useSocket()

    if (!isConnected) {
        return (
            <Badge 
                variant="outline" 
                className="bg-yellow-600 text-white border-none"
            >
                Fallback<span className="hidden sm:block">: Palling avery 1s</span>
            </Badge>
        )
    }

    return (
        <Badge 
            variant="outline" 
            className="bg-emerald-600 text-white border-none"
        >
            Live<span className="hidden sm:block">: Real-time updates</span>
        </Badge>
    )
}