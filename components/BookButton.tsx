import { CalendarCheck } from "lucide-react";
import TrackedLink from "./TrackedLink";

type Props = { location: string; label?: string; className?: string };

export default function BookButton({ location, label = "Book a Home Visit", className = "btn btn-primary" }: Props) {
  return (
    <TrackedLink href="/book-home-visit" event="book_home_visit_click" location={location} className={className}>
      <CalendarCheck aria-hidden="true" className="h-5 w-5" />
      {label}
    </TrackedLink>
  );
}
