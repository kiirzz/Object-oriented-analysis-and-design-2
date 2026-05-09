using Builder1.Enums;

namespace Builder1.Dto;

public class CharacterBuildRequest
{
    public CharacterType Type { get; set; }
    public string Name { get; set; } = string.Empty;
    public int? Health { get; set; }
    public int? Mana { get; set; }
    public WeaponType? Weapon { get; set; }
}
