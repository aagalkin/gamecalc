package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class HeroService {

    private CachedHero cachedRanger = new CachedHero();
    private CachedHero cachedBarbarian = new CachedHero();
    private CachedHero cachedShieldmaster = new CachedHero();
    private CachedHero cachedJuggernaut = new CachedHero();
    private CachedHero cachedPriest = new CachedHero();
    private CachedHero cachedMage = new CachedHero();
    private final long ONE_HOUR = 60 * 60 * 1000;

    @Autowired
    private SkillList skillList;

    public Hero getRanger(){
        if (cachedRanger.getHero() != null && cachedRanger.getDate().getTime() + ONE_HOUR > new Date().getTime()){
            return cachedRanger.getHero();
        }
        Hero ranger = new Hero();

        ranger.setBaseSkill(getSkill(skillList.VENDETTA));

        ranger.setRightBase(getSkill(skillList.SPIRIT_ARROWS));
        ranger.setRight1(getSkill(skillList.EYE_BLOW));
        ranger.setRight2(getSkill(skillList.ACCURACY_AURA));
        ranger.setRight3(getSkill(skillList.TRIPLE_SHOT));
        ranger.setRight4(getSkill(skillList.ENEMY_KNOWLEDGE));
        ranger.setRight5(getSkill(skillList.GRACE));
        ranger.setRight6(getSkill(skillList.SHOCKING_ARROW));

        ranger.setLeftBase(getSkill(skillList.POISON_ARROWS));
        ranger.setLeft1(getSkill(skillList.NEUROTOXIN));
        ranger.setLeft2(getSkill(skillList.MASKING_AURA));
        ranger.setLeft3(getSkill(skillList.TOXICOLOGY));
        ranger.setLeft4(getSkill(skillList.CALCULATED_SHOT));
        ranger.setLeft5(getSkill(skillList.PARALYZING_POISON));
        ranger.setLeft6(getSkill(skillList.RICOCHET));

        cachedRanger.setHero(ranger);
        cachedRanger.setDate(new Date());
        return ranger;
    }

    public Hero getBarbarian(){
        if (cachedBarbarian.getHero() != null && cachedBarbarian.getDate().getTime() + ONE_HOUR > new Date().getTime()){
            return cachedBarbarian.getHero();
        }
        Hero barbarian = new Hero();

        barbarian.setBaseSkill(getSkill(skillList.ADRENALINE_RUSH));

        barbarian.setRightBase(getSkill(skillList.DISARMING));
        barbarian.setRight1(getSkill(skillList.WHIRLWIND));
        barbarian.setRight2(getSkill(skillList.BLOODRAGE_AURA));
        barbarian.setRight3(getSkill(skillList.HIGHLANDER_WILL));
        barbarian.setRight4(getSkill(skillList.RAGE));
        barbarian.setRight5(getSkill(skillList.ENERGY_VAMPIRIC));
        barbarian.setRight6(getSkill(skillList.AXE_RAGE));

        barbarian.setLeftBase(getSkill(skillList.CUTTING_BLOW));
        barbarian.setLeft1(getSkill(skillList.TEARING));
        barbarian.setLeft2(getSkill(skillList.PAIN_AURA));
        barbarian.setLeft3(getSkill(skillList.BONE_BREAK));
        barbarian.setLeft4(getSkill(skillList.LAST_WILL));
        barbarian.setLeft5(getSkill(skillList.HARPOON));
        barbarian.setLeft6(getSkill(skillList.COMBAT_STAND));

        cachedBarbarian.setHero(barbarian);
        cachedBarbarian.setDate(new Date());
        return barbarian;
    }

    public Hero getShieldmaster(){
        if (cachedShieldmaster.getHero() != null && cachedShieldmaster.getDate().getTime() + ONE_HOUR > new Date().getTime()){
            return cachedShieldmaster.getHero();
        }
        Hero shieldmaster = new Hero();

        shieldmaster.setBaseSkill(getSkill(skillList.BLADE_ARMOR));

        shieldmaster.setLeftBase(getSkill(skillList.MASTER_THROW));
        shieldmaster.setLeft1(getSkill(skillList.REVENGE));
        shieldmaster.setLeft2(getSkill(skillList.TREATMENT_AURA));
        shieldmaster.setLeft3(getSkill(skillList.WIDE_SHIELD));
        shieldmaster.setLeft4(getSkill(skillList.PARRY));
        shieldmaster.setLeft5(getSkill(skillList.THREAT));
        shieldmaster.setLeft6(getSkill(skillList.TAUNT));

        shieldmaster.setRightBase(getSkill(skillList.MAGIC_REFLECT));
        shieldmaster.setRight1(getSkill(skillList.DISCOURAGEMENT));
        shieldmaster.setRight2(getSkill(skillList.RUNE_STRIKE));
        shieldmaster.setRight3(getSkill(skillList.PREEMPTIVE_STRIKE));
        shieldmaster.setRight4(getSkill(skillList.RUNE_AURA));
        shieldmaster.setRight5(getSkill(skillList.PATRONAGE));
        shieldmaster.setRight6(getSkill(skillList.RUNE_WORD));

        cachedShieldmaster.setHero(shieldmaster);
        cachedShieldmaster.setDate(new Date());
        return shieldmaster;
    }

    public Hero getJuggernaut(){
        if (cachedJuggernaut.getHero() != null && cachedJuggernaut.getDate().getTime() + ONE_HOUR > new Date().getTime()){
            return cachedJuggernaut.getHero();
        }
        Hero juggernaut = new Hero();

        juggernaut.setBaseSkill(getSkill(skillList.DEFENCE_MASTERY));

        juggernaut.setLeftBase(getSkill(skillList.CRIPPLING_BLOW));
        juggernaut.setLeft1(getSkill(skillList.SPRINT));
        juggernaut.setLeft2(getSkill(skillList.DEFENCE_AURA));
        juggernaut.setLeft3(getSkill(skillList.COMBAT_RAGE));
        juggernaut.setLeft4(getSkill(skillList.FEAR_AURA));
        juggernaut.setLeft5(getSkill(skillList.SAFARI));
        juggernaut.setLeft6(getSkill(skillList.DAMAGE_ABSORPSION));

        juggernaut.setRightBase(getSkill(skillList.CRUSHING_BLOW));
        juggernaut.setRight1(getSkill(skillList.STORM));
        juggernaut.setRight2(getSkill(skillList.RELEASE));
        juggernaut.setRight3(getSkill(skillList.COUNTERATTACK));
        juggernaut.setRight4(getSkill(skillList.TRIUMPH));
        juggernaut.setRight5(getSkill(skillList.FORTIFIED_ARMOR));
        juggernaut.setRight6(getSkill(skillList.SACRIFICE));

        cachedJuggernaut.setHero(juggernaut);
        cachedJuggernaut.setDate(new Date());
        return juggernaut;
    }

    public Hero getPriest(){
        if (cachedPriest.getHero() != null && cachedPriest.getDate().getTime() + ONE_HOUR > new Date().getTime()){
            System.out.println("return cached hero");
            return cachedPriest.getHero();
        }
        Hero priest = new Hero();

        priest.setBaseSkill(getSkill(skillList.MAGICAL_VAMPIRIC));

        priest.setLeftBase(getSkill(skillList.PLAGUE));
        priest.setLeft1(getSkill(skillList.HYPNOSIS));
        priest.setLeft2(getSkill(skillList.COLLAPSE));
        priest.setLeft3(getSkill(skillList.WICKED_AURA));
        priest.setLeft4(getSkill(skillList.DECAY));
        priest.setLeft5(getSkill(skillList.RESCUE_AURA));
        priest.setLeft6(getSkill(skillList.REALITY_BENDING));

        priest.setRightBase(getSkill(skillList.RENEW));
        priest.setRight1(getSkill(skillList.ASTRAL_PRISON));
        priest.setRight2(getSkill(skillList.SACRAMENT));
        priest.setRight3(getSkill(skillList.SAINT_AURA));
        priest.setRight4(getSkill(skillList.PANACEA));
        priest.setRight5(getSkill(skillList.SILENT_GUARD));
        priest.setRight6(getSkill(skillList.ANTIMAGIC));

        cachedPriest.setHero(priest);
        cachedPriest.setDate(new Date());
        System.out.println("return non cached hero");
        return priest;
    }

    public Hero getMage(){
        if (cachedMage.getHero() != null && cachedMage.getDate().getTime() + ONE_HOUR > new Date().getTime()){
            return cachedMage.getHero();
        }
        Hero mage = new Hero();

        mage.setBaseSkill(getSkill(skillList.SECRET_ART));

        mage.setLeftBase(getSkill(skillList.PENETRATING_SPELL));
        mage.setLeft1(getSkill(skillList.MEDITATION));
        mage.setLeft2(getSkill(skillList.SUPERIORITY_AURA));
        mage.setLeft3(getSkill(skillList.DARK_MAGIC_MASTERY));
        mage.setLeft4(getSkill(skillList.CRITICAL_SPELL));
        mage.setLeft5(getSkill(skillList.PROPHECY));
        mage.setLeft6(getSkill(skillList.SUMMON_SHADOW));

        mage.setRightBase(getSkill(skillList.POWERED_SPELL));
        mage.setRight1(getSkill(skillList.MANA_CONNECTION));
        mage.setRight2(getSkill(skillList.BRAIN_STORM));
        mage.setRight3(getSkill(skillList.LIGHT_MAGIC_MASTERY));
        mage.setRight4(getSkill(skillList.METAMAGIC));
        mage.setRight5(getSkill(skillList.ILLUMINATION));
        mage.setRight6(getSkill(skillList.SUMMON_SPIRIT));

        cachedMage.setHero(mage);
        cachedMage.setDate(new Date());
        return mage;
    }


    public Skill getSkill(Integer skillId){
        Skill skill = new Skill();
        skill.setCost(new String[5]);
        skill.setDesc(new String[5]);
        skill.setDuration(new String[5]);
        skill.setReload(new String[5]);

        try {
            URL url = new URL("https://nura.biz/beginner/skills/skill/" + skillId);
            HttpURLConnection connection = ((HttpURLConnection) url.openConnection());

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            Pattern pattern = Pattern.compile("<div class=\"skill\">.+<footer>");
            Matcher matcher = pattern.matcher(content.toString());
            while(matcher.find()){
                String result = matcher.group();

                Pattern imgPattern = Pattern.compile("icon\\d+\\.jpg");
                Matcher imgMatcher = imgPattern.matcher(result);
                while(imgMatcher.find()){
                    skill.setImgLink("https://files.nura.biz/site/images/assets/icons/skills/" + imgMatcher.group());
                }

                Pattern namePattern = Pattern.compile("<h2>.+</h2>");
                Matcher nameMatcher = namePattern.matcher(result);
                while(nameMatcher.find()){
                    skill.setName(nameMatcher.group().substring(5).replaceAll("</h2>",""));
                }

                Pattern costPattern = Pattern.compile("ic7.png.+?&");
                Matcher costMatcher = costPattern.matcher(result);
                int costLvl = 1;
                while(costMatcher.find()){
                    String cost[] = costMatcher.group().replaceAll("&","").trim().split(" ");
                    skill.getCost()[costLvl - 1] = cost[cost.length-1];
                    costLvl++;
                }

                Pattern reloadPattern = Pattern.compile("ic10.png.+?&");
                Matcher reloadMatcher = reloadPattern.matcher(result);
                int reloadLvl = 1;
                while(reloadMatcher.find()){
                    String reload[] = reloadMatcher.group().replaceAll("&","").trim().split(" ");
                    skill.getReload()[reloadLvl - 1] = reload[reload.length - 1];
                    reloadLvl++;
                }

                Pattern durationPattern = Pattern.compile("ic9.png.+?&");
                Matcher durationMatcher = durationPattern.matcher(result);
                int durationLvl = 1;
                while(durationMatcher.find()){
                    String duration[] = durationMatcher.group().replaceAll("&","").trim().split(" ");
                    for (int i = 0; i < duration.length; i++) {
                        if (duration[i].equals("боя")) {
                            duration[i] = "До конца боя";
                        }
                    }
                    skill.getDuration()[durationLvl - 1] = duration[duration.length - 1];
                    durationLvl++;
                }

                Pattern descPattern = Pattern.compile("<div class=\"masterydesc\">.+?</div>");
                Matcher descMatcher = descPattern.matcher(result);
                int descLvl = 1;
                while(descMatcher.find()){
                    String desc = descMatcher.group().replaceAll("<div class=\"masterydesc\">", "").replaceAll("</div>","");
                    skill.getDesc()[descLvl - 1] = desc;
                    descLvl++;
                }

                Pattern typePattern = Pattern.compile("<div class=\"passiveability\">.+?</div>");
                Matcher typeMatcher = typePattern.matcher(result);
                while(typeMatcher.find()){
                    skill.setType("Пассивное умение");
                }

                Pattern typePattern1 = Pattern.compile("<div class=\"activeability\">.+?</div>");
                Matcher typeMatcher1 = typePattern1.matcher(result);
                while(typeMatcher1.find()){
                    String type = typeMatcher1.group().replaceAll("<div class=\"activeability\">", "").replaceAll("</div>", "");
                    skill.setType(type);
                }
            }

            in.close();
            connection.disconnect();
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }

        return skill;
    }
}
