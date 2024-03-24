import { ContactItemProps } from "@/types"

const ContactItem = ({ item }: ContactItemProps) => {
  const { icon, value } = item
  const Icon = icon
  return (
    <div className="flex flex-col justify-center lg:flex-row gap-x-4">
      <div className="text-sky-500 rounded-sm flex items-center justify-start mb-4 lg:mb-0 text-2xl">
        <Icon className="mx-auto" />
      </div>
      <div className="flex items-end">
        <h4 className="font-semibold text-lg">{value}</h4>
      </div>
    </div>
  )
}

export default ContactItem