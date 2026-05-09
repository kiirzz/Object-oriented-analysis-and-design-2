using Builder1.Enums;
using Builder1.Models;

namespace Builder1.Builders;

public interface ICharacterBuilder
{
    ICharacterBuilder Reset();
    ICharacterBuilder SetName(string name);
    ICharacterBuilder SetHealth(int? health);
    ICharacterBuilder SetMana(int? mana);
    ICharacterBuilder SetWeapon(WeaponType? weapon);
    Character Build();
}
