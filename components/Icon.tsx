import {
  Sparkles,
  ShieldCheck,
  Droplets,
  Car,
  Wrench,
  Gem,
  Sun,
  Wind,
  Truck,
  Camera,
  Crown,
  SprayCan,
  Gift,
  Users,
  Cake,
  Calendar,
  Repeat,
  BadgeCheck,
  Star,
  MapPin,
  Clock,
  Leaf,
  type LucideProps,
} from "lucide-react";

export const iconMap = {
  Sparkles,
  ShieldCheck,
  Droplets,
  Car,
  Wrench,
  Gem,
  Sun,
  Wind,
  Truck,
  Camera,
  Crown,
  SprayCan,
  Gift,
  Users,
  Cake,
  Calendar,
  Repeat,
  BadgeCheck,
  Star,
  MapPin,
  Clock,
  Leaf,
} as const;

export type IconName = keyof typeof iconMap;

export default function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp {...props} />;
}
