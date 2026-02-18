export enum Gender {
  FEMALE = 'Feminino',
  MALE = 'Masculino'
}

export enum ServiceCategory {
  ESSENTIAL = 'Técnicas Essenciais',
  SPECIALIZED = 'Técnicas Especializadas',
  ENERGY = 'Terapias Energéticas'
}

export interface Price {
  [Gender.FEMALE]: number;
  [Gender.MALE]?: number; // Optional for some services
  single?: number; // For unisex single price items
}

export interface ServiceItem {
  id: string;
  name: string;
  description?: string; // Short description if needed
  category: ServiceCategory;
  price: Price;
}

export interface ProtocolItem {
  id: string;
  name: string;
  composition: string;
  price: number;
  benefit: string;
}

export interface PackageTier {
  sessions: number;
  originalPrice: number;
  discountedPrice: number;
}

export interface PackageDeal {
  id: string;
  name: string;
  category: ServiceCategory;
  gender: Gender;
  tiers: PackageTier[];
}