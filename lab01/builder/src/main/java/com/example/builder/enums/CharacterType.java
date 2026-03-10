package com.example.builder.enums;

import java.util.function.Supplier;

import com.example.builder.builder.ArcherBuilder;
import com.example.builder.builder.CharacterBuilder;
import com.example.builder.builder.KnightBuilder;
import com.example.builder.builder.MageBuilder;

public enum CharacterType {
    KNIGHT(KnightBuilder::new),
    MAGE(MageBuilder::new),
    ARCHER(ArcherBuilder::new);

    private final Supplier<CharacterBuilder> builder;

    CharacterType(Supplier<CharacterBuilder> builder) {
        this.builder = builder;
    }

    public CharacterBuilder createBuilder() {
        return builder.get();
    }
}
