import Link from "next/link"

export default function BookAppointment() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold tracking-tighter">Book an Appointment</h1>
      </div>
      <div className="grid gap-4">
        <Link
          className="flex items-center justify-between w-full p-4 rounded-lg border border-gray-200 bg-white shadow-sm gap-4"
          href="#"
        >
          <div className="space-y-1.5">
            <h2 className="text-base font-semibold tracking-wider text-gray-900">New Appointment</h2>
            <p className="text-sm font-normal text-gray-500">Book a new appointment</p>
          </div>
          <CalendarCheckIcon className="w-6 h-6" />
        </Link>
        <Link
          className="flex items-center justify-between w-full p-4 rounded-lg border border-gray-200 bg-white shadow-sm gap-4"
          href="#"
        >
          <div className="space-y-1.5">
            <h2 className="text-base font-semibold tracking-wider text-gray-900">Edit Appointment</h2>
            <p className="text-sm font-normal text-gray-500">Edit an existing appointment</p>
          </div>
          <PencilIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
  )
}

function CalendarCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}


function PencilIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}
