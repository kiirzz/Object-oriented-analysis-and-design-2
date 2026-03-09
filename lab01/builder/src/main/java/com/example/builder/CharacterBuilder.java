package com.example.builder;

import com.example.builder.enums.WeaponType;

public abstract class CharacterBuilder {
    protected String name;
    protected Integer health;
    protected Integer mana;
    protected WeaponType weapon;

    public CharacterBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public CharacterBuilder setHealth(Integer health) {
        this.health = health;
        return this;
    }

    public CharacterBuilder setMana(Integer mana) {
        this.mana = mana;
        return this;
    }

    public CharacterBuilder setWeapon(WeaponType weapon) {
        this.weapon = weapon;
        return this;
    }

    public abstract Character build();
}
