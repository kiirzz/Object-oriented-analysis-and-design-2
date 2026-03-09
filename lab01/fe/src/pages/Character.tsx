import { characterData } from "../db/character.data";
import { CharacterContext } from "@/context/CharacterContext";
import { AnimatedCharacter } from "./AnimatedCharacter";
import {
  archerAva,
  knightAva,
  mageAva,
  weaponAxe,
  weaponKatana,
  weaponPoison,
  weaponStaff,
  weaponSword,
} from "@/common/constant";

export const Character = () => {
  const {
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
  } = CharacterContext();

  let resultTexture;
  let resultWeaponTexture;
  if (characterResult) {
    switch (characterResult.type) {
      case "KNIGHT":
        resultTexture = knightTextures;
        break;
      case "MAGE":
        resultTexture = mageTextures;
        break;
      case "ARCHER":
        resultTexture = archerTextures;
        break;
    }

    switch (characterResult.weapon) {
      case "SWORD":
        resultWeaponTexture = sword;
        break;
      case "AXE":
        resultWeaponTexture = axe;
        break;
      case "KATANA":
        resultWeaponTexture = katana;
        break;
      case "STAFF":
        resultWeaponTexture = staff;
        break;
      case "POISON":
        resultWeaponTexture = poison;
        break;
      default:
        resultWeaponTexture = bow;
    }
  }

  return (
    <div className="text-sm font-medium p-4">
      <div className="text-xl font-semibold mb-4">Character</div>

      <div className="flex gap-36">
        <div className="w-100">
          <div className="flex flex-col gap-3 mb-10">
            <div className="flex gap-3">
              {characterData.map((char) => {
                let imgSrc;
                switch (char.type) {
                  case "KNIGHT":
                    imgSrc = knightAva;
                    break;
                  case "MAGE":
                    imgSrc = mageAva;
                    break;
                  case "ARCHER":
                    imgSrc = archerAva;
                    break;
                }

                return (
                  <div
                    key={char.type}
                    onClick={() => handleCharacterTypeChange(char.type)}
                    className={`
                        w-20 h-26 flex flex-col justify-between items-center p-2 ring rounded hover:cursor-pointer
                        ${char.type === character.type ? "ring-[#f5a94c] ring-2" : "ring-black"} 
                    `}
                  >
                    <img src={imgSrc} alt={char.type} className="w-10 h-14" />
                    <span className="capitalize">{char.type}</span>
                  </div>
                );
              })}
            </div>

            <div className="">
              <div className="mb-1">Name</div>
              <input
                id="name"
                type="text"
                className="font-normal w-full font-sm p-1 border border-black rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <div className="mb-1">Health</div>
              <input
                id="health"
                type="number"
                className="font-normal w-full font-sm p-1 border border-black rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <div className="mb-1">Mana</div>
              <input
                id="mana"
                type="number"
                className="font-normal w-full font-sm p-1 border border-black rounded"
                onChange={handleInputChange}
              />
            </div>

            <div className="">
              {character.type !== "ARCHER" && (
                <div className="mb-1">Weapon</div>
              )}
              <div className="flex gap-3">
                {(
                  characterData.find((char) => char.type === character.type)
                    ?.weapon ?? []
                ).map((weapon) => {
                  let weaponImgSrc;
                  switch (weapon) {
                    case "SWORD":
                      weaponImgSrc = weaponSword;
                      break;
                    case "AXE":
                      weaponImgSrc = weaponAxe;
                      break;
                    case "KATANA":
                      weaponImgSrc = weaponKatana;
                      break;
                    case "STAFF":
                      weaponImgSrc = weaponStaff;
                      break;
                    case "POISON":
                      weaponImgSrc = weaponPoison;
                      break;
                  }

                  return (
                    <div
                      className={`
                            w-fit h-fit p-2 ring rounded hover:cursor-pointer
                            ${weapon === character.weapon ? "ring-[#f5a94c] ring-2" : "ring-black"} 
                        `}
                      onClick={() => handleWeaponChange(weapon)}
                    >
                      <img src={weaponImgSrc} alt="" className="h-8" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              className="bg-[#f5a94c] text-white py-1 px-2 rounded hover:cursor-pointer hover:bg-[#f5a94c]/80"
              onClick={buildCharacterWithBuilder}
            >
              Build with Builder
            </button>
            <button
              className="bg-black text-white py-1 px-2 rounded hover:cursor-pointer hover:bg-black/80"
              onClick={buildCharacterWithoutBuilder}
            >
              Build without Builder
            </button>
          </div>
        </div>

        {characterResult && (
          <div className="">
            <AnimatedCharacter
              textures={resultTexture ?? null}
              resultWeaponTexture={resultWeaponTexture ?? null}
              width={150}
              height={150}
              rotate={characterResult.weapon !== "POISON" && characterResult.weapon !== "STAFF" && characterResult.weapon !== null}
            />
          </div>
        )}
      </div>
    </div>
  );
};
