"use client"

import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole, ChannelType } from "@prisma/client"
import { ActionTootip } from "@/components/ui/action-tooltip";
import { Plus, Settings } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface ServerSectionProsp {
    label: string;
    role?: MemberRole;
    sectionType: "channels" | "members"
    channelType?: ChannelType;
    server?: ServerWithMembersWithProfiles;
}

export const ServerSection: React.FC<ServerSectionProsp> = ({
    label,
    role,
    sectionType,
    channelType,
    server
}) => {
    const { onOpen } = useModal();
    
    return (
        <div className="flex items-center justify-between py-2">
            <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
                {label}
            </p>
            {role !== MemberRole.GUEST && sectionType === "channels" && (
                <ActionTootip label="Create Channel" side="top">
                    <button
                        onClick={() => onOpen("createChannel", { channelType })}
                        className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                    >
                        <Plus className="h-4 w-4"/>
                    </button>
                </ActionTootip>
            )}
            {role === MemberRole.ADMIN && sectionType === "members" && (
                <ActionTootip label="Menage Members" side="top">
                    <button
                        onClick={() => onOpen("members", { server })}
                        className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
                    >
                        <Settings className="h-4 w-4"/>
                    </button>
                </ActionTootip>
            )}
        </div>
    )
}