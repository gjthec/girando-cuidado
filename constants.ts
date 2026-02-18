import { Gender, PackageDeal, ProtocolItem, ServiceCategory, ServiceItem } from "./types";

export const WHATSAPP_NUMBER = "555484444320"; 
export const INSTAGRAM_HANDLE = "_gistachowski";

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Protocolos', href: '#protocolos' },
  { label: 'Pacotes', href: '#pacotes' },
];

export const SERVICES: ServiceItem[] = [
  // Essenciais
  {
    id: 'massagem-terapeutica',
    name: 'Massagem Terapêutica',
    category: ServiceCategory.ESSENTIAL,
    price: { [Gender.FEMALE]: 130, [Gender.MALE]: 150 }
  },
  {
    id: 'massagem-relaxante',
    name: 'Massagem Relaxante',
    category: ServiceCategory.ESSENTIAL,
    price: { [Gender.FEMALE]: 130, [Gender.MALE]: 150 }
  },
  {
    id: 'reflexologia',
    name: 'Reflexologia dos Pés',
    category: ServiceCategory.ESSENTIAL,
    price: { [Gender.FEMALE]: 130, [Gender.MALE]: 150 }
  },
  {
    id: 'liberacao-miofascial',
    name: 'Liberação Miofascial',
    category: ServiceCategory.ESSENTIAL,
    price: { [Gender.FEMALE]: 130, [Gender.MALE]: 150 }
  },
  // Especializadas
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Linfática',
    category: ServiceCategory.SPECIALIZED,
    price: { [Gender.FEMALE]: 150, [Gender.MALE]: 170 }
  },
  {
    id: 'ventosaterapia',
    name: 'Ventosaterapia',
    category: ServiceCategory.SPECIALIZED,
    price: { [Gender.FEMALE]: 150, [Gender.MALE]: 170 }
  },
  {
    id: 'pedras-quentes',
    name: 'Massagem com Pedras Quentes',
    category: ServiceCategory.SPECIALIZED,
    price: { [Gender.FEMALE]: 150, [Gender.MALE]: 170 }
  },
  // Energéticas
  {
    id: 'chakras-reiki',
    name: 'Alinhamento de Chakras + Reiki',
    category: ServiceCategory.ENERGY,
    price: { [Gender.FEMALE]: 150, single: 150 } // Assuming single price for simplicity unless specified
  },
  {
    id: 'escalda-pes',
    name: 'Escalda Pés Terapêutico',
    category: ServiceCategory.ENERGY,
    price: { [Gender.FEMALE]: 150, single: 150 }
  }
];

export const PROTOCOLS: ProtocolItem[] = [
  {
    id: 'protocolo-relaxamento',
    name: 'Protocolo Relaxamento Profundo',
    composition: 'Relaxante + Escalda pés',
    price: 180,
    benefit: 'Imersão total em tranquilidade.'
  },
  {
    id: 'protocolo-detox',
    name: 'Protocolo Detox Corporal',
    composition: 'Drenagem + Ventosaterapia',
    price: 190,
    benefit: 'Limpeza e leveza para o organismo.'
  },
  {
    id: 'protocolo-alivio',
    name: 'Protocolo Alívio de Dor',
    composition: 'Terapêutica + Liberação miofascial',
    price: 180,
    benefit: 'Fim das tensões e dores crônicas.'
  }
];

// Data pre-calculated based on the prompt requirements
export const PACKAGES: PackageDeal[] = [
  {
    id: 'essencial-fem',
    name: 'Pacote Essencial',
    category: ServiceCategory.ESSENTIAL,
    gender: Gender.FEMALE,
    tiers: [
      { sessions: 3, originalPrice: 390, discountedPrice: 360 },
      { sessions: 5, originalPrice: 650, discountedPrice: 600 },
      { sessions: 7, originalPrice: 910, discountedPrice: 805 },
      { sessions: 10, originalPrice: 1300, discountedPrice: 1150 },
    ]
  },
  {
    id: 'essencial-masc',
    name: 'Pacote Essencial',
    category: ServiceCategory.ESSENTIAL,
    gender: Gender.MALE,
    tiers: [
      { sessions: 3, originalPrice: 450, discountedPrice: 420 },
      { sessions: 5, originalPrice: 750, discountedPrice: 700 },
      { sessions: 7, originalPrice: 1050, discountedPrice: 945 },
      { sessions: 10, originalPrice: 1500, discountedPrice: 1350 },
    ]
  },
  {
    id: 'especial-fem',
    name: 'Pacote Especializado',
    category: ServiceCategory.SPECIALIZED,
    gender: Gender.FEMALE,
    tiers: [
      { sessions: 3, originalPrice: 450, discountedPrice: 420 },
      { sessions: 5, originalPrice: 750, discountedPrice: 690 },
      { sessions: 10, originalPrice: 1500, discountedPrice: 1350 },
    ]
  },
  {
    id: 'especial-masc',
    name: 'Pacote Especializado',
    category: ServiceCategory.SPECIALIZED,
    gender: Gender.MALE,
    tiers: [
      { sessions: 3, originalPrice: 510, discountedPrice: 480 },
      { sessions: 5, originalPrice: 850, discountedPrice: 790 },
      { sessions: 10, originalPrice: 1700, discountedPrice: 1520 },
    ]
  }
];