using Builder1.Builders;
using Builder1.Dto;
using Builder1.Models;

namespace Builder1.Director;

public class CharacterDirector
{
    private ICharacterBuilder? _builder;

    public void SetBuilder(ICharacterBuilder builder) => _builder = builder;

    public Character Make(CharacterBuildRequest request)
    {
        if (_builder is null)
            throw new InvalidOperationException("Builder is not set");

        return _builder.Reset()
            .SetName(request.Name)
            .SetHealth(request.Health)
            .SetMana(request.Mana)
            .SetWeapon(request.Weapon)
            .Build();
    }
}
