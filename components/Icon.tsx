import {
  Activity, Bone, CalendarCheck, ClipboardList, Dumbbell, Footprints, HeartHandshake,
  House, MapPin, Phone, ShieldCheck, Stethoscope, Users, type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  activity: Activity, bone: Bone, calendar: CalendarCheck, clipboard: ClipboardList,
  dumbbell: Dumbbell, footprints: Footprints, heart: HeartHandshake, home: House,
  map: MapPin, phone: Phone, shield: ShieldCheck, stethoscope: Stethoscope, users: Users,
};

export default function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? Stethoscope;
  return <Cmp aria-hidden="true" className={className} />;
}
