import { archerAnim, knightAnim, mageAnim, weaponAxe, weaponBow, weaponKatana, weaponPoison, weaponStaff, weaponSword } from "@/common/constant";
import type { CharacterType } from "@/types/common.type";
import { Texture } from "pixi.js";
import { useMemo, useState } from "react";

export const CharacterContext = () => {
  const [character, setCharacter] = useState<CharacterType>({
    type: "KNIGHT",
    name: "",
    health: "0",
    mana: "0",
    weapon: null,
  });

  const [characterResult, setCharacterResult] = useState<CharacterType | null>(null);

  const knightTextures = useMemo(() => knightAnim.map(f => Texture.from(f)), []);
  const mageTextures = useMemo(() => mageAnim.map(f => Texture.from(f)), []);
  const archerTextures = useMemo(() => archerAnim.map(f => Texture.from(f)), []);

  const sword = useMemo(() => Texture.from(weaponSword), []);
  const axe = useMemo(() => Texture.from(weaponAxe), []);
  const katana = useMemo(() => Texture.from(weaponKatana), []);
  const staff = useMemo(() => Texture.from(weaponStaff), []);
  const poison = useMemo(() => Texture.from(weaponPoison), []);
  const bow = useMemo(() => Texture.from(weaponBow), []);

  const handleCharacterTypeChange = (type: CharacterType["type"]) => {
    setCharacter((prev) => ({
      ...prev,
      type: type,
    }));
  };

  const handleWeaponChange = (weapon: CharacterType["weapon"]) => {
    if (character.weapon === weapon) {
      weapon = null;
    }

    setCharacter((prev) => ({
      ...prev,
      weapon: weapon,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setCharacter((prev) => ({
      ...prev,
      [id]: String(value),
    }));
  };

  const buildCharacterWithBuilder = async () => {
    if (!character.name || !character.health || !character.mana) {
      alert("Please fill in all the fields");
      return;
    }

    if (character.type !== "ARCHER" && !character.weapon) {
      alert("Please select a weapon for Knight and Mage");
      return;
    }

    const res = await fetch("http://localhost:8080/character/with-builder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });

    const data = await res.json();

    setCharacterResult(data.response);
  };

  const buildCharacterWithoutBuilder = async () => {
    if (!character.name || !character.health || !character.mana) {
      alert("Please fill in all the fields");
      return;
    }

    if (character.type !== "ARCHER" && !character.weapon) {
      alert("Please select a weapon for Knight and Mage");
      return;
    }

    const res = await fetch("http://localhost:8080/character/no-builder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });

    const data = await res.json();

    setCharacterResult(data.response);
  };

  return {
    character,
    handleCharacterTypeChange,
    handleWeaponChange,
    handleInputChange,
    buildCharacterWithBuilder,
    buildCharacterWithoutBuilder,
    characterResult,
    knightTextures,
    mageTextures,
    archerTextures,
    sword,
    axe,
    katana,
    staff,
    poison,
    bow,
  };
};
