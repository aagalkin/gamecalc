package com;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CachedHero {
    private Hero hero;
    private Date date;
}
