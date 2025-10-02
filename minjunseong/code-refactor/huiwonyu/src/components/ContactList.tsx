import type { Contact } from "../types/card";
import ContactItem from "./ContactItem";

type ContactListProps = {
  items: Contact[];
};

const ContactList = ({ items }: ContactListProps) => (
  <div className="flex flex-col gap-1.5 ">
    {items.map((item) => (
      <ContactItem
        key={item.id}
        icon={item.icon}
        label={item.label}
        value={item.value}
      />
    ))}
  </div>
);

export default ContactList;
