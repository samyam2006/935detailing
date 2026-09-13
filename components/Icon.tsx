import {
  Sparkles,
  ShieldCheck,
  Droplets,
  Car,
  Wrench,
  Gem,
  Sun,
  Wind,
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
} as const;

export type IconName = keyof typeof iconMap;

export default function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp {...props} />;
}
