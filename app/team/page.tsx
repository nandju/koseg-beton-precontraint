"use client"

import TeamHero from "@/components/team-page/hero/team-hero"
import TeamMembers from "@/components/team-page/team/team-members"



export default function TeamPage() {
  return (
    <div className="relative">

      <TeamHero />
      <TeamMembers />

    </div>
  )
}
