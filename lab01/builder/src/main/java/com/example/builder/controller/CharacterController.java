package com.example.builder.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.builder.ArcherBuilder;
import com.example.builder.Character;
import com.example.builder.KnightBuilder;
import com.example.builder.MageBuilder;
import com.example.builder.dto.CharacterBuildRequest;
import com.example.builder.enums.CharacterType;


@RestController
@RequestMapping("/character")
public class CharacterController {

    @PostMapping("/with-builder")
    public Map<String, Object> createCharacterWithBuilder(@RequestBody CharacterBuildRequest request) {
        Character character;

        switch (request.getType()) {
            case KNIGHT:
                character = new KnightBuilder()
                        .setName(request.getName())
                        .setHealth(request.getHealth())
                        .setMana(request.getMana())
                        .setWeapon(request.getWeapon())
                        .build();
                break;
            case MAGE:
                character = new MageBuilder()
                        .setName(request.getName())
                        .setHealth(request.getHealth())
                        .setMana(request.getMana())
                        .setWeapon(request.getWeapon())
                        .build();
                break;
            case ARCHER:
                character = new ArcherBuilder()
                        .setName(request.getName())
                        .setHealth(request.getHealth())
                        .setMana(request.getMana())
                        .build();
                break;
            default:
                throw new IllegalArgumentException("Invalid character type");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("response", character);
        return response;
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

        Map<String, Object> response = new HashMap<>();
        response.put("response", character);
        return response;
    }
}
