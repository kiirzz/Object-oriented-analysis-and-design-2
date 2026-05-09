using Builder1.Enums;

namespace Builder1.Models;

public class Character
{
    public CharacterType Type { get; }
    public string Name { get; }
    public int? Health { get; }
    public int? Mana { get; }
    public WeaponType? Weapon { get; }

    public Character(CharacterType type, string name, int? health, int? mana, WeaponType? weapon)
    {
        Type = type;
        Name = name;
        Health = health;
        Mana = mana;
        Weapon = weapon;
    }
}
