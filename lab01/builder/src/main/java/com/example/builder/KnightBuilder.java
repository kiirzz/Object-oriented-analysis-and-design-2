package com.example.builder;

import com.example.builder.enums.CharacterType;

public class KnightBuilder extends CharacterBuilder {

    @Override
    public Character build() {
        return new Character(CharacterType.KNIGHT, name, health, mana, weapon);
    }
    
}
