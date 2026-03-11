package com.example.builder.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.builder.client.CharacterBuildClient;
import com.example.builder.dto.CharacterBuildRequest;
import com.example.builder.enums.CharacterType;
import com.example.builder.model.Character;

@RestController
@RequestMapping("/character")
public class CharacterController {

    private final CharacterBuildClient characterBuildClient = new CharacterBuildClient();

    @PostMapping("/with-builder")
    public Map<String, Object> createCharacterWithBuilder(@RequestBody CharacterBuildRequest request) {

        Character character = characterBuildClient.buildCharacter(request);

        return Map.of("response", character);
    }

    @PostMapping("/no-builder")
    public Map<String, Object> createCharacterWithoutBuilder(@RequestBody CharacterBuildRequest request) {
        Character character;

        if (request.getType() == CharacterType.ARCHER) {
            character = new Character(
                    request.getType(),
                    request.getName(),
                    request.getHealth(),
                    request.getMana(),
                    null
            );
        } else {
            character = new Character(
                    request.getType(),
                    request.getName(),
                    request.getHealth(),
                    request.getMana(),
                    request.getWeapon()
            );
        }

        return Map.of("response", character);
    }
}
