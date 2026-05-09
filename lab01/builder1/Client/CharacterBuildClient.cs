using Builder1.Director;
using Builder1.Dto;
using Builder1.Enums;
using Builder1.Models;

namespace Builder1.Client;

public class CharacterBuildClient
{
    private readonly CharacterDirector _director = new();

    public Character BuildCharacter(CharacterBuildRequest request)
    {
        var builder = request.Type.CreateBuilder();
        _director.SetBuilder(builder);
        return _director.Make(request);
    }
}
