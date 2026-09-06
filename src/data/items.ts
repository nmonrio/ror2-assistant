export type ItemTier =
  | "common"
  | "uncommon"
  | "legendary"
  | "boss"
  | "lunar"
  | "void"
  | "equipment";

export type DLC =
  | "base"
  | "sotv"
  | "sots"
  | "alloyed";

export interface Item {
  id: string;
  name: string;
  tier: ItemTier;
  dlc: DLC;
}

export const items: Item[] = [
  {
    id: "soldiers-syringe",
    name: "Soldier's Syringe",
    tier: "common",
    dlc: "base",
  },
  {
    id: "lens-makers-glasses",
    name: "Lens-Maker's Glasses",
    tier: "common",
    dlc: "base",
  },
  {
    id: "tougher-times",
    name: "Tougher Times",
    tier: "common",
    dlc: "base",
  },
  {
    id: "ukulele",
    name: "Ukulele",
    tier: "uncommon",
    dlc: "base",
  },
  {
    id: "atg-missile",
    name: "AtG Missile Mk. 1",
    tier: "uncommon",
    dlc: "base",
  },
  {
    id: "57-leaf-clover",
    name: "57 Leaf Clover",
    tier: "legendary",
    dlc: "base",
  },
];