package com;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Skill {
    private String name;
    private String imgLink;
    private String[] desc;
    private String[] cost;
    private String[] reload;
    private String[] duration;
    private String type;
}
