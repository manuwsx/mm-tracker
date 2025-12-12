export interface ItemStage {
  id: string; //specific item id
  name: string;
  icon: string;
}

export interface ItemDef {
  id: string; //grid id
  category: 'mask' | 'equipment' | 'progressive' | 'song' | 'remains' | 'quest' | 'strays';
  stages: ItemStage[];
}

export const items: ItemDef[] = [
  //equipment
  { 
    id: 'ocarina', 
    category: 'equipment', 
    stages: [{ id: 'ocarina', name: 'Ocarina of Time', icon: 'ocarina.png' }] 
  },
  { 
    id: 'bow', 
    category: 'equipment', 
    stages: [
      { id: 'bow', name: 'Hero Bow (30)', icon: 'bow.png' },
      { id: 'bow_40', name: 'Hero Bow (40)', icon: 'bow40.png' }, 
      { id: 'bow_50', name: 'Hero Bow (50)', icon: 'bow50.png' } 
    ]
  },
  { 
    id: 'fire_arrow', 
    category: 'equipment', 
    stages: [{ id: 'fire_arrow', name: 'Fire Arrow', icon: 'fire_arrow.png' }] 
  },
  { 
    id: 'ice_arrow', 
    category: 'equipment', 
    stages: [{ id: 'ice_arrow', name: 'Ice Arrow', icon: 'ice_arrow.png' }] 
  },
  { 
    id: 'light_arrow', 
    category: 'equipment', 
    stages: [{ id: 'light_arrow', name: 'Light Arrow', icon: 'light_arrow.png' }] 
  },
  { 
    id: 'bomb', 
    category: 'equipment', 
    stages: [
      { id: 'bomb', name: 'Bomb (20)', icon: 'bomb.png' },
      { id: 'bomb_30', name: 'Bomb (30)', icon: 'bomb30.png' }, 
      { id: 'bomb_40', name: 'Bomb (40)', icon: 'bomb40.png' } 
    ]
  },
  { 
    id: 'bombchu', 
    category: 'equipment', 
    stages: [{ id: 'bombchu', name: 'Bombchu', icon: 'bombchu.png' }] 
  },
  { 
    id: 'stick', 
    category: 'equipment', 
    stages: [{ id: 'stick', name: 'Deku Stick', icon: 'stick.png' }] 
  },
  { 
    id: 'nut', 
    category: 'equipment', 
    stages: [{ id: 'nut', name: 'Deku Nut', icon: 'nut.png' }] 
  },
  { 
    id: 'bean', 
    category: 'equipment', 
    stages: [{ id: 'bean', name: 'Magic Bean', icon: 'bean.png' }] 
  },
  { 
    id: 'keg', 
    category: 'equipment', 
    stages: [{ id: 'keg', name: 'Powder Keg', icon: 'keg.png' }] 
  },
  { 
    id: 'picto', 
    category: 'equipment', 
    stages: [{ id: 'picto', name: 'Pictograph Box', icon: 'picto.png' }] 
  },
  { 
    id: 'lens', 
    category: 'equipment', 
    stages: [{ id: 'lens', name: 'Lens of Truth', icon: 'lens.png' }] 
  },
  { 
    id: 'hookshot', 
    category: 'equipment', 
    stages: [{ id: 'hookshot', name: 'Hookshot', icon: 'hookshot.png' }] 
  },
  { 
    id: 'fairy_sword', 
    category: 'equipment', 
    stages: [{ id: 'fairy_sword', name: 'Great Fairy Sword', icon: 'fairy_sword.png' }] 
  },
  { id: 'bottle1', category: 'equipment', stages: [{ id: 'bottle1', name: 'Bottle 1', icon: 'bottle.png' }] },
  { id: 'bottle2', category: 'equipment', stages: [{ id: 'bottle2', name: 'Bottle 2', icon: 'bottle.png' }] },
  { id: 'bottle3', category: 'equipment', stages: [{ id: 'bottle3', name: 'Bottle 3', icon: 'bottle.png' }] },
  { id: 'bottle4', category: 'equipment', stages: [{ id: 'bottle4', name: 'Bottle 4', icon: 'bottle.png' }] },
  { id: 'bottle5', category: 'equipment', stages: [{ id: 'bottle5', name: 'Bottle 5', icon: 'bottle.png' }] },
  { id: 'bottle6', category: 'equipment', stages: [{ id: 'bottle6', name: 'Bottle 6', icon: 'bottle.png' }] },

  // progressive items
  { 
    id: 'sword', 
    category: 'progressive', 
    stages: [
      { id: 'sword_kokiri', name: 'Kokiri Sword', icon: 'sword_kokiri.png' },
      { id: 'sword_razor', name: 'Razor Sword', icon: 'sword_razor.png' },
      { id: 'sword_gilded', name: 'Gilded Sword', icon: 'sword_gilded.png' }
    ]
  },
  { 
    id: 'shield', 
    category: 'progressive', 
    stages: [
      { id: 'shield_hero', name: 'Hero Shield', icon: 'shield_hero.png' },
      { id: 'shield_mirror', name: 'Mirror Shield', icon: 'shield_mirror.png' }
    ]
  },
  {
    id: 'magic',
    category: 'progressive',
    stages: [
      { id: 'magic_1', name: 'Magic Power', icon: 'magic_small.png' },  
      { id: 'magic_2', name: 'Double Magic', icon: 'magic_double.png' } 
    ]
  },
  { 
    id: 'wallet',
    category: 'progressive',
    stages: [
      { id: 'wallet_1', name: 'Adult\'s Wallet', icon: 'wallet_200.png' },
      { id: 'wallet_2', name: 'Giant\'s Wallet', icon: 'wallet_500.png' }
    ]
  },

  //trasnformation masks
  { id: 'mask_deku', category: 'mask', stages: [{ id: 'mask_deku', name: 'Deku Mask', icon: 'mask_deku.png' }] },
  { id: 'mask_goron', category: 'mask', stages: [{ id: 'mask_goron', name: 'Goron Mask', icon: 'mask_goron.png' }] },
  { id: 'mask_zora', category: 'mask', stages: [{ id: 'mask_zora', name: 'Zora Mask', icon: 'mask_zora.png' }] },
  { id: 'mask_fierce', category: 'mask', stages: [{ id: 'mask_fierce', name: 'Fierce Deity', icon: 'mask_fierce.png' }] },

  //masks
  { id: 'mask_postman', category: 'mask', stages: [{ id: 'mask_postman', name: 'Postman\'s Hat', icon: 'mask_postman.png' }] },
  { id: 'mask_all_night', category: 'mask', stages: [{ id: 'mask_all_night', name: 'All-Night Mask', icon: 'mask_all_night.png' }] },
  { id: 'mask_blast', category: 'mask', stages: [{ id: 'mask_blast', name: 'Blast Mask', icon: 'mask_blast.png' }] },
  { id: 'mask_stone', category: 'mask', stages: [{ id: 'mask_stone', name: 'Stone Mask', icon: 'mask_stone.png' }] },
  { id: 'mask_great_fairy', category: 'mask', stages: [{ id: 'mask_great_fairy', name: 'Great Fairy Mask', icon: 'mask_great_fairy.png' }] },
  { id: 'mask_keaton', category: 'mask', stages: [{ id: 'mask_keaton', name: 'Keaton Mask', icon: 'mask_keaton.png' }] },
  { id: 'mask_bremen', category: 'mask', stages: [{ id: 'mask_bremen', name: 'Bremen Mask', icon: 'mask_bremen.png' }] },
  { id: 'mask_bunny', category: 'mask', stages: [{ id: 'mask_bunny', name: 'Bunny Hood', icon: 'mask_bunny.png' }] },
  { id: 'mask_don_gero', category: 'mask', stages: [{ id: 'mask_don_gero', name: 'Don Gero\'s Mask', icon: 'mask_don_gero.png' }] },
  { id: 'mask_scents', category: 'mask', stages: [{ id: 'mask_scents', name: 'Mask of Scents', icon: 'mask_scents.png' }] },
  { id: 'mask_romani', category: 'mask', stages: [{ id: 'mask_romani', name: 'Romani\'s Mask', icon: 'mask_romani.png' }] },
  { id: 'mask_troupe', category: 'mask', stages: [{ id: 'mask_troupe', name: 'Circus Leader', icon: 'mask_troupe.png' }] },
  { id: 'mask_kafei', category: 'mask', stages: [{ id: 'mask_kafei', name: 'Kafei\'s Mask', icon: 'mask_kafei.png' }] },
  { id: 'mask_couple', category: 'mask', stages: [{ id: 'mask_couple', name: 'Couple\'s Mask', icon: 'mask_couple.png' }] },
  { id: 'mask_truth', category: 'mask', stages: [{ id: 'mask_truth', name: 'Mask of Truth', icon: 'mask_truth.png' }] },
  { id: 'mask_kamaro', category: 'mask', stages: [{ id: 'mask_kamaro', name: 'Kamaro\'s Mask', icon: 'mask_kamaro.png' }] },
  { id: 'mask_gibdo', category: 'mask', stages: [{ id: 'mask_gibdo', name: 'Gibdo Mask', icon: 'mask_gibdo.png' }] },
  { id: 'mask_garo', category: 'mask', stages: [{ id: 'mask_garo', name: 'Garo\'s Mask', icon: 'mask_garo.png' }] },
  { id: 'mask_captain', category: 'mask', stages: [{ id: 'mask_captain', name: 'Captain\'s Hat', icon: 'mask_captain.png' }] },
  { id: 'mask_giant', category: 'mask', stages: [{ id: 'mask_giant', name: 'Giant\'s Mask', icon: 'mask_giant.png' }] },

  //songs
  { id: 'song_time', category: 'song', stages: [{ id: 'song_time', name: 'Song of Time', icon: 'song_time.png' }] },
  { id: 'song_healing', category: 'song', stages: [{ id: 'song_healing', name: 'Song of Healing', icon: 'song_healing.png' }] },
  { id: 'song_epona', category: 'song', stages: [{ id: 'song_epona', name: 'Epona\'s Song', icon: 'song_epona.png' }] },
  { id: 'song_soaring', category: 'song', stages: [{ id: 'song_soaring', name: 'Song of Soaring', icon: 'song_soaring.png' }] },
  { id: 'song_storms', category: 'song', stages: [{ id: 'song_storms', name: 'Song of Storms', icon: 'song_storms.png' }] },
  { id: 'song_sonata', category: 'song', stages: [{ id: 'song_sonata', name: 'Sonata of Awakening', icon: 'song_sonata.png' }] },
  { id: 'song_lullaby', category: 'song', stages: [{ id: 'song_lullaby', name: 'Goron Lullaby', icon: 'song_lullaby.png' }] },
  { id: 'song_bossa', category: 'song', stages: [{ id: 'song_bossa', name: 'New Wave Bossa Nova', icon: 'song_bossa.png' }] },
  { id: 'song_elegy', category: 'song', stages: [{ id: 'song_elegy', name: 'Elegy of Emptiness', icon: 'song_elegy.png' }] },
  { id: 'song_oath', category: 'song', stages: [{ id: 'song_oath', name: 'Oath to Order', icon: 'song_oath.png' }] },

  //boss remains
  { id: 'remains_odolwa', category: 'remains', stages: [{ id: 'remains_odolwa', name: 'Odolwa\'s Remains', icon: 'remains_odolwa.png' }] },
  { id: 'remains_goht', category: 'remains', stages: [{ id: 'remains_goht', name: 'Goht\'s Remains', icon: 'remains_goht.png' }] },
  { id: 'remains_gyorg', category: 'remains', stages: [{ id: 'remains_gyorg', name: 'Gyorg\'s Remains', icon: 'remains_gyorg.png' }] },
  { id: 'remains_twinmold', category: 'remains', stages: [{ id: 'remains_twinmold', name: 'Twinmold\'s Remains', icon: 'remains_twinmold.png' }] },

  //stray fairies
  { id: 'fairy_wf', category: 'strays', stages: [{ id: 'fairy_wf', name: 'Woodfall Fairies', icon: 'fairy_woodfall.png' }] },
  { id: 'fairy_sh', category: 'strays', stages: [{ id: 'fairy_sh', name: 'Snowhead Fairies', icon: 'fairy_snowhead.png' }] },
  { id: 'fairy_gb', category: 'strays', stages: [{ id: 'fairy_gb', name: 'Great Bay Fairies', icon: 'fairy_greatbay.png' }] },
  { id: 'fairy_st', category: 'strays', stages: [{ id: 'fairy_st', name: 'Stone Tower Fairies', icon: 'fairy_stonetower.png' }] },

  //quest items
  { id: 'quest_tear', category: 'quest', stages: [{ id: 'quest_tear', name: 'Moon\'s Tear', icon: 'quest_tear.png' }] },
  { id: 'quest_deed_land', category: 'quest', stages: [{ id: 'quest_deed_land', name: 'Land Title Deed', icon: 'quest_deed_land.png' }] },
  { id: 'quest_deed_swamp', category: 'quest', stages: [{ id: 'quest_deed_swamp', name: 'Swamp Title Deed', icon: 'quest_deed_swamp.png' }] },
  { id: 'quest_deed_mountain', category: 'quest', stages: [{ id: 'quest_deed_mountain', name: 'Mountain Title Deed', icon: 'quest_deed_mountain.png' }] },
  { id: 'quest_deed_ocean', category: 'quest', stages: [{ id: 'quest_deed_ocean', name: 'Ocean Title Deed', icon: 'quest_deed_ocean.png' }] },
  { id: 'quest_room_key', category: 'quest', stages: [{ id: 'quest_room_key', name: 'Room Key', icon: 'quest_room_key.png' }] },
  { id: 'quest_letter_kafei', category: 'quest', stages: [{ id: 'quest_letter_kafei', name: 'Letter to Kafei', icon: 'quest_letter_kafei.png' }] },
  { id: 'quest_pendant', category: 'quest', stages: [{ id: 'quest_pendant', name: 'Pendant of Memories', icon: 'quest_pendant.png' }] },
  { id: 'quest_letter_mama', category: 'quest', stages: [{ id: 'quest_letter_mama', name: 'Letter to Mama', icon: 'quest_letter_mama.png' }] },
];