type ContactItemProps = {
  icon?: string;
  label: string;
  value: string;
};

const ContactItem = ({ icon, label, value }: ContactItemProps) => (
  <div className="flex items-center gap-2 text-sm text-neutral-700">
    {icon ? (
      <img src={icon} alt={label} className="h-4 w-4" />
    ) : null}
    <span>{value}</span>
  </div>
);

export default ContactItem;
