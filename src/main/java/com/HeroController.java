package com;

import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hero")
@ToString
public class HeroController {

    @Autowired
    private HeroService heroService;

    @GetMapping("/{cls}")
    public Hero getHero(@PathVariable String cls){
        switch (cls){
            case "ranger" : return heroService.getRanger();
            case "barbarian" : return heroService.getBarbarian();
            case "shieldmaster" : return heroService.getShieldmaster();
            case "juggernaut" : return heroService.getJuggernaut();
            case "priest" : return heroService.getPriest();
            case "mage" : return heroService.getMage();
        }
        return null;
    }
}
