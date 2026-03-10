package com.example.builder.director;

import com.example.builder.builder.CharacterBuilder;
import com.example.builder.dto.CharacterBuildRequest;
import com.example.builder.model.Character;

public class CharacterDirector {
    public Character construct(CharacterBuilder builder, CharacterBuildRequest request) {

        return builder.reset()
                .setName(request.getName())
                .setHealth(request.getHealth())
                .setMana(request.getMana())
                .setWeapon(request.getWeapon())
                .build();
    }
}
