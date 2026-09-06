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
  image: string;
}

export const items: Item[] = [
  {
    id: "soldiers-syringe",
    name: "Soldier's Syringe",
    tier: "common",
    dlc: "base",
    image: "/items/soldiers-syringe.png",
  },
  {
    id: "lens-makers-glasses",
    name: "Lens-Maker's Glasses",
    tier: "common",
    dlc: "base",
    image: "/items/lens-maker-glasses.png",
  },
  {
    id: "tougher-times",
    name: "Tougher Times",
    tier: "common",
    dlc: "base",
    image: "/items/tougher-times.png",
  },
  {
    id: "ukulele",
    name: "Ukulele",
    tier: "uncommon",
    dlc: "base",
    image: "/items/ukulele.png",
  },
  {
    id: "atg-missile",
    name: "AtG Missile Mk. 1",
    tier: "uncommon",
    dlc: "base",
    image: "/items/atg-missile-mk1.png",
  },
  {
    id: "57-leaf-clover",
    name: "57 Leaf Clover",
    tier: "legendary",
    dlc: "base",
    image: "/items/57-leaf-clover.png",
  },
];