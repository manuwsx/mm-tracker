//Los campos que deben tener los items
export interface Item {
  id: string;
  name: string;
  icon: string;
  category: 'mask' | 'equipment' | 'sword' | 'shield' | 'song' | 'remains' | 'quest';
}

export const items: Item[] = [
    // c buttons items
    { id: 'ocarina', name: 'Ocarina of Time', icon: 'ocarina.png', category: 'equipment' },
    { id: 'bow', name: 'Hero Bow', icon: 'bow.png', category: 'equipment' },
    { id: 'fire_arrow', name: 'Fire Arrow', icon: 'fire_arrow.png', category: 'equipment' },
    { id: 'ice_arrow', name: 'Ice Arrow', icon: 'ice_arrow.png', category: 'equipment' },
    { id: 'light_arrow', name: 'Light Arrow', icon: 'light_arrow.png', category: 'equipment' },
    { id: 'bomb', name: 'Bombs', icon: 'bomb.png', category: 'equipment' },
    { id: 'bombchu', name: 'Bombchu', icon: 'bombchu.png', category: 'equipment' },
    { id: 'stick', name: 'Deku Stick', icon: 'stick.png', category: 'equipment' },
    { id: 'nut', name: 'Deku Nut', icon: 'nut.png', category: 'equipment' },
    { id: 'bean', name: 'Magic Bean', icon: 'bean.png', category: 'equipment' },
    { id: 'keg', name: 'Powder Keg', icon: 'keg.png', category: 'equipment' },
    { id: 'picto', name: 'Pictograph Box', icon: 'picto.png', category: 'equipment' },
    { id: 'lens', name: 'Lens of Truth', icon: 'lens.png', category: 'equipment' },
    { id: 'hookshot', name: 'Hookshot', icon: 'hookshot.png', category: 'equipment' },
    { id: 'fairy_sword', name: 'Fairy\'s Sword', icon: 'fairy_sword.png', category: 'equipment' },
    { id: 'bottle1', name: 'Bottle', icon: 'bottle.png', category: 'equipment' },
    { id: 'bottle2', name: 'Bottle', icon: 'bottle.png', category: 'equipment' },
    { id: 'bottle3', name: 'Bottle', icon: 'bottle.png', category: 'equipment' },
    { id: 'bottle4', name: 'Bottle', icon: 'bottle.png', category: 'equipment' },
    { id: 'bottle5', name: 'Bottle', icon: 'bottle.png', category: 'equipment' },
    { id: 'bottle6', name: 'Bottle', icon: 'bottle.png', category: 'equipment' },

    // swords
    { id: 'sword_kokiri', name: 'Kokiri Sword', icon: 'sword_kokiri.png', category: 'sword' },
    { id: 'sword_razor', name: 'Razor Sword', icon: 'sword_razor.png', category: 'sword' },
    { id: 'sword_gilded', name: 'Gilded Sword', icon: 'sword_gilded.png', category: 'sword' },

    // shields
    { id: 'shield_hero', name: 'Hero Shield', icon: 'shield_hero.png', category: 'shield' },
    { id: 'shield_mirror', name: 'Mirror Shield', icon: 'shield_mirror.png', category: 'shield' },

    // transformation masks
    { id: 'mask_deku', name: 'Deku Mask', icon: 'mask_deku.png', category: 'mask' },
    { id: 'mask_goron', name: 'Goron Mask', icon: 'mask_goron.png', category: 'mask' },
    { id: 'mask_zora', name: 'Zora Mask', icon: 'mask_zora.png', category: 'mask' },
    { id: 'mask_fierce', name: 'Fierce Deity', icon: 'mask_fierce.png', category: 'mask' },

    //masks
    { id: 'mask_postman', name: 'Postman\'s Hat', icon: 'mask_postman.png', category: 'mask' },
    { id: 'mask_all_night', name: 'All-Night Mask', icon: 'mask_all_night.png', category: 'mask' },
    { id: 'mask_blast', name: 'Blast Mask', icon: 'mask_blast.png', category: 'mask' },
    { id: 'mask_stone', name: 'Stone Mask', icon: 'mask_stone.png', category: 'mask' },
    { id: 'mask_great_fairy', name: 'Great Fairy Mask', icon: 'mask_great_fairy.png', category: 'mask' },
    { id: 'mask_keaton', name: 'Keaton Mask', icon: 'mask_keaton.png', category: 'mask' },
    { id: 'mask_bremen', name: 'Bremen Mask', icon: 'mask_bremen.png', category: 'mask' },
    { id: 'mask_bunny', name: 'Bunny Hood', icon: 'mask_bunny.png', category: 'mask' },
    { id: 'mask_don_gero', name: 'Don Gero\'s Mask', icon: 'mask_don_gero.png', category: 'mask' },
    { id: 'mask_scents', name: 'Mask of Scents', icon: 'mask_scents.png', category: 'mask' },
    { id: 'mask_romani', name: 'Romani\'s Mask', icon: 'mask_romani.png', category: 'mask' },
    { id: 'mask_troupe', name: 'Circus Leader', icon: 'mask_troupe.png', category: 'mask' },
    { id: 'mask_kafei', name: 'Kafei\'s Mask', icon: 'mask_kafei.png', category: 'mask' },
    { id: 'mask_couple', name: 'Couple\'s Mask', icon: 'mask_couple.png', category: 'mask' },
    { id: 'mask_truth', name: 'Mask of Truth', icon: 'mask_truth.png', category: 'mask' },
    { id: 'mask_kamaro', name: 'Kamaro\'s Mask', icon: 'mask_kamaro.png', category: 'mask' },
    { id: 'mask_gibdo', name: 'Gibdo Mask', icon: 'mask_gibdo.png', category: 'mask' },
    { id: 'mask_garo', name: 'Garo\'s Mask', icon: 'mask_garo.png', category: 'mask' },
    { id: 'mask_captain', name: 'Captain\'s Hat', icon: 'mask_captain.png', category: 'mask' },
    { id: 'mask_giant', name: 'Giant\'s Mask', icon: 'mask_giant.png', category: 'mask' },

    //songs
    { id: 'song_time', name: 'Song of Time', icon: 'song_time.png', category: 'song' },
    { id: 'song_healing', name: 'Song of Healing', icon: 'song_healing.png', category: 'song' }, //
    { id: 'song_epona', name: 'Epona\'s Song', icon: 'song_epona.png', category: 'song' },
    { id: 'song_soaring', name: 'Song of Soaring', icon: 'song_soaring.png', category: 'song' },
    { id: 'song_storms', name: 'Song of Storms', icon: 'song_storms.png', category: 'song' },
    { id: 'song_sonata', name: 'Sonata of Awakening', icon: 'song_sonata.png', category: 'song' }, //
    { id: 'song_lullaby', name: 'Goron Lullaby', icon: 'song_lullaby.png', category: 'song' },
    { id: 'song_bossa', name: 'New Wave Bossa Nova', icon: 'song_bossa.png', category: 'song' },
    { id: 'song_elegy', name: 'Elegy of Emptiness', icon: 'song_elegy.png', category: 'song' },
    { id: 'song_oath', name: 'Oath to Order', icon: 'song_oath.png', category: 'song' },

    // boss remains
    { id: 'remains_odolwa', name: 'Odolwa\'s Remains', icon: 'remains_odolwa.png', category: 'remains' },
    { id: 'remains_goht', name: 'Goht\'s Remains', icon: 'remains_goht.png', category: 'remains' },
    { id: 'remains_gyorg', name: 'Gyorg\'s Remains', icon: 'remains_gyorg.png', category: 'remains' },
    { id: 'remains_twinmold', name: 'Twinmold\'s Remains', icon: 'remains_twinmold.png', category: 'remains' },

    // quest items
    { id: 'quest_tear', name: 'Moon\'s Tear', icon: 'quest_tear.png', category: 'quest' },
    { id: 'quest_deed_land', name: 'Land Title Deed', icon: 'quest_deed_land.png', category: 'quest' },
    { id: 'quest_deed_swamp', name: 'Swamp Title Deed', icon: 'quest_deed_swamp.png', category: 'quest' },
    { id: 'quest_deed_mountain', name: 'Mountain Title Deed', icon: 'quest_deed_mountain.png', category: 'quest' },
    { id: 'quest_deed_ocean', name: 'Ocean Title Deed', icon: 'quest_deed_ocean.png', category: 'quest' },
    { id: 'quest_room_key', name: 'Room Key', icon: 'quest_room_key.png', category: 'quest' },
    { id: 'quest_letter_kafei', name: 'Letter to Kafei', icon: 'quest_letter_kafei.png', category: 'quest' },
    { id: 'quest_pendant', name: 'Pendant of Memories', icon: 'quest_pendant.png', category: 'quest' },
    { id: 'quest_letter_mama', name: 'Letter to Mama', icon: 'quest_letter_mama.png', category: 'quest' },
    ];
