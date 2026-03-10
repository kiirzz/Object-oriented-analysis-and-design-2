package com.example.builder.builder;

import com.example.builder.enums.WeaponType;
import com.example.builder.model.Character;

public interface CharacterBuilder {

    CharacterBuilder reset();

    CharacterBuilder setName(String name);

    CharacterBuilder setHealth(Integer health);

    CharacterBuilder setMana(Integer mana);

    CharacterBuilder setWeapon(WeaponType weapon);

    Character build();
}
