package com.example.builder;

import com.example.builder.enums.CharacterType;

public class MageBuilder extends CharacterBuilder {
    @Override
    public Character build() {
        return new Character(CharacterType.MAGE, name, health, mana, weapon);
    }
}
