export const CharacterTypeEnum = {
  KNIGHT: "KNIGHT",
  MAGE: "MAGE",
  ARCHER: "ARCHER",
} as const;

export const WeaponTypeEnum = {
  SWORD: "SWORD",
  AXE: "AXE",
  KATANA: "KATANA",
  STAFF: "STAFF",
  POISON: "POISON",
} as const;

export type CharacterTypeEnumType =
  typeof CharacterTypeEnum[keyof typeof CharacterTypeEnum];

export type WeaponTypeEnumType =
  typeof WeaponTypeEnum[keyof typeof WeaponTypeEnum];

export type CharacterType = {
  type: CharacterTypeEnumType;
  name: string;
  health: string;
  mana: string;
  weapon?: WeaponTypeEnumType | null;
};

export type CharacterDataType = {
  type: CharacterType["type"];
  weapon?: CharacterType["weapon"][];
};