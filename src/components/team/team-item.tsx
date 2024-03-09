"use client"

import { Member } from "@/types/member"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TeamComboBox } from "./team-combobox"
import { useState } from "react"

type Props = {
    data: Member
}

export const TeamItem = ({ data }: Props) => {
    const [role, setRole] = useState(data.role)

    return (
        <div className=" flex gap-4 items-center">
            <div>
                <Avatar>
                    <AvatarImage src={data.avatar} />
                    <AvatarFallback>HF</AvatarFallback>
                </Avatar>
            </div>
            <div className=" flex-1">
                <div>{data.name}</div>
                <div className=" text-sm text-muted-foreground">{data.email}</div>
            </div>
            <div>
                <TeamComboBox
                    value={role}
                    setValue={setRole}
                />
            </div>
        </div>
    )
}