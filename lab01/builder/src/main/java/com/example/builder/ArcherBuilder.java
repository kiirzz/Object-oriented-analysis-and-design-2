package com.example.builder;

import com.example.builder.enums.CharacterType;
import com.example.builder.enums.WeaponType;

public class ArcherBuilder implements CharacterBuilder {

    private String name;
    private Integer health;
    private Integer mana;

    @Override
    public CharacterBuilder reset() {
        name = null;
        health = null;
        mana = null;
        return this;
    }

    @Override
    public CharacterBuilder setName(String name) {
        this.name = name;
        return this;
    }

    @Override
    public CharacterBuilder setHealth(Integer health) {
        this.health = health;
        return this;
    }

    @Override
    public CharacterBuilder setMana(Integer mana) {
        this.mana = mana;
        return this;
    }

    @Override
    public CharacterBuilder setWeapon(WeaponType weapon) {
        return this;
    }

    @Override
    public Character build() {
        return new Character(CharacterType.ARCHER, name, health, mana, null);
    }
}
