using Builder1.Builders;

namespace Builder1.Enums;

public enum CharacterType
{
    Knight,
    Mage,
    Archer,
}

public static class CharacterTypeExtensions
{
    public static ICharacterBuilder CreateBuilder(this CharacterType type) => type switch
    {
        CharacterType.Knight => new KnightBuilder(),
        CharacterType.Mage => new MageBuilder(),
        CharacterType.Archer => new ArcherBuilder(),
        _ => throw new ArgumentOutOfRangeException(nameof(type), type, null)
    };
}
