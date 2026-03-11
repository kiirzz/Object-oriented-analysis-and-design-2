package com.example.builder.client;

import com.example.builder.builder.CharacterBuilder;
import com.example.builder.director.CharacterDirector;
import com.example.builder.dto.CharacterBuildRequest;
import com.example.builder.model.Character;

public class CharacterBuildClient {
    private final CharacterDirector director;
    private CharacterBuilder builder;

    public CharacterBuildClient() {
        this.director = new CharacterDirector();
    }

    public Character buildCharacter(CharacterBuildRequest request) {

        this.builder = request.getType().createBuilder();

        director.setBuilder(builder);

        return director.make(request);
    }
}
