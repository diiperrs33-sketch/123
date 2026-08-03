import {
  Snowflake,
  SunMedium,
  Wrench,
  ShieldCheck,
  Zap,
  Thermometer,
  Wind,
  Cpu,
  Leaf,
  Headphones,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type Brand = { name: string };

export const services: Service[] = [
  {
    title: 'Climatização',
    description:
      'Instalação e manutenção de sistemas de ar-condicionado residenciais e comerciais.',
    image:
      'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Snowflake,
  },
  {
    title: 'Energia Solar',
    description:
      'Projetos fotovoltaicos completos para reduzir sua conta de energia com sustentabilidade.',
    image:
      'https://images.pexels.com/photos/6961122/pexels-photo-6961122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: SunMedium,
  },
  {
    title: 'Manutenção Elétrica',
    description:
      'Diagnóstico e reparos elétricos seguros com técnicos certificados e garantia de serviço.',
    image:
      'https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Zap,
  },
  {
    title: 'Automação Inteligente',
    description:
      'Soluções de automação residencial e predial integradas para conforto e eficiência.',
    image:
      'https://images.pexels.com/photos/32737485/pexels-photo-32737485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Cpu,
  },
];

export const brands: Brand[] = [
  { name: 'Daikin' },
  { name: 'LG' },
  { name: 'Mitsubishi' },
  { name: 'Samsung' },
  { name: 'Carrier' },
  { name: 'Gree' },
  { name: 'Philips' },
];

export const differentials: { text: string }[] = [
  { text: 'Atendimento rápido em até 24 horas' },
  { text: 'Profissionais qualificados e certificados' },
  { text: 'Garantia estendida em todos os serviços' },
  { text: 'Orçamento sem compromisso e transparente' },
];

export const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: '+7', label: 'Anos de experiência', icon: Award },
  { value: '+250', label: 'Clientes atendidos', icon: CheckCircle2 },
  { value: '100%', label: 'Satisfação garantida', icon: Star },
];

export const heroIcons = {
  Snowflake,
  Thermometer,
  Wind,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Star,
  CheckCircle2,
};
