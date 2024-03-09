import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TeamItem } from "./team-item"
import { Members } from "@/data/members"


export const TeamArea = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>Invite your team members to collaborate.</CardDescription>
                </CardHeader>
                <CardContent className=" flex flex-col gap-5">
                    {Members.map(item => (
                        <TeamItem key={item.id} data={item} />
                    ))}

                </CardContent>
            </Card>
        </div>
    )
}