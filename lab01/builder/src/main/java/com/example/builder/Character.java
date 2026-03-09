package com.example.builder;

import com.example.builder.enums.CharacterType;
import com.example.builder.enums.WeaponType;

import lombok.Getter;

@Getter
public class Character {
    private CharacterType type;
    private String name;
    private String health;
    private String mana;
    private WeaponType weapon;

    public Character(CharacterType type, String name, String health, String mana, WeaponType weapon) {
        this.type = type;
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.weapon = weapon;
    }
}
