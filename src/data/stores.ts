export interface Store {
  id: string;
  name: string;
  category: string;
  description: string;
  website?: string;
}

export const STORES: Store[] = [
  {
    id: "kawali-house",
    name: "Kawali House",
    category: "food",
    description: "Flavour-packed meals that bring the heat and the heart.",
    website: "https://kawalihouse.co.za/"
  },
  {
    id: "romans-pizza",
    name: "Romans Pizza",
    category: "food",
    description: "A familiar favourite for the perfect slice every time.",
    website: "https://romanspizza.co.za/"
  },
  {
    id: "boba-tea-cafe",
    name: "Boba Tea Cafe",
    category: "cafe",
    description: "Trendy drinks, popping boba, refreshing milkshakes.",
    website: "https://www.bobateacafe.co.za/"
  },
  {
    id: "rosso-padel",
    name: "Rosso Padel",
    category: "activities",
    description: "Dynamic padel courts for social and competitive play.",
    website: "https://rossopadel.co.za/"
  }
];
