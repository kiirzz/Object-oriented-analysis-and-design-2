package com.example.builder.director;

import com.example.builder.builder.CharacterBuilder;
import com.example.builder.dto.CharacterBuildRequest;
import com.example.builder.model.Character;

public class CharacterDirector {
    private CharacterBuilder builder;

    public void setBuilder(CharacterBuilder builder) {
        this.builder = builder;
    }

    public Character make(CharacterBuildRequest request) {

        if (builder == null) {
            throw new IllegalStateException("Builder is not set");
        }

        return builder.reset()
                .setName(request.getName())
                .setHealth(request.getHealth())
                .setMana(request.getMana())
                .setWeapon(request.getWeapon())
                .build();
    }
}
