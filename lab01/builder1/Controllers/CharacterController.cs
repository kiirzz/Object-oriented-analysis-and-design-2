using Builder1.Client;
using Builder1.Dto;
using Builder1.Enums;
using Builder1.Models;
using Microsoft.AspNetCore.Mvc;

namespace Builder1.Controllers;

[ApiController]
[Route("character")]
public class CharacterController : ControllerBase
{
    private readonly CharacterBuildClient _client = new();

    [HttpPost("with-builder")]
    public IActionResult CreateCharacterWithBuilder([FromBody] CharacterBuildRequest request)
    {
        Character character = _client.BuildCharacter(request);
        return Ok(new { response = character });
    }

    [HttpPost("no-builder")]
    public IActionResult CreateCharacterWithoutBuilder([FromBody] CharacterBuildRequest request)
    {
        Character character;

        if (request.Type == CharacterType.Archer)
        {
            character = new Character(request.Type, request.Name, request.Health, request.Mana, null);
        }
        else
        {
            character = new Character(request.Type, request.Name, request.Health, request.Mana, request.Weapon);
        }

        return Ok(new { response = character });
    }
}
