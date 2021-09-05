const today = new Date()

const at = (hours: number): number => today.setHours(hours)

export const sampleAppointments = [
  { startsAt: at(9), customer: { firstName: 'Bob' } },
  { startsAt: at(10), customer: { firstName: 'John' } },
  { startsAt: at(11), customer: { firstName: 'Jane' } },
  { startsAt: at(12), customer: { firstName: 'Tom' } },
  { startsAt: at(13), customer: { firstName: 'Mike' } },
  { startsAt: at(14), customer: { firstName: 'James' } },
]
