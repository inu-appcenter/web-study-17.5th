import type { Contact, LogoInfo } from "../types/card";
import ContactList from "./ContactList";
import LogoBlock from "./LogoBlock";

type BusinessCardProps = {
  logo: LogoInfo;
  position: string;
  name: string;
  address: string;
  contacts: Contact[];
};

const BusinessCard = ({
  logo,
  position,
  name,
  address,
  contacts,
}: BusinessCardProps) => (
  <section className="flex h-full w-full flex-col gap-3 rounded-lg border border-neutral-300 bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
    <LogoBlock title={logo.title} subtitle={logo.subtitle} />
    <div className="text-sm text-neutral-600">{position}</div>
    <div className="text-2xl font-bold text-neutral-900">{name}</div>
    <p className="m-0 text-sm text-neutral-700">{address}</p>
    <ContactList items={contacts} />
  </section>
);

export default BusinessCard;
