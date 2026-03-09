package com.example.builder;

import com.example.builder.enums.CharacterType;
import com.example.builder.enums.WeaponType;

public class ArcherBuilder extends CharacterBuilder {

    @Override
    public CharacterBuilder setWeapon(WeaponType weapon) {
        return this;
    }

    @Override
    public Character build() {
        return new Character(CharacterType.ARCHER, name, health, mana, null);
    }
}
