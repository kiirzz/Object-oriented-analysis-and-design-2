package com.example.builder;

import com.example.builder.enums.CharacterType;
import com.example.builder.enums.WeaponType;

public class ArcherBuilder extends CharacterBuilder {

    @Override
    public Character build() {
        return new Character(CharacterType.ARCHER, name, health, mana, null);
    }

    @Override
    public CharacterBuilder setWeapon(WeaponType weapon) {
        return this;
    }
}
