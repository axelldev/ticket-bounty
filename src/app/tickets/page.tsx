import Link from "next/link"

import { initialTickets } from "@/data"

export default function Tickets() {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-xl">{ticket.title}</h2>
          <Link href={`/tickets/${ticket.id}`}>View Ticket</Link>
        </div>
      ))}
    </div>
  )
}
