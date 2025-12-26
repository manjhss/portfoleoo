import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { portfolioData } from "@/data/portfolio";
import { ModeToggle } from "../mode-toggle";

export function ProfileHeader() {
  const { name, username, bio, avatar } = portfolioData.profile;

  return (
    <div className="my-8">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12 rounded-full border-2 border-foreground">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-base font-normal">{name}</h1>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
        </div>

        <ModeToggle />
      </div>
      <p className="text-base">{bio}</p>
    </div>
  );
}
