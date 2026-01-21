import Link from "next/link"

import { initialTickets } from "@/data"

type TicketPageProps = {
  params: Promise<{ id: string }>
}

export default async function TicketPage({ params }: TicketPageProps) {
  const { id } = await params
  const ticket = initialTickets.find((ticket) => ticket.id === id)

  if (!ticket) {
    return <div>Ticket not found</div>
  }

  return (
    <div>
      <h2 className="text-xl">Ticket: {ticket?.title}</h2>
      <Link href="/tickets">Back to Tickets</Link>
    </div>
  )
}
