package com.example.builder.dto;

import com.example.builder.enums.CharacterType;
import com.example.builder.enums.WeaponType;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CharacterBuildRequest {
    
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private CharacterType type;

    private String name;
    private String health;
    private String mana;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private WeaponType weapon;
}
