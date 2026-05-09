using Builder1.Enums;
using Builder1.Models;

namespace Builder1.Builders;

public class KnightBuilder : ICharacterBuilder
{
    private string? _name;
    private int? _health;
    private int? _mana;
    private WeaponType? _weapon;

    public ICharacterBuilder Reset()
    {
        _name = null;
        _health = null;
        _mana = null;
        _weapon = null;
        return this;
    }

    public ICharacterBuilder SetName(string name) { _name = name; return this; }
    public ICharacterBuilder SetHealth(int? health) { _health = health; return this; }
    public ICharacterBuilder SetMana(int? mana) { _mana = mana; return this; }
    public ICharacterBuilder SetWeapon(WeaponType? weapon) { _weapon = weapon; return this; }

    public Character Build() => new(CharacterType.Knight, _name!, _health, _mana, _weapon);
}
