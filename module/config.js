// Namespace GURPS Configuration Values
export const GURPS = {};

// ASCII Artwork
GURPS.ASCII = `   ________  ______  ____  _____
  / ____/ / / / __ \/ __ \/ ___/
 / / __/ / / / /_/ / /_/ /\__ \
/ /_/ / /_/ / _, _/ ____/___/ /
\____/\____/_/ |_/_/    /____/
`;


/**
 * GURPS Primary Attributes
 * @type {Object}
 */
GURPS.pAttributes = {
  "ST": "GURPS.PrimaryAttributeST",
  "DX": "GURPS.PrimaryAttributeDX",
  "IQ": "GURPS.PrimaryAttributeIQ",
  "HT": "GURPS.PrimaryAttributeHT"
};

/**
 * GURPS Secondary Attributes
 * @type {Object}
 */
GURPS.sAttributes = {
  "HP": "GURPS.SecondaryAttributeHP",
  "Will": "GURPS.SecondaryAttributeWill",
  "Per": "GURPS.SecondaryAttributePer",
  "FP": "GURPS.SecondaryAttributeFP",
  "BS": "GURPS.SecondaryAttributeBS",
  "BM": "GURPS.SecondaryAttributeBM",
  "BL": "GURPS.SecondaryAttributeBL",
  "Thrust": "GURPS.SecondaryAttributeThrust",
  "Swing": "GURPS.SecondaryAttributeSwing"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
GURPS.alignments = {
  'lg': "GURPS.AlignmentLG",
  'ng': "GURPS.AlignmentNG",
  'cg': "GURPS.AlignmentCG",
  'ln': "GURPS.AlignmentLN",
  'tn': "GURPS.AlignmentTN",
  'cn': "GURPS.AlignmentCN",
  'le': "GURPS.AlignmentLE",
  'ne': "GURPS.AlignmentNE",
  'ce': "GURPS.AlignmentCE"
};


GURPS.weaponProficiencies = {
  "sim": "GURPS.WeaponSimpleProficiency",
  "mar": "GURPS.WeaponMartialProficiency"
};

GURPS.toolProficiencies = {
  "art": "GURPS.ToolArtisans",
  "disg": "GURPS.ToolDisguiseKit",
  "forg": "GURPS.ToolForgeryKit",
  "game": "GURPS.ToolGamingSet",
  "herb": "GURPS.ToolHerbalismKit",
  "music": "GURPS.ToolMusicalInstrument",
  "navg": "GURPS.ToolNavigators",
  "pois": "GURPS.ToolPoisonersKit",
  "thief": "GURPS.ToolThieves",
  "vehicle": "GURPS.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in D&D5e
 * @type {Object}
 */
GURPS.timePeriods = {
  "inst": "GURPS.TimeInst",
  "turn": "GURPS.TimeTurn",
  "round": "GURPS.TimeRound",
  "minute": "GURPS.TimeMinute",
  "hour": "GURPS.TimeHour",
  "day": "GURPS.TimeDay",
  "month": "GURPS.TimeMonth",
  "year": "GURPS.TimeYear",
  "perm": "GURPS.TimePerm",
  "spec": "GURPS.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
GURPS.abilityActivationTypes = {
  "none": "GURPS.None",
  "action": "GURPS.Action",
  "bonus": "GURPS.BonusAction",
  "reaction": "GURPS.Reaction",
  "minute": GURPS.timePeriods.minute,
  "hour": GURPS.timePeriods.hour,
  "day": GURPS.timePeriods.day,
  "special": GURPS.timePeriods.spec,
  "legendary": "GURPS.LegAct",
  "lair": "GURPS.LairAct"
};

/* -------------------------------------------- */

// Creature Sizes
GURPS.actorSizes = {
  "tiny": "GURPS.SizeTiny",
  "sm": "GURPS.SizeSmall",
  "med": "GURPS.SizeMedium",
  "lg": "GURPS.SizeLarge",
  "huge": "GURPS.SizeHuge",
  "grg": "GURPS.SizeGargantuan"
};

GURPS.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
GURPS.itemActionTypes = {
  "mwak": "GURPS.ActionMWAK",
  "rwak": "GURPS.ActionRWAK",
  "msak": "GURPS.ActionMSAK",
  "rsak": "GURPS.ActionRSAK",
  "save": "GURPS.ActionSave",
  "heal": "GURPS.ActionHeal",
  "abil": "GURPS.ActionAbil",
  "util": "GURPS.ActionUtil",
  "other": "GURPS.ActionOther"
};

/* -------------------------------------------- */

GURPS.itemCapacityTypes = {
  "items": "GURPS.ItemContainerCapacityItems",
  "weight": "GURPS.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
GURPS.limitedUsePeriods = {
  "sr": "GURPS.ShortRest",
  "lr": "GURPS.LongRest",
  "day": "GURPS.Day",
  "charges": "GURPS.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
GURPS.equipmentTypes = {
  "light": "GURPS.EquipmentLight",
  "medium": "GURPS.EquipmentMedium",
  "heavy": "GURPS.EquipmentHeavy",
  "bonus": "GURPS.EquipmentBonus",
  "natural": "GURPS.EquipmentNatural",
  "shield": "GURPS.EquipmentShield",
  "clothing": "GURPS.EquipmentClothing",
  "trinket": "GURPS.EquipmentTrinket"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
GURPS.armorProficiencies = {
  "lgt": GURPS.equipmentTypes.light,
  "med": GURPS.equipmentTypes.medium,
  "hvy": GURPS.equipmentTypes.heavy,
  "shl": "GURPS.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
GURPS.consumableTypes = {
  "potion": "GURPS.ConsumablePotion",
  "poison": "GURPS.ConsumablePoison",
  "food": "GURPS.ConsumableFood",
  "scroll": "GURPS.ConsumableScroll",
  "wand": "GURPS.ConsumableWand",
  "rod": "GURPS.ConsumableRod",
  "trinket": "GURPS.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
GURPS.currencies = {
  "pp": "GURPS.CurrencyPP",
  "gp": "GURPS.CurrencyGP",
  "ep": "GURPS.CurrencyEP",
  "sp": "GURPS.CurrencySP",
  "cp": "GURPS.CurrencyCP",
};

/* -------------------------------------------- */


// Damage Types
GURPS.damageTypes = {
  "acid": "GURPS.DamageAcid",
  "bludgeoning": "GURPS.DamageBludgeoning",
  "cold": "GURPS.DamageCold",
  "fire": "GURPS.DamageFire",
  "force": "GURPS.DamageForce",
  "lightning": "GURPS.DamageLightning",
  "necrotic": "GURPS.DamageNecrotic",
  "piercing": "GURPS.DamagePiercing",
  "poison": "GURPS.DamagePoison",
  "psychic": "GURPS.DamagePsychic",
  "radiant": "GURPS.DamageRadiant",
  "slashing": "GURPS.DamageSlashing",
  "thunder": "GURPS.DamageThunder"
};

/* -------------------------------------------- */

GURPS.distanceUnits = {
  "none": "GURPS.None",
  "self": "GURPS.DistSelf",
  "touch": "GURPS.DistTouch",
  "ft": "GURPS.DistFt",
  "mi": "GURPS.DistMi",
  "spec": "GURPS.Special",
  "any": "GURPS.DistAny"
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in D&D5e
 * @type {Object}
 */
GURPS.targetTypes = {
  "none": "GURPS.None",
  "self": "GURPS.TargetSelf",
  "creature": "GURPS.TargetCreature",
  "ally": "GURPS.TargetAlly",
  "enemy": "GURPS.TargetEnemy",
  "object": "GURPS.TargetObject",
  "space": "GURPS.TargetSpace",
  "radius": "GURPS.TargetRadius",
  "sphere": "GURPS.TargetSphere",
  "cylinder": "GURPS.TargetCylinder",
  "cone": "GURPS.TargetCone",
  "square": "GURPS.TargetSquare",
  "cube": "GURPS.TargetCube",
  "line": "GURPS.TargetLine",
  "wall": "GURPS.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are GURPS target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
GURPS.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
GURPS.healingTypes = {
  "healing": "GURPS.Healing",
  "temphp": "GURPS.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes in the D&D5E system
 * @type {Array.<string>}
 */
GURPS.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
GURPS.senses = {
  "bs": "GURPS.SenseBS",
  "dv": "GURPS.SenseDV",
  "ts": "GURPS.SenseTS",
  "tr": "GURPS.SenseTR"
};


/* -------------------------------------------- */

/**
 * The set of skill which can be trained in D&D5e
 * @type {Object}
 */
GURPS.skills = {
  "acr": "GURPS.SkillAcr",
  "ani": "GURPS.SkillAni",
  "arc": "GURPS.SkillArc",
  "ath": "GURPS.SkillAth",
  "dec": "GURPS.SkillDec",
  "his": "GURPS.SkillHis",
  "ins": "GURPS.SkillIns",
  "itm": "GURPS.SkillItm",
  "inv": "GURPS.SkillInv",
  "med": "GURPS.SkillMed",
  "nat": "GURPS.SkillNat",
  "prc": "GURPS.SkillPrc",
  "prf": "GURPS.SkillPrf",
  "per": "GURPS.SkillPer",
  "rel": "GURPS.SkillRel",
  "slt": "GURPS.SkillSlt",
  "ste": "GURPS.SkillSte",
  "sur": "GURPS.SkillSur"
};


/* -------------------------------------------- */

GURPS.spellPreparationModes = {
  "always": "GURPS.SpellPrepAlways",
  "prepared": "GURPS.SpellPrepPrepared",
  "innate": "GURPS.SpellPrepInnate",
  "pact": "GURPS.SpellPrepPact"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
GURPS.spellScalingModes = {
  "none": "GURPS.SpellNone",
  "cantrip": "GURPS.SpellCantrip",
  "level": "GURPS.SpellLevel"
};


/* -------------------------------------------- */

// Weapon Types
GURPS.weaponTypes = {
  "simpleM": "GURPS.WeaponSimpleM",
  "simpleR": "GURPS.WeaponSimpleR",
  "martialM": "GURPS.WeaponMartialM",
  "martialR": "GURPS.WeaponMartialR",
  "natural": "GURPS.WeaponNatural",
  "improv": "GURPS.WeaponImprov",
  "ammo": "GURPS.WeaponAmmo"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
GURPS.weaponProperties = {
  "amm": "GURPS.WeaponPropertiesAmm",
  "hvy": "GURPS.WeaponPropertiesHvy",
  "fin": "GURPS.WeaponPropertiesFin",
  "fir": "GURPS.WeaponPropertiesFir",
  "foc": "GURPS.WeaponPropertiesFoc",
  "lgt": "GURPS.WeaponPropertiesLgt",
  "lod": "GURPS.WeaponPropertiesLod",
  "rch": "GURPS.WeaponPropertiesRch",
  "rel": "GURPS.WeaponPropertiesRel",
  "ret": "GURPS.WeaponPropertiesRet",
  "spc": "GURPS.WeaponPropertiesSpc",
  "thr": "GURPS.WeaponPropertiesThr",
  "two": "GURPS.WeaponPropertiesTwo",
  "ver": "GURPS.WeaponPropertiesVer"
};


// Spell Components
GURPS.spellComponents = {
  "V": "GURPS.ComponentVerbal",
  "S": "GURPS.ComponentSomatic",
  "M": "GURPS.ComponentMaterial"
};

// Spell Schools
GURPS.spellSchools = {
  "abj": "GURPS.SchoolAbj",
  "con": "GURPS.SchoolCon",
  "div": "GURPS.SchoolDiv",
  "enc": "GURPS.SchoolEnc",
  "evo": "GURPS.SchoolEvo",
  "ill": "GURPS.SchoolIll",
  "nec": "GURPS.SchoolNec",
  "trs": "GURPS.SchoolTrs"
};

// Spell Levels
GURPS.spellLevels = {
  0: "GURPS.SpellLevel0",
  1: "GURPS.SpellLevel1",
  2: "GURPS.SpellLevel2",
  3: "GURPS.SpellLevel3",
  4: "GURPS.SpellLevel4",
  5: "GURPS.SpellLevel5",
  6: "GURPS.SpellLevel6",
  7: "GURPS.SpellLevel7",
  8: "GURPS.SpellLevel8",
  9: "GURPS.SpellLevel9"
};

/* -------------------------------------------- */

// Polymorph options.
GURPS.polymorphSettings = {
  keepPhysical: 'GURPS.PolymorphKeepPhysical',
  keepMental: 'GURPS.PolymorphKeepMental',
  keepSaves: 'GURPS.PolymorphKeepSaves',
  keepSkills: 'GURPS.PolymorphKeepSkills',
  mergeSaves: 'GURPS.PolymorphMergeSaves',
  mergeSkills: 'GURPS.PolymorphMergeSkills',
  keepClass: 'GURPS.PolymorphKeepClass',
  keepFeats: 'GURPS.PolymorphKeepFeats',
  keepSpells: 'GURPS.PolymorphKeepSpells',
  keepItems: 'GURPS.PolymorphKeepItems',
  keepBio: 'GURPS.PolymorphKeepBio',
  keepVision: 'GURPS.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
GURPS.proficiencyLevels = {
  0: "GURPS.NotProficient",
  1: "GURPS.Proficient",
  0.5: "GURPS.JackOfAllTrades",
  2: "GURPS.Expertise"
};

/* -------------------------------------------- */


// Condition Types
GURPS.conditionTypes = {
  "blinded": "GURPS.ConBlinded",
  "charmed": "GURPS.ConCharmed",
  "deafened": "GURPS.ConDeafened",
  "diseased": "GURPS.ConDiseased",
  "exhaustion": "GURPS.ConExhaustion",
  "frightened": "GURPS.ConFrightened",
  "grappled": "GURPS.ConGrappled",
  "incapacitated": "GURPS.ConIncapacitated",
  "invisible": "GURPS.ConInvisible",
  "paralyzed": "GURPS.ConParalyzed",
  "petrified": "GURPS.ConPetrified",
  "poisoned": "GURPS.ConPoisoned",
  "prone": "GURPS.ConProne",
  "restrained": "GURPS.ConRestrained",
  "stunned": "GURPS.ConStunned",
  "unconscious": "GURPS.ConUnconscious"
};

// Languages
GURPS.languages = {
  "common": "GURPS.LanguagesCommon",
  "aarakocra": "GURPS.LanguagesAarakocra",
  "abyssal": "GURPS.LanguagesAbyssal",
  "aquan": "GURPS.LanguagesAquan",
  "auran": "GURPS.LanguagesAuran",
  "celestial": "GURPS.LanguagesCelestial",
  "deep": "GURPS.LanguagesDeepSpeech",
  "draconic": "GURPS.LanguagesDraconic",
  "druidic": "GURPS.LanguagesDruidic",
  "dwarvish": "GURPS.LanguagesDwarvish",
  "elvish": "GURPS.LanguagesElvish",
  "giant": "GURPS.LanguagesGiant",
  "gith": "GURPS.LanguagesGith",
  "gnomish": "GURPS.LanguagesGnomish",
  "goblin": "GURPS.LanguagesGoblin",
  "gnoll": "GURPS.LanguagesGnoll",
  "halfling": "GURPS.LanguagesHalfling",
  "ignan": "GURPS.LanguagesIgnan",
  "infernal": "GURPS.LanguagesInfernal",
  "orc": "GURPS.LanguagesOrc",
  "primordial": "GURPS.LanguagesPrimordial",
  "sylvan": "GURPS.LanguagesSylvan",
  "terran": "GURPS.LanguagesTerran",
  "cant": "GURPS.LanguagesThievesCant",
  "undercommon": "GURPS.LanguagesUndercommon"
};

// Character Level XP Requirements
GURPS.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
GURPS.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Configure Optional Character Flags
GURPS.characterFlags = {
  "powerfulBuild": {
    name: "Powerful Build",
    hint: "Provides increased carrying capacity.",
    section: "Racial Traits",
    type: Boolean
  },
  "savageAttacks": {
    name: "Savage Attacks",
    hint: "Adds extra critical hit weapon dice.",
    section: "Racial Traits",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "Elven Accuracy",
    hint: "Roll an extra d20 with advantage to Dex, Int, Wis, or Cha.",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "Halfling Lucky",
    hint: "Reroll ones when rolling d20 checks.",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "Advantage on Initiative",
    hint: "Provided by feats or magical items.",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "Alert Feat",
    hint: "Provides +5 to Initiative.",
    section: "Feats",
    type: Boolean
  },
  "initiativeHalfProf": {
    name: "Half-Proficiency to Initiative",
    hint: "Provided by Jack of All Trades or Remarkable Athlete.",
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "Critical Hit Threshold",
    hint: "Allow for expanded critical range; for example Improved or Superior Critical",
    section: "Feats",
    type: Number,
    placeholder: 20
  }
};
