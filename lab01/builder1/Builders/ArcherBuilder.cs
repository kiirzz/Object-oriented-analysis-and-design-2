using Builder1.Enums;
using Builder1.Models;

namespace Builder1.Builders;

public class ArcherBuilder : ICharacterBuilder
{
    private string? _name;
    private int? _health;
    private int? _mana;

    public ICharacterBuilder Reset()
    {
        _name = null;
        _health = null;
        _mana = null;
        return this;
    }

    public ICharacterBuilder SetName(string name) { _name = name; return this; }
    public ICharacterBuilder SetHealth(int? health) { _health = health; return this; }
    public ICharacterBuilder SetMana(int? mana) { _mana = mana; return this; }
    public ICharacterBuilder SetWeapon(WeaponType? weapon) => this; // Archer does not use weapons

    public Character Build() => new(CharacterType.Archer, _name!, _health, _mana, null);
}
