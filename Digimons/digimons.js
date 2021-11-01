const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const window = require("window");
const randomFile = require('random-file');
const path = require('path');
const fs = require('fs');

module.exports.run = async(client, message, args) => {
    var randomimg = path.join(__dirname, 'Digimons/');
    randomimg = [
        "Aegiochusmon Blue.jpg", "Aegiochusmon Dark.jpg", "Aegiochusmon Green.jpg", "Aegiochusmon Holy.jpg", "Aegiochusmon.jpg", "Yoxtuyoxtumon.jpg", "Machmon.jpg",
        "Aegisdramon.jpg", "AeroVeedramon.jpg", "Agumon (2006 anime).jpg", "Agumon Burst Mode.jpg", "Agumon Expert.jpg", "Agumon X.jpg", "Agumon.jpg", "Agunimon.jpg", "Agumon (Yuki no Kizuna).jpg", "Aircraft Carrier Whamon.jpg", "Airdramon.jpg", "Akatorimon.jpg",
        "Aldamon.jpg", "Algomon (Baby I).jpg", "Algomon (Baby II).jpg", "Algomon (Child).jpg", "Algomon (Adult).jpg", "Algomon (Perfect).jpg", "Entmon.jpg",
        "Algomon (Ultimate).jpg", "Allomon.jpg", "Allomon X.jpg", "Alphamon.jpg", "Alphamon Ouryuken.jpg", "Amon.jpg", "AncientBeetlemon.jpg", "Ghostmon.jpg",
        "AncientGarurumon.jpg", "AncientGreymon.jpg", "AncientKazemon.jpg", "AncientMegatheriummon.jpg", "AncientMermaidmon.jpg", "Aequcedramon.jpg",
        "AncientSphinxmon.jpg", "AncientTroiamon.jpg", "AncientVolcanomon.jpg", "AncientWisemon.jpg", "Andromon.jpg", "Angemon.jpg", "Manticoremon.jpg",
        "Angewomon X.jpg", "Angewomon.jpg", "Ankylomon.jpg", "Antylamon (Evil).jpg", "Antylamon (Good).jpg", "Anubismon.jpg", "Dokimon.jpg", "Junkmon.jpg",
        "Apemon.jpg", "Apocalymon.jpg", "Apokarimon (Creepy Mode).jpg", "Apollomon.jpg", "Apollomon Darkness Mode.jpg", "Apollomon Whispered.jpg", "Aquilamon.jpg", "Arbormon.jpg", "Arcadiamon (Champion).jpg", "Arcadiamon (In-Training).jpg",
        "Arcadiamon (Mega).jpg", "Arcadiamon (Rookie).jpg", "Arcadiamon (Ultimate).jpg", "Arcadiamon (Ultra).jpg", "Archelomon.jpg", "LovelyAngemon.jpg",
        "Argomon (Mega).jpg", "Argomon (Ultimate Worm Phase).jpg", "Argomon (Ultimate).jpg", "Armadillomon.jpg", "Armageddemon.jpg", "Armamon.jpg", "Armed MadLeomon.jpg", "Armormon.jpg", "Arresterdramon.jpg", "Arresterdramon Superior Mode.jpg",
        "Arukenimon (Human).jpg", "Arukenimon.jpg", "Aruraumon.jpg", "Astamon.jpg", "Asuramon.jpg", "Atamadekachimon.jpg", "AtlurBallistamon.jpg", "Aurumon.jpg", "AvengeKidmon.jpg", "AxeKnightmon.jpg", "AxeKnightmon (Blastmon).jpg",
        "AxeKnightmon (Duskmon).jpg", "AxeKnightmon (Gulfmon).jpg", "AxeKnightmon (Laylamon).jpg", "AxeKnightmon X.jpg", "Axemon.jpg", "Azulongmon.jpg", "Babamon.jpg", "Babydmon.jpg", "Bacchusmon.jpg", "Bacchusmon (Deisui Mode).jpg", "Bacomon.jpg",
        "Bagramon.jpg", "Baihumon.jpg", "Bakemon.jpg", "BalliBeastmon.jpg", "Ballistamon.jpg", "Ballistamon Mush Cottage.jpg", "Baboongamon.jpg", "Shortmon.jpg",
        "Ballistamon Sextet Launcher.jpg", "BanchoGolemon.jpg", "BanchoLeomon.jpg", "BanchoLeomon Burst Mode.jpg", "BanchoLillymon.jpg", "BanchoMamemon.jpg", "BanchoStingmon.jpg", "BaoHuckmon.jpg", "Barbamon.jpg", "Barbamon X.jpg",
        "Baromon.jpg", "Batterymon.jpg", "Battle Armament Trailmon.jpg", "Bearmon.jpg", "Beastmon.jpg", "Beelzemon (Behemoth).jpg", "Frosvelgrmon.jpg",
        "Beelzemon.jpg", "Beelzemon (2010 anime).jpg", "Beelzemon (Starmons).jpg", "Beelzemon Blast Mode.jpg", "Beelzemon X.jpg", "Bosamon.jpg", "Frozomon.jpg",
        "Beetlemon.jpg", "BelleStarmon.jpg", "BelleStarmon X.jpg", "Belphemon Rage Mode.jpg", "Belphemon Sleep Mode.jpg", "Belphemon X.jpg", "Hiyarimon.jpg", "WezenGammamon.jpg",
        "BeoWolfmon.jpg", "Betamon.jpg", "Betamon X.jpg", "Betsumon.jpg", "BigMamemon.jpg", "BioDarkdramon.jpg", "BioQuetzalmon.jpg", "Pyonmon.jpg", "BetelGammamon.jpg", "KausGammamon.jpg",
        "BioRotosmon.jpg", "BioStegomon.jpg", "BioSupinomon.jpg", "BioThunderbirdmon.jpg", "Birdramon.jpg", "BishopChessmon (Black).jpg", "RareRaremon.jpg",
        "BishopChessmon (White).jpg", "Biyomon.jpg", "BlackAgumon.jpg", "BlackAgumon (2006 anime).jpg", "BlackAgumon X.jpg", "BlackGabumon.jpg", "Baluchimon.jpg",
        "BlackGaogamon.jpg", "BlackGargomon.jpg", "BlackGarurumon.jpg", "BlackGatomon.jpg", "BlackGreymon.jpg", "BlackGrowlmon.jpg", "BlackGuilmon.jpg",
        "BlackImperialdramon.jpg", "BlackKingNumemon.jpg", "BlackMachGaogamon.jpg", "BlackMegaGargomon.jpg", "BlackMetalGarurumon.jpg", "BlackRapidmon.jpg",
        "BlackSeraphimon.jpg", "Black Seraphimon (DW3).jpg", "BlackShoutmon X7.jpg", "BlackWarGreymon.jpg", "BlackWarGreymon X.jpg", "BlackWarGrowlmon.jpg", "BladeKuwagamon.jpg",
        "Blastmon.jpg", "Blikmon.jpg", "Blimpmon.jpg", "BlitzGreymon.jpg", "Blossomon.jpg", "BlueMeramon.jpg", "Boarmon.jpg", "Bokomon.jpg", "Boltboutamon.jpg", "Boltmon.jpg",
        "BomberNanimon.jpg", "Bombmon.jpg", "Bommon.jpg", "Boogiemon.jpg", "Botamon.jpg", "Brachiomon.jpg", "Breakdramon.jpg", "BryweLudramon.jpg", "Bucchiemon.jpg", "Boutmon.jpg",
        "Bucchiemon (Green).jpg", "Budmon.jpg", "Bukamon.jpg", "Bulbmon.jpg", "Bullmon.jpg", "Bulucomon.jpg", "Bun.jpg", "Buraimon.jpg", "Burgamon.jpg", "Bibimon.jpg", "Bulkmon.jpg",
        "Burgamon (Champion).jpg", "BurningGreymon.jpg", "Burpmon.jpg", "BushiAgumon.jpg", "Butenmon.jpg", "Butterflymon.jpg", "Būmon.jpg", "Callismon.jpg", "Calmaramon.jpg",
        "Calumon.jpg", "Candlemon.jpg", "CannonBeemon.jpg", "CannonBeemon (Aircraft Carrier).jpg", "Cannondramon.jpg", "CaptainHookmon.jpg", "Cardmon.jpg",
        "CatchMamemon.jpg", "Caturamon.jpg", "Centarumon.jpg", "Cerberumon.jpg", "Cerberumon Werewolf Mode.jpg", "Cerberumon X.jpg", "Ceresmon.jpg", "Mimicmon.jpg",
        "Ceresmon Medium.jpg", "Chamelemon.jpg", "ChaosBlackWarGreymon.jpg", "Chaosdramon X.jpg", "Chaosdromon.jpg", "ChaosGallantmon.jpg", "ChaosGallantmon C.jpg",
        "ChaosGrimmon.jpg", "ChaosMetalSeadramon.jpg", "Chaosmon.jpg", "Chaosmon Valdur Arm.jpg", "ChaosPiedmon.jpg", "Chapmon.jpg", "Cherrymon.jpg",
        "Cherubimon (Evil).jpg", "Cherubimon (Evil) X.jpg", "Cherubimon (Good).jpg", "Cherubimon (Good) X.jpg", "Chibickmon.jpg", "ChibiKiwimon.jpg", "Chibomon.jpg",
        "Chicchimon.jpg", "Chikurimon.jpg", "Chirinmon.jpg", "Cho Hakkaimon.jpg", "Chronomon Destroy Mode.jpg", "Chronomon Holy Mode.jpg", "Chrysalimon.jpg",
        "Chuumon.jpg", "Citramon.jpg", "ClavisAngemon.jpg", "ClearAgumon.jpg", "Clockmon (Fusion).jpg", "Clockmon.jpg", "Coelamon.jpg", "Commandramon.jpg", "Conomon.jpg",
        "Copymon.jpg", "Copipemon.jpg", "Coredramon (Blue).jpg", "Coredramon (Green).jpg", "Coronamon.jpg", "Cotsucomon.jpg", "Ganimon.jpg", "Ganimon X.jpg", "Craniamon.jpg",
        "Craniamon X.jpg", "Crescemon.jpg", "CresGarurumon.jpg", "Crowmon.jpg", "Crusadermon.jpg", "Crusadermon X.jpg", "CrysPaledramon.jpg", "Cutemon.jpg", "CuteShoutmon.jpg",
        "CyberDracomon.jpg", "Cyberdramon.jpg", "Cyberdramon (2010 anime).jpg", "Cyberdramon X.jpg", "Cyclonemon.jpg", "Daemon.jpg", "Daemon (Mantled).jpg", "DeadlyAxemon.jpg",
        "Daemon (Ultra).jpg", "Daemon X.jpg", "Daipenmon.jpg", "Damemon.jpg", "Damemon (C'mon Digimon).jpg", "Darcmon.jpg", "Dark Trailmon.jpg", "DarkMaildramon.jpg",
        "Darkdramon.jpg", "Darkest AxeKnightmon.jpg", "DarkKnightmon X.jpg", "DarkLizardmon.jpg", "DarkSuperStarmon.jpg", "DarkTyrannomon.jpg", "DarkTyrannomon X.jpg", "DarkVolumon.jpg",
        "Datamon.jpg", "Datirimon.jpg", "Death Airdramon.jpg", "Deathmon (White).jpg", "Deathmon (Black).jpg", "Death Devimon.jpg", "Death Meramon.jpg", "Death MetalGreymon.jpg", "Death Tyranomon.jpg",
        "Deathmon (C_mon Digimon).jpg", "Deckerdramon.jpg", "Deckerdramon Float Mode.jpg", "DeckerGreymon.jpg", "Deltamon.jpg", "DemiDevimon.jpg", "DemiMeramon.jpg", "DemiVeemon.jpg",
        "Depthmon.jpg", "Deputymon.jpg", "Deramon.jpg", "Destromon.jpg", "Devidramon.jpg", "Devimon.jpg", "Devitamamon.jpg", "DexDorugamon.jpg", "DexDorugoramon.jpg",
        "DexDoruGreymon.jpg", "Dexmon.jpg", "Diaboromon.jpg", "Diaboromon X.jpg", "Dianamon.jpg", "Diatrymon.jpg", "Digitamamon.jpg", "Digmon.jpg", "Dinobeemon.jpg",
        "Dinohyumon.jpg", "Dinorexmon.jpg", "Dinotigermon.jpg", "Divermon.jpg", "Dobermon.jpg", "Dobermon X.jpg", "Dodomon.jpg", "Doggymon.jpg", "Dokugumon.jpg", "Curimon.jpg",
        "Dokunemon.jpg", "Dolphmon.jpg", "Dominimon.jpg", "Dondokomon.jpg", "DonShoutmon.jpg", "Dorbickmon.jpg", "Dorbickmon Darkness Mode (Flarerizamon).jpg",
        "Dorbickmon Darkness Mode One.jpg", "Dorbickmon Darkness Mode Two.jpg", "Dorimon.jpg", "Dorugamon.jpg", "Dorugoramon.jpg", "DoruGreymon.jpg", "Dorulumon.jpg",
        "Dorumon.jpg", "Donedevimon.jpg", "Doumon.jpg", "Dracmon.jpg", "Dracomon.jpg", "Dracomon X.jpg", "Dragomon.jpg", "Drimogemon.jpg", "Duramon.jpg", "Durandamon.jpg", "Duskmon.jpg",
        "Dynasmon.jpg", "Dynasmon X.jpg", "Eaglemon.jpg", "Ebemon.jpg", "Ebemon X.jpg", "EbiBurgamon.jpg", "Ebidramon.jpg", "Ebonwumon.jpg", "Ekakimon.jpg", "Exermon.jpg",
        "ElDradimon.jpg", "Elecmon.jpg", "Elephantmon.jpg", "EmperorGreymon.jpg", "Etemon.jpg", "Etemon (Chaos).jpg", "Evil Grademon.jpg", "Evilbeast Laylamon.jpg",
        "Examon.jpg", "Examon X.jpg", "ExoGrimmon.jpg", "ExTyrannomon.jpg", "ExVeemon.jpg", "ExVeemon (Virus).jpg", "Fake Agumon Expert.jpg", "Falcomon.jpg", "Falcomon (2006 anime).jpg",
        "FanBeemon.jpg", "Fangmon.jpg", "Filmon.jpg", "Firamon.jpg", "Flamedramon.jpg", "Flamemon.jpg", "FlameWizardmon.jpg", "Flaremon.jpg", "Flarerizamon.jpg", "Floramon.jpg",
        "Flybeemon.jpg", "Flymon.jpg", "Footmon.jpg", "Frigimon.jpg", "Frimon.jpg", "Frogmon.jpg", "Fufumon.jpg", "Fugamon.jpg", "Fujinmon.jpg", "Gammamon.jpg", "Gurimon.jpg",
        "FusedAncientVolcanomon.jpg", "Gabumon.jpg", "Gabumon X.jpg", "Gaiamon.jpg", "Galacticmon.jpg", "Gallantmon (Grani).jpg", "Gallantmon.jpg", "Gallantmon Chaos Mode.jpg",
        "Gallantmon Crimson Mode.jpg", "Gallantmon X.jpg", "Ganemon.jpg", "Gankoomon.jpg", "Gankoomon X.jpg", "Gaogamon.jpg", "Gaomon.jpg", "Gaossmon.jpg", "Garbagemon.jpg", "Ganvivormon.jpg",
        "Gargomon.jpg", "Gargoylemon.jpg", "Garudamon.jpg", "Garudamon X.jpg", "Garurumon.jpg", "Garurumon X.jpg", "Gatomon.jpg", "Gatomon (Ringless).jpg", "Gatomon X.jpg", "Gogmamon.jpg",
        "Gazimon.jpg", "Gazimon X.jpg", "Gekomon.jpg", "Generamon.jpg", "GeoGreymon.jpg", "Geremon.jpg", "Gesomon.jpg", "Gesomon X.jpg", "Ghoulmon.jpg", "Ghoulmon (Black).jpg",
        "GigaBreakdramon.jpg", "Gigadramon.jpg", "GigaSeadramon.jpg", "Gigasmon.jpg", "GigaWaruMonzaemon.jpg", "Gigimon.jpg", "Ginkakumon.jpg", "Ginkakumon Promote.jpg",
        "Ginryumon.jpg", "Giromon.jpg", "Gizamon.jpg", "Gizumon.jpg", "Gizumon-AT.jpg", "Gizumon-XT.jpg", "Gladimon.jpg", "Goblimon.jpg", "Gokuwmon.jpg", "GoldNumemon.jpg", "Goldramon.jpg",
        "Goldramon X.jpg", "GoldVeedramon.jpg", "GolemJijiTortomon.jpg", "Golemon.jpg", "Gomamon.jpg", "Gomamon X.jpg", "Gorillamon.jpg", "Gotsumon.jpg", "Gotsumon X.jpg",
        "GraceNovamon.jpg", "Grademon.jpg", "Grand Generamon.jpg", "GrandisKuwagamon.jpg", "GrandisKuwagamon Honeybee Mode.jpg", "GranDracmon.jpg", "GranKuwagamon.jpg", "GranLocomon.jpg",
        "GrapLeomon.jpg", "Gravimon.jpg", "Gravimon Darkness Mode.jpg", "Greatest Cutemon.jpg", "GreyKnightsmon.jpg", "Greymon.jpg", "Greymon (2010 anime).jpg", "Greymon O.jpg",
        "Greymon X.jpg", "Grimmon.jpg", "Grimmon (Mystic Energy).jpg", "Grizzlymon.jpg", "Groundramon.jpg", "Growlmon.jpg", "Growlmon (Yellow).jpg", "Growlmon X.jpg", "Grumblemon.jpg",
        "Gryphonmon.jpg", "Guardromon.jpg", "Guardromon (Gold).jpg", "Guidemon.jpg", "Guilmon.jpg", "Guilmon X.jpg", "Gulfmon.jpg", "Gumdramon.jpg", "Gummymon.jpg", "Gundramon.jpg", "Gusokumon.jpg",
        "Gururumon.jpg", "Gwappamon.jpg", "Hackmon.jpg", "Hagurumon.jpg", "Hagurumon X.jpg", "Halsemon.jpg", "Harpymon.jpg", "Hawkmon.jpg", "HerculesKabuterimon.jpg", "Vulturemon.jpg",
        "HerculesKabuterimon X.jpg", "Herissmon.jpg", "Hermmon.jpg", "Hi-VisionMonitamon.jpg", "HiAndromon.jpg", "HiMachineDramon.jpg", "Hinukamuy.jpg", "Hippogriffomon.jpg", "HolyDigitamamon.jpg", "Honeybeemon.jpg", "Hookmon.jpg",
        "Hubmon.jpg", "Hopmon.jpg", "Hououmon.jpg", "Hououmon X.jpg", "Huanglongmon.jpg", "HustleNanimon.jpg", "Housemon.jpg", "Hudiemon.jpg", "Jellymon.jpg", "Ajatarmon.jpg",
        "Hyogamon.jpg", "Hyokomon.jpg", "IceDevimon.jpg", "IceDevimon (Enhancement Absorbent).jpg", "IceDevimon-Daipenmon Enhancement.jpg", "Panjyamon.jpg", "Panjyamon X.jpg",
        "Icemon.jpg", "Ignitemon.jpg", "Ikkakumon.jpg", "Imperialdramon Dragon Mode.jpg", "Imperialdramon Fighter Mode.jpg", "Imperialdramon Fighter Mode (Black).jpg", "Hydramon.jpg",
        "Imperialdramon Paladin Mode.jpg", "Impmon.jpg", "Impmon X.jpg", "Indramon.jpg", "Infermon.jpg", "Jagamon.jpg", "JagerLoweemon.jpg", "Jazamon.jpg", "Jazardmon.jpg", "Potamon.jpg",
        "Jazarichmon.jpg", "Jesmon.jpg", "Jesmon GX.jpg", "Jesmon X.jpg", "JetMervamon.jpg", "JetSilphymon.jpg", "JewelBeemon.jpg", "Jijimon.jpg", "JijiShoutmon.jpg", "Jokermon.jpg",
        "JumboGamemon.jpg", "JungleMojyamon.jpg", "Junomon.jpg", "Junomon Hysteric Mode.jpg", "Jupitermon.jpg", "Jupitermon Wrath Mode.jpg", "Justimon (Accel Arm).jpg", "Goromon.jpg",
        "Justimon (Blitz Arm).jpg", "Justimon (Critical Arm).jpg", "Justimon X.jpg", "Jyagamon.jpg", "Jyarimon.jpg", "Kabukimon.jpg", "Kabuterimon.jpg", "Kakkinmon.jpg", "Kamemon.jpg",
        "Kangarumon.jpg", "Kapurimon.jpg", "Karatenmon.jpg", "KaratsukiNumemon.jpg", "Kazemon.jpg", "Keemon.jpg", "KendoGarurumon.jpg", "Kenkimon.jpg", "Kentaurosmon.jpg", "Assaultmon.jpg",
        "Kentaurosmon X.jpg", "Keramon.jpg", "Keramon X.jpg", "Ketomon.jpg", "Kimeramon.jpg", "KingChessmon.jpg", "KingEtemon.jpg", "Kinkakumon.jpg", "Kiwimon.jpg", "KnightChessmon (Black).jpg",
        "KnightChessmon (White).jpg", "Knightmon.jpg", "Knightmon Wise-Sword Mode.jpg", "KoDokugumon.jpg", "Kogamon.jpg", "KoHagurumon.jpg", "KoKabuterimon.jpg", "Negamon.jpg",
        "Kokatorimon.jpg", "Kokomon.jpg", "Kokuwamon.jpg", "Kokuwamon X.jpg", "Kongoumon.jpg", "Korikakumon.jpg", "Koromon.jpg", "Kotemon.jpg", "Komondomon.jpg", "Abbadomon.jpg",
        "KoZenimon.jpg", "Kudamon.jpg", "Kudamon (2006 anime).jpg", "Kumamon.jpg", "Kumbhiramon.jpg", "Kunemon.jpg", "Kuramon.jpg", "Kuwagamon.jpg", "Kuwagamon X.jpg", "Abbadomon Core.jpg",
        "Kuzuhamon.jpg", "Kuzuhamon Miko Mode.jpg", "Kyaromon.jpg", "KyodaiNumemon.jpg", "Kyokyomon.jpg", "Kyubimon.jpg", "Kyubimon (Silver).jpg", "Kyukimon.jpg", "Kyupimon.jpg",
        "L-ToyAgumon.jpg", "Labramon.jpg", "LadyDevimon.jpg", "LadyDevimon X.jpg", "Lalamon.jpg", "Lampmon.jpg", "Lavogaritamon.jpg", "Lavorvomon.jpg", "Laylamon.jpg", "Laylamon X.jpg", "Leafmon.jpg", "Lekismon.jpg", "Leomon.jpg", "Leomon X.jpg",
        "Leopardmon.jpg", "Leopardmon Leopard Mode.jpg", "Leopardmon X.jpg", "Leviamon.jpg", "Leviamon X.jpg", "Liamon.jpg", "Lilamon.jpg", "Lillymon.jpg", "Lillymon X.jpg", "Liollmon.jpg",
        "LoaderLiomon.jpg", "Lobomon.jpg", "Locomon.jpg", "Lopmon.jpg", "Lopmon (White).jpg", "Lopmon X.jpg", "Lotosmon.jpg", "Loweemon.jpg", "Lucemon.jpg", "Lucemon Chaos Mode.jpg",
        "Lucemon Larva.jpg", "Lucemon Shadowlord Mode.jpg", "Lucemon X.jpg", "Ludomon.jpg", "Luminamon.jpg", "Luminamon (Nene Version).jpg", "Lunamon.jpg", "Lycamon.jpg", "Lynxmon.jpg",
        "Eosmon (Adult).jpg", "Eosmon (Perfect).jpg", "Eosmon (Definitive).jpg", "Gabumon (Yuki no Kizuna).jpg", "Agumon (Yuki no Kizuna).jpg", "Eyesmon (Scatter Mode).jpg", "Eyesmon.jpg", "MachGaogamon.jpg",
        "Machinedramon.jpg", "MachLeomon.jpg", "MadLeomon.jpg", "MadLeomon (Orochimode).jpg", "MadLeomon (Final Mode).jpg", "MagnaAngemon.jpg", "MagnaAngemon (Priest Mode).jpg",
        "Magnadramon.jpg", "Magnadramon X.jpg", "MagnaGarurumon.jpg", "MagnaGarurumon (SV).jpg", "MagnaKidmon.jpg", "Magnamon.jpg", "Magnamon X.jpg", "MailBirdramon.jpg", "Bloomlordmon.jpg",
        "Mailbirdramon+Golemon.jpg", "Maildramon.jpg", "Makuramon.jpg", "MaloMyotismon.jpg", "Mamemon.jpg", "Mamemon X.jpg", "MameTyramon.jpg", "Mammothmon.jpg", "Shroudmon.jpg",
        "Mammothmon X.jpg", "Manbomon.jpg", "Mantaraymon.jpg", "Mantaraymon X.jpg", "MarinChimairamon.jpg", "MarineAngemon.jpg", "MarineDevimon.jpg", "Marsmon.jpg", "Mastemon.jpg",
        "MasterTyrannomon.jpg", "Master V-dramon.jpg", "Matadormon.jpg", "MedievalDukemon.jpg", "MegaBlackShoutmon X7.jpg", "AxeKnightmon.jpg", "MegaDarknessBagramon.jpg", "DeckerGreymon.jpg",
        "Megadramon.jpg", "MegaGargomon.jpg", "GranKuwagamon.jpg", "MegaKabuterimon (Blue).jpg", "MegaKabuterimon (Red).jpg", "MusoKnightmon.jpg", "MegaSeadramon.jpg", "MegaSeadramon X.jpg",
        "Megidramon.jpg", "Megidramon X.jpg", "Meicoomon.jpg", "Meicoomon (Saltation).jpg", "Meicrackmon.jpg", "Meicrackmon Vicious Mode.jpg", "Mekanorimon.jpg", "Mephistomon.jpg", "Mephistomon X.jpg",
        "Meramon.jpg", "Meramon X.jpg", "Mercurymon.jpg", "Mermaimon.jpg", "Merukimon.jpg", "Mervamon.jpg", "Mervamon Wide-Hi-Vision Sword.jpg", "MetalEtemon.jpg", "MetalGarurumon.jpg",
        "MetalGarurumon X.jpg", "MetalGreymon (Vaccine).jpg", "MetalGreymon (Alterous Mode).jpg", "MetalGreymon (Virus).jpg", "MetalGreymon (2010 anime).jpg", "MetalGreymon Cyberdramon.jpg", "MetalGreymon X.jpg",
        "MetalGreymon (Virus) X.jpg", "MetalKabuterimon.jpg", "MetalKoromon.jpg", "Metallicdramon.jpg", "MetallifeKuwagamon.jpg", "MetalMamemon.jpg", "MetalMamemon X.jpg", "Kazuchimon.jpg",
        "MetalPhantomon.jpg", "MetalPiranimon.jpg", "MetalSeadramon.jpg", "MetalTyrannomon.jpg", "MetalTyrannomon X.jpg", "Metamormon.jpg", "Meteormon.jpg", "Mihiramon.jpg", "Shivamon.jpg",
        "Mikemon.jpg", "Millenniummon.jpg", "Minervamon.jpg", "Minervamon X.jpg", "MiniDekachimon.jpg", "Minomon.jpg", "Minotarumon.jpg", "MirageGaogamon.jpg", "MirrorBallmon.jpg",
        "Missimon.jpg", "Mistymon.jpg", "Mitamamon.jpg", "ModokiBetamon.jpg", "Mojyamon.jpg", "Mokumon.jpg", "Monimon.jpg", "Monitamon.jpg", "Monmon.jpg", "Monochromon.jpg", "Monochromon X.jpg",
        "Monodramon.jpg", "Monzaemon.jpg", "Monzaemon X.jpg", "Moon=Millenniummon.jpg", "Moonmon.jpg", "Moosemon.jpg", "MoriShellmon.jpg", "Morphomon.jpg", "Mothmon.jpg", "Motimon.jpg",
        "Muchomon.jpg", "MudFrigimon.jpg", "Mummymon.jpg", "Mummymon (Human).jpg", "Murmukusmon.jpg", "Mushroomon.jpg", "MusoKnightmon.jpg", "Musyamon.jpg", "Achillesmon.jpg",
        "Myotismon.jpg", "Myotismon X.jpg", "Nanimon.jpg", "Neemon.jpg", "Nefertimon.jpg", "Nefertimon X.jpg", "NeoDevimon.jpg", "NeoMyotismon.jpg", "NeoMyotismon Darkness Mode One.jpg",
        "NeoMyotismon Darkness Mode Two.jpg", "NeoMyotismon Darkness Mode (Shoutmon).jpg", "Neptunemon.jpg", "Ninjamon.jpg", "Nidhoggmon.jpg", "NiseDrimogemon.jpg", "NoblePumpkinmon.jpg", "Nohemon.jpg",
        "Namakemon.jpg", "Numemon.jpg", "Numemon X.jpg", "Nyaromon.jpg", "Nyokimon.jpg", "Ochimusayamon.jpg", "Octomon.jpg", "Ogremon.jpg", "Ogremon X.jpg", "Ogudomon.jpg", "Ogudomon X.jpg", "Ohakadamon.jpg",
        "Okuwamon.jpg", "Okuwamon X.jpg", "Olegmon.jpg", "OmegaArmamon Burst Mode.jpg", "Omegamon Alter-B.jpg", "Omegamon Alter-S.jpg", "Omegamon Zwart Defeat.jpg", "Gaioumon.jpg", "Gaioumon-Itto Mode.jpg",
        "Omekamon.jpg", "Omegamon.jpg", "Omegamon X.jpg", "Omegamon Merciful Mode.jpg", "Omegamon Zwart.jpg", "OmegaShoutmon.jpg", "OmegaShoutmon X.jpg", "Ophanimon.jpg", "Ophanimon C.jpg",
        "Ophanimon X.jpg", "Ophanimon Falldown Mode.jpg", "Ophanimon Falldown Mode X.jpg", "Opossummon.jpg", "Orcamon.jpg", "Ordinemon.jpg", "Ornismon.jpg", "Orochimon.jpg", "Oryxmon.jpg",
        "Otamamon.jpg", "Otamamon (Red).jpg", "Otamamon X.jpg", "Ouryumon.jpg", "Pabumon.jpg", "Pafumon.jpg", "Pagumon.jpg", "Paildramon.jpg", "Pajiramon.jpg", "Palmon.jpg", "Palmon X.jpg",
        "Paledramon.jpg", "Panbachimon.jpg", "Pandamon.jpg", "Panimon.jpg", "Paomon.jpg", "Parallelmon.jpg", "Parasimon.jpg", "Parasaurmon.jpg", "Parrotmon.jpg", "Patamon.jpg", "PawnChessmon (Black).jpg",
        "PawnChessmon (White).jpg", "PaunGaossmon.jpg", "PawnShoutmon.jpg", "Peacockmon.jpg", "Peckmon.jpg", "Pegasusmon.jpg", "Pegasusmon X.jpg", "Penguinmon.jpg", "Petaldramon.jpg", "Pyontomon.jpg",
        "Petermon.jpg", "PetitMamon.jpg", "Petitmon.jpg", "Phantomon.jpg", "Pharaohmon.jpg", "Phascomon.jpg", "Phelesmon.jpg", "Pichimon.jpg", "Pickmon (Silver).jpg", "Pickmon (White).jpg",
        "Piddomon.jpg", "Piedmon.jpg", "PileVolcamon.jpg", "Pillomon.jpg", "Pinamon.jpg", "Pipismon.jpg", "Pistmon.jpg", "Piranimon.jpg", "Piximon.jpg", "PlatinumNumemon.jpg", "PlatinumSukamon.jpg", "Plesiomon.jpg",
        "Plesiomon X.jpg", "Plutomon.jpg", "Pomumon.jpg", "Ponchomon.jpg", "Popomon.jpg", "Pol.jpg", "Porcupamon.jpg", "Poromon.jpg", "Poyomon.jpg", "Prairiemon.jpg", "PrinceMamemon.jpg", "Puyomon.jpg",
        "PrinceMamemon X.jpg", "Psychemon.jpg", "Pteramon.jpg", "Pteramon X.jpg", "Pukumon.jpg", "Pumpkinmon.jpg", "Punimon.jpg", "Puppetmon.jpg", "Pulsemon.jpg", "Pupumon.jpg", "Puroromon.jpg", "Pusumon.jpg",
        "Pusurimon.jpg", "Puttimon.jpg", "Puwamon.jpg", "Quartzmon.jpg", "Quartzmon (Tower).jpg", "Quartzmon (Terminal).jpg", "Quartzmon (World).jpg", "QueenChessmon.jpg", "Quetzalmon.jpg",
        "Rabbitmon.jpg", "Rafflesimon.jpg", "RagnaLoardmon.jpg", "Raguelmon.jpg", "Raidenmon.jpg", "Raidramon.jpg", "RaijiLudomon.jpg", "RaijiLudomon (Shield Form).jpg", "Raijinmon.jpg", "Rurimon.jpg",
        "RampageGreymon.jpg", "Ranamon.jpg", "Rapidmon.jpg", "Rapidmon (Armor).jpg", "Rapidmon X.jpg", "RaptorSparrowmon.jpg", "Raremon.jpg", "Rasielmon.jpg", "Rasenmon.jpg", "Rasenmon (Anniv).jpg",
        "Rasenmon Fury Mode.jpg", "Rasenmon Fury Mode (Anniv).jpg", "Ravemon.jpg", "Ravemon Burst Mode.jpg", "Reapermon.jpg", "Reapmon.jpg", "Rebellimon.jpg", "RedVeedramon.jpg", "Runnermon.jpg",
        "RedVegiemon.jpg", "Regalecusmon.jpg", "Regulumon.jpg", "Relemon.jpg", "Renamon.jpg", "Renamon X.jpg", "Reppamon.jpg", "Reptiledramon.jpg", "ReverseWeddinmon.jpg", "Rhihimon.jpg", "Angoramon.jpg",
        "RhinoKabuterimon.jpg", "Rhinomon.jpg", "Rhinomon X.jpg", "Rhythm.jpg", "Rinkmon.jpg", "RizeGreymon.jpg", "RizeGreymon X.jpg", "Roachmon.jpg", "Rockmon.jpg", "RookChessmon (Black).jpg",
        "RookChessmon (White).jpg", "Rosemon.jpg", "Rosemon Burst Mode.jpg", "Rosemon X.jpg", "RustTyranomon.jpg", "Ruthless Tuwarmon.jpg", "Ryudamon.jpg", "Saberdramon.jpg", "SaberLeomon.jpg",
        "Sagittarimon.jpg", "Sagomon.jpg", "Sakkakumon.jpg", "Sakumon.jpg", "SakutekiMonitamon.jpg", "Sakuttomon.jpg", "Sakuyamon.jpg", "Sakuyamon Maid Mode.jpg", "Sakuyamon X.jpg", "Salamandermon.jpg",
        "Salamon.jpg", "Salamon X.jpg", "Sandiramon.jpg", "Sangomon.jpg", "SandYanmamon.jpg", "Sangloupmon.jpg", "SantaAgumon.jpg", "Sanzomon.jpg", "SaviorHuckmon.jpg", "Scorpiomon.jpg", "Scorpiomon X.jpg",
        "ScudMissimon.jpg", "Seadramon.jpg", "Seadramon X.jpg", "Seahomon.jpg", "Sealsdramon.jpg", "Searchmon.jpg", "Seasarmon.jpg", "Seasarmon X.jpg", "Sepikmon.jpg", "Seraphimon.jpg", "Sethmon.jpg",
        "Sethmon Wild Mode.jpg", "Shademon.jpg", "Shademon (Nene).jpg", "ShadowSeraphimon.jpg", "ShadowToyAgumon.jpg", "ShadowWereGarurumon.jpg", "Shadramon.jpg", "Shakamon.jpg", "Shakkoumon.jpg", "Shamanmon.jpg", "Shawjamon.jpg",
        "Sheepmon.jpg", "Shellmon.jpg", "ShimaUnimon.jpg", "ShineGreymon.jpg", "ShineGreymon Burst Mode.jpg", "ShineGreymon Ruin Mode.jpg", "ShogunGekomon.jpg", "ShootingStarmon.jpg", "Shootmon.jpg",
        "Shounitamon.jpg", "Shoutmon.jpg", "Shoutmon (King Ver).jpg", "Shoutmon + Drill Cannon.jpg", "Shoutmon + Star Sword.jpg", "Shoutmon + Supersonic Sparrow.jpg", "Shoutmon B.jpg", "Puyoyomon.jpg",
        "Shoutmon DX.jpg", "Shoutmon EX6.jpg", "Shoutmon Star Wheel.jpg", "Shoutmon X2.jpg", "Shoutmon X2 (Incomplete X4).jpg", "Shoutmon X2+.jpg", "Shoutmon X3.jpg", "Shoutmon X3GM.jpg", "Shoutmon X3SD.jpg", "Shoutmon X4.jpg",
        "Shoutmon X4B.jpg", "Shoutmon X4K.jpg", "Shoutmon X4S.jpg", "Shoutmon X5.jpg", "Shoutmon X5B.jpg", "Shoutmon X5S.jpg", "Shoutmon X6.jpg", "Shoutmon X7.jpg", "Shoutmon X7F Superior Mode.jpg",
        "Shurimon.jpg", "Shurimon (Black).jpg", "Silphymon.jpg", "Sinduramon.jpg", "Sirenmon.jpg", "Sistermon Blanc.jpg", "Sistermon Blanc (Awakened).jpg", "Sistermon Ciel.jpg", "Sistermon Noir.jpg",
        "Sistermon Noir (Awakened).jpg", "SkullBaluchimon.jpg", "SkullGreymon.jpg", "SkullKnightmon.jpg", "SkullKnightmon BR.jpg", "SkullKnightmon Cavalier Mode.jpg", "SkullKnightmon Mighty Axe Mode.jpg",
        "SkullMammothmon.jpg", "SkullMammothmon X.jpg", "SkullMeramon.jpg", "SkullSatamon.jpg", "SkullScorpionmon.jpg", "Slayerdramon.jpg", "SlashAngemon.jpg", "Snatchmon.jpg", "Snimon.jpg", "SnowAgumon.jpg", "SnowAgumon (2006).jpg",
        "SnowGoblimon.jpg", "Solarmon.jpg", "Sorcermon.jpg", "Soulmon.jpg", "Soundbirdmon.jpg", "Spadamon.jpg", "Sparrowmon.jpg", "Sparrowmon After Burner.jpg", "Spinomon.jpg", "Splashmon.jpg",
        "Splashmon Darkness Mode 1.jpg", "Splashmon Darkness Mode 2.jpg", "Starmon.jpg", "Starmon (2010 anime).jpg", "Starmon X.jpg", "Stefilmon.jpg", "Stegomon.jpg", "Stingmon.jpg", "Strabimon.jpg", "Strikedramon.jpg",
        "Submarimon.jpg", "Suijinmon.jpg", "Sukamon.jpg", "Sunarizamon.jpg", "Sunflowmon.jpg", "Sunmon.jpg", "SuperDarkKnightmon.jpg", "SuperStarmon.jpg", "Surfimon.jpg", "Susanoomon.jpg", "Swanmon.jpg",
        "Swimmon.jpg", "Syakomon.jpg", "Syakomon X.jpg", "Tactimon.jpg", "Tanemon.jpg", "Tankdramon.jpg", "Tankmon.jpg", "Taomon.jpg", "Taomon (Silver).jpg", "Tapirmon.jpg", "Targetmon.jpg", "Technodramon.jpg", "Tekkamon.jpg",
        "Tentomon.jpg", "Terriermon.jpg", "Terriermon X.jpg", "Terriermon Assistant.jpg", "Thunderbirdmon.jpg", "Thundermon.jpg", "Thundermon X.jpg", "TiaLudomon.jpg", "TigerVespamon.jpg", "Tinkermon.jpg", "Tinmon.jpg",
        "Titamon.jpg", "Tobiumon.jpg", "TobuCatmon.jpg", "Togemogumon.jpg", "Togemon.jpg", "Togemon X.jpg", "Tokomon.jpg", "Tokomon X.jpg", "TonosamaMamemon.jpg", "Torikaraballmon.jpg", "Toropiamon.jpg", "Tortomon.jpg",
        "Toucanmon.jpg", "ToyAgumon.jpg", "Trailmon (Angler).jpg", "Trailmon (Ball).jpg", "Tempomon.jpg", "Trailmon (C-89 Model).jpg", "Trailmon (Franken).jpg", "Trailmon (Worm).jpg", "Triceramon.jpg", "Triceramon X.jpg",
        "Troopmon.jpg", "Tsubumon.jpg", "Tsukaimon.jpg", "Tsumemon.jpg", "Tsunomon.jpg", "Tuwarmon.jpg", "Turuiemon.jpg", "Tuskmon.jpg", "Tylomon.jpg", "Tylomon X.jpg", "Tyrannomon.jpg", "Tyrannomon X.jpg",
        "TyrantKabuterimon.jpg", "Tyutyumon.jpg", "UlforceVeedramon.jpg", "UlforceVeedramon Future Mode.jpg", "UlforceVeedramon X.jpg", "UltimateBrachiomon.jpg", "UltimateChaosmon.jpg", "Umon.jpg", "Unimon.jpg",
        "Upamon.jpg", "Vademon.jpg", "Vademon X.jpg", "Vajramon.jpg", "Valkyrimon.jpg", "Varodurumon.jpg", "Veedramon.jpg", "Veedramon (Virus).jpg", "Veemon.jpg", "Vegiemon.jpg", "Velgemon.jpg", "Vemmon.jpg",
        "VenomMyotismon.jpg", "Venusmon.jpg", "Vermillimon.jpg", "VictoryGreymon.jpg", "Vikaralamon.jpg", "Vikemon.jpg", "Vilemon.jpg", "Viximon.jpg", "Volcamon.jpg", "Volcanicdramon.jpg", "Volcdramon.jpg",
        "Vorvomon.jpg", "Vulcanusmon.jpg", "Wanyamon.jpg", "WarGreymon.jpg", "WarGreymon X.jpg", "WarGrowlmon.jpg", "WarGrowlmon (Yellow).jpg", "WarGrowlmon X.jpg", "WaruMonzaemon.jpg", "WaruSeadramon.jpg",
        "Waspmon.jpg", "Weddinmon.jpg", "Weedmon.jpg", "Wendigomon.jpg", "WereGarurumon.jpg", "WereGarurumon Sagittarius Mode.jpg", "WereGarurumon X.jpg", "Whamon.jpg", "KingWhamon.jpg", "Wingdramon.jpg",
        "Wisemon.jpg", "Witchmon.jpg", "Wizardmon.jpg", "Wizardmon X.jpg", "Woodmon.jpg", "Wormmon.jpg", "Xiaomon.jpg", "Yaamon.jpg", "YaegerDorulumon.jpg", "Yakiimon.jpg", "Yanmamon.jpg", "Yasyamon.jpg",
        "Yatakaramon.jpg", "Yoyomon.jpg", "Yokomon.jpg", "Youkomon.jpg", "YukimiBotamon.jpg", "Yuramon.jpg", "Zamielmon.jpg", "Zanbamon.jpg", "ZeedGarurumon.jpg", "ZeedMillenniummon.jpg", "ZekeGreymon.jpg",
        "Zenimon.jpg", "Zephyrmon.jpg", "Zerimon.jpg", "Zhuqiaomon.jpg", "ZubaEagermon.jpg", "Zubamon.jpg", "Zudomon.jpg", "Zurumon.jpg", "Divemon.jpg", "Climbmon.jpg", "Sunamon.jpg",
        /*Xtra Forms*/
        "Omedamon.jpg", "BlackWarKazumon.jpg", "DigiGnome.jpg", "D-Reaper ADR-01 - Jeri Type.jpg", "D-Reaper ADR-02 - Searcher.jpg", "D-Reaper ADR-03 - Pendulum Feet.jpg", "D-Reaper ADR-04 - Bubbles.jpg",
        "D-Reaper ADR-05 - Creep Hands.jpg", "D-Reaper ADR-06 - Horn Striker.jpg", "D-Reaper ADR-07 - Paratice Head.jpg", "D-Reaper ADR-08 - Optimizer.jpg", "D-Reaper ADR-09 - Gatekeeper.jpg", "Reaper.jpg",
        "Mother D-Reaper.jpg", "Eater (Humanoid Mode).jpg", "Eater (Purebreed Mode).jpg", "Eater Adam.jpg", "Eater Bit.jpg", "Eater EDEN.jpg", "Eater Eve.jpg", "Eater Legion.jpg", "Eraser.jpg",
        "Ex-Eraser α.jpg", "Ex-Eraser β.jpg", "Ex-Eraser γ.jpg", "Ex-Eraser Ω.jpg", "Giga Devast.jpg", "Mother Eater.jpg", "NEO.jpg", "Shift Eraser.jpg", "Spiral.jpg", "Tera Devast.jpg", "Vitium (Form 1).jpg",
        "Vitium (Form 2).jpg", "King Drasil 7D6.jpg"
    ]
    const img = randomimg[Math.floor(Math.random() * randomimg.length - 1 + 1)]
    const digName = ("Digimon name: " + img.replace(/\.[^.$]+$/, ''))
    //message.channel.send("--------------------------------------------------")
    //message.channel.send("Digimon name: " + img.replace(/\.[^.$]+$/, ''))
    //message.channel.send("►Level: " + Math.floor(Math.random() * (99 + 1)))
    //message.channel.send({ file: ["Digimons/"] + img })

  module.exports = {
    name: digName,
    description: 'Digimons'
    execute(message, args, Discord){
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#384281')
      .setTitle('Digimon')
      .addFields(
        {name: 'Level', value: Math.floor(Math.random() * (99 + 1))}
      )
      .setImage (img)

      message.channel.send(newEmbed);
    }
  }

}

module.exports.config = {
    name: "digimons",
    usage: "-digimons",
    aliases: ["-dig", "-di"]
}
