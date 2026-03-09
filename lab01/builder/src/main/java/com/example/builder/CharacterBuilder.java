package com.example.builder;

import com.example.builder.enums.WeaponType;

public abstract class CharacterBuilder {
    protected String name;
    protected String health;
    protected String mana;
    protected WeaponType weapon;

    public CharacterBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public CharacterBuilder setHealth(String health) {
        this.health = health;
        return this;
    }

    public CharacterBuilder setMana(String mana) {
        this.mana = mana;
        return this;
    }

    public CharacterBuilder setWeapon(WeaponType weapon) {
        this.weapon = weapon;
        return this;
    }

    public abstract Character build();
}
