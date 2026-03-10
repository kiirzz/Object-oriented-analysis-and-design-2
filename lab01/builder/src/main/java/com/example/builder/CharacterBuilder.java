package com.example.builder;

import com.example.builder.enums.WeaponType;

public interface CharacterBuilder {

    CharacterBuilder reset();

    CharacterBuilder setName(String name);

    CharacterBuilder setHealth(Integer health);

    CharacterBuilder setMana(Integer mana);

    CharacterBuilder setWeapon(WeaponType weapon);

    Character build();
}
