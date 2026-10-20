const scenes = {
  start: {
    title: "The Beginning",
    text: "You wake up on an empty street. Two paths lie ahead.",
    choices: [
      { text: "Explore the street", nextScene: "street" },
      { text: "Enter the building", nextScene: "building" }
    ]
  },
  street: {
    title: "The Silent Street",
    text: "Streetlights flicker as you walk. Footsteps echo behind you, but nobody is there. You spot a car with its keys inside, and an alley that glows faintly.",
    choices: [
      { text: "Hop in the car", nextScene: "car" },
      { text: "Follow the glowing alley", nextScene: "alley" }
    ]
  },
  building: {
    title: "The Abandoned Building",
    text: "The door slams shut behind you. Inside, a creaky staircase leads up and a heavy door leads down to the basement.",
    choices: [
      { text: "Go up the stairs", nextScene: "upstairs" },
      { text: "Open the basement door", nextScene: "basement" }
    ]
  },
  car: {
    title: "The Getaway Car",
    text: "The engine coughs, then starts. A few minutes later you reach a fork: a lonely gas station glows ahead, and a dark forest road bends away to the left.",
    choices: [
      { text: "Pull into the gas station", nextScene: "gasstation" },
      { text: "Take the forest road", nextScene: "forest" }
    ]
  },
  alley: {
    title: "The Glowing Alley",
    text: "The glow flickers on the walls. Near the entrance hangs an old lantern covered in strange symbols, and further along you see an iron gate leading to a graveyard.",
    choices: [
      { text: "Grab the lantern", nextScene: "lantern" },
      { text: "Slip through the graveyard gate", nextScene: "graveyard" }
    ]
  },
  upstairs: {
    title: "The Upstairs Hallway",
    text: "The hallway is long and dusty. At the end is a glowing red door, and next to you a broken window leads out onto a roof.",
    choices: [
      { text: "Open the red door", nextScene: "mirror" },
      { text: "Climb out the window", nextScene: "rooftop" }
    ]
  },
  basement: {
    title: "The Basement",
    text: "It smells damp down here. Something scratches behind the walls. You see a narrow tunnel and a pile of old boxes.",
    choices: [
      { text: "Crawl into the tunnel", nextScene: "tunnel" },
      { text: "Search the boxes", nextScene: "boxes" }
    ]
  },
  gasstation: {
    title: "The Gas Station",
    text: "The lights buzz overhead. The shop door hangs open, and an abandoned tow truck sits by the pumps with its engine still warm.",
    choices: [
      { text: "Search the shop", nextScene: "shop" },
      { text: "Check the tow truck", nextScene: "truck" }
    ]
  },
  forest: {
    title: "The Dark Forest",
    text: "Trees crowd the road and your headlights barely cut through the fog. You see a warm light in a cabin window, and the road ahead sinks into a swamp.",
    choices: [
      { text: "Walk to the cabin", nextScene: "cabin" },
      { text: "Drive toward the swamp", nextScene: "swamp" }
    ]
  },
  lantern: {
    title: "The Lantern's Secret",
    text: "The lantern lights up and the symbols on the walls begin to move. They all point toward a clock tower in the distance. Behind you, the graveyard gate creaks open.",
    choices: [
      { text: "Follow the symbols to the clock tower", nextScene: "clocktower" },
      { text: "Go into the graveyard", nextScene: "graveyard" }
    ]
  },
  graveyard: {
    title: "The Graveyard",
    text: "Crooked headstones lean in the mist. Every grave has your name on it, but the dates are all different. A small church stands at the far end, and a stone crypt door is open nearby.",
    choices: [
      { text: "Enter the church", nextScene: "church" },
      { text: "Descend into the crypt", nextScene: "crypt" }
    ]
  },
  mirror: {
    title: "The Mirror Room",
    text: "A giant mirror fills the room. Your reflection is smiling, but you are not. It slowly raises a hand toward the glass.",
    choices: [
      { text: "Touch the glass", nextScene: "mirrorworld" },
      { text: "Back away and use the window", nextScene: "rooftop" }
    ]
  },
  rooftop: {
    title: "The Rooftop",
    text: "From up here you can see the whole town. Far below, a tow truck rumbles slowly through the streets. In the center of town, a square glows under a single lamp.",
    choices: [
      { text: "Jump down onto the tow truck", nextScene: "truck" },
      { text: "Climb down to the town square", nextScene: "townsquare" }
    ]
  },
  tunnel: {
    title: "The Tunnel",
    text: "The tunnel is cold and wet. Ahead, the path splits: a rusty ladder leads up toward the forest, and a wide pipe leads to the sewers.",
    choices: [
      { text: "Climb the ladder", nextScene: "forest" },
      { text: "Follow the pipe to the sewers", nextScene: "sewer" }
    ]
  },
  boxes: {
    title: "The Old Boxes",
    text: "Inside the boxes you find a flashlight, some rope and a crumpled map. The map shows the tunnel and the sewers, with an X marked in the middle of town.",
    choices: [
      { text: "Follow the map through the sewers", nextScene: "sewer" },
      { text: "Go back and take the tunnel", nextScene: "tunnel" }
    ]
  },
  shop: {
    title: "The Gas Station Shop",
    text: "The shelves are empty except for a crackling radio on the counter. A door behind the counter is slightly open.",
    choices: [
      { text: "Listen to the radio", nextScene: "radio" },
      { text: "Check the back room", nextScene: "backroom" }
    ]
  },
  truck: {
    title: "The Tow Truck",
    text: "The keys are in the ignition and the tank is full. The road splits again: a highway runs out of town, and another road leads back to the town square.",
    choices: [
      { text: "Take the highway", nextScene: "highway" },
      { text: "Drive to the town square", nextScene: "townsquare" }
    ]
  },
  cabin: {
    title: "The Lonely Cabin",
    text: "The cabin is empty, but a fire is burning. On the table sits a rusty key with a tag that reads 'Exit'. The fire feels warm and tempting.",
    choices: [
      { text: "Inspect the key", nextScene: "keyroom" },
      { text: "Sit by the fire", nextScene: "fireside" }
    ]
  },
  swamp: {
    title: "The Swamp",
    text: "Your car sinks into the mud and you have to continue on foot. A small rowboat is tied to a post, and in the distance you can see lights on the water.",
    choices: [
      { text: "Take the rowboat", nextScene: "boat" },
      { text: "Walk back to the cabin", nextScene: "cabin" }
    ]
  },
  clocktower: {
    title: "The Clock Tower",
    text: "The clock is frozen at midnight. A huge bell hangs above you, and a ladder leads up to the very top of the tower.",
    choices: [
      { text: "Ring the bell", nextScene: "bell" },
      { text: "Climb to the top floor", nextScene: "topfloor" }
    ]
  },
  church: {
    title: "The Empty Church",
    text: "Candles light themselves as you walk down the aisle. On the altar lies a silver cross and a golden key. Behind the altar, a stairway leads down.",
    choices: [
      { text: "Take the key from the altar", nextScene: "altar" },
      { text: "Go down the hidden stairs", nextScene: "crypt" }
    ]
  },
  crypt: {
    title: "The Crypt",
    text: "The air is freezing. A stone coffin sits in the middle of the room with its lid slightly open. A ring glints on the floor next to it.",
    choices: [
      { text: "Take the ring", nextScene: "coffin" },
      { text: "Push the lid open", nextScene: "trapped" }
    ]
  },
  mirrorworld: {
    title: "The Other Side",
    text: "Your hand passes through the glass. You are now in a reversed copy of the room, and your reflection stands beside you, pointing at two different doors.",
    choices: [
      { text: "Face your reflection", nextScene: "reflection" },
      { text: "Run through the left door", nextScene: "townsquare" }
    ]
  },
  sewer: {
    title: "The Sewers",
    text: "Water drips from the ceiling and the smell is awful. Far ahead you see a metal grate with daylight-colored light behind it, and a side pipe that whispers your name.",
    choices: [
      { text: "Climb the grate", nextScene: "grate" },
      { text: "Crawl into the whispering pipe", nextScene: "fog" }
    ]
  },
  radio: {
    title: "The Strange Radio",
    text: "A calm voice repeats the same message: 'Go to the town square. Ring the bell. Do not look back.' Then the static grows louder.",
    choices: [
      { text: "Follow the voice to the town square", nextScene: "townsquare" },
      { text: "Smash the radio", nextScene: "caught" }
    ]
  },
  backroom: {
    title: "The Back Room",
    text: "Shelves of supplies line the walls and there is a bag of food next to a locked freezer. Something is thumping softly inside it.",
    choices: [
      { text: "Grab the supplies and run", nextScene: "highway" },
      { text: "Open the freezer", nextScene: "caught" }
    ]
  },
  highway: {
    title: "The Highway",
    text: "The road is long and empty. Signs in the headlights all say 'Turn Back'. Far ahead you see the shape of a bridge, and a side road leads back to the town square.",
    choices: [
      { text: "Keep going toward the bridge", nextScene: "bridge" },
      { text: "Turn onto the side road", nextScene: "townsquare" }
    ]
  },
  keyroom: {
    title: "The Key",
    text: "The key is heavy and warm. As you hold it, a hidden door opens in the wall, showing a path that leads straight back toward the town gate.",
    choices: [
      { text: "Follow the path to the gate", nextScene: "gate" },
      { text: "Go back to the fire", nextScene: "fireside" }
    ]
  },
  fireside: {
    title: "The Fireside",
    text: "The fire is warm and your eyes grow heavy. A whisper tells you to stay just a little longer. The key still sits on the table.",
    choices: [
      { text: "Stay and sleep", nextScene: "trapped" },
      { text: "Shake yourself awake and take the key", nextScene: "keyroom" }
    ]
  },
  boat: {
    title: "The Rowboat",
    text: "You row across black water. The lights ahead are not houses. They are eyes. Another light shines to the left, marking a muddy shore.",
    choices: [
      { text: "Row toward the lights", nextScene: "fog" },
      { text: "Row to the shore", nextScene: "townsquare" }
    ]
  },
  bell: {
    title: "The Bell",
    text: "You pull the rope and the bell rings out over the whole town. For a moment, everything goes quiet. Then the sky slowly begins to turn pink.",
    choices: [
      { text: "Ring it again", nextScene: "sunrise" },
      { text: "Run for cover", nextScene: "topfloor" }
    ]
  },
  topfloor: {
    title: "The Top Floor",
    text: "The wind howls through the open tower. Below you, shadows crawl across the streets. A hatch in the floor leads back down toward the square.",
    choices: [
      { text: "Take the hatch down", nextScene: "townsquare" },
      { text: "Jump to the next roof", nextScene: "caught" }
    ]
  },
  altar: {
    title: "The Golden Key",
    text: "The key hums in your hand. All the candles go out at once, and the church doors swing open, showing a road to the town gate.",
    choices: [
      { text: "Run for the gate", nextScene: "gate" },
      { text: "Stay inside the church", nextScene: "caught" }
    ]
  },
  coffin: {
    title: "The Ring",
    text: "The ring fits your finger perfectly. The coffin lid slides shut, and a hidden stairway rises out of the floor toward the surface.",
    choices: [
      { text: "Climb the stairway", nextScene: "townsquare" },
      { text: "Stay and look at the coffin", nextScene: "trapped" }
    ]
  },
  reflection: {
    title: "Your Reflection",
    text: "Your reflection grins and holds out its hand. 'Switch places with me,' it whispers. 'Only one of us can leave.'",
    choices: [
      { text: "Refuse and shove it away", nextScene: "townsquare" },
      { text: "Take its hand", nextScene: "trapped" }
    ]
  },
  grate: {
    title: "The Grate",
    text: "You push the grate open and climb out into the town square. The whole town is silent, and every window is watching you.",
    choices: [
      { text: "Walk into the square", nextScene: "townsquare" },
      { text: "Hide behind the grate", nextScene: "caught" }
    ]
  },
  townsquare: {
    title: "The Town Square",
    text: "A dry fountain stands in the middle of the square. Every road in town leads here. In the distance you can see the big iron town gate, closed and covered in chains.",
    choices: [
      { text: "Check the fountain", nextScene: "fountain" },
      { text: "Walk to the town gate", nextScene: "gate" }
    ]
  },
  fountain: {
    title: "The Fountain",
    text: "The fountain suddenly fills with dark water. A silver coin shines at the bottom, and the water is calling you to drink.",
    choices: [
      { text: "Take the silver coin", nextScene: "gate" },
      { text: "Drink the water", nextScene: "trapped" }
    ]
  },
  gate: {
    title: "The Town Gate",
    text: "The great gate stands before you, locked with a single heavy lock. Behind you, footsteps are getting closer and closer.",
    choices: [
      { text: "Break the lock", nextScene: "lockheld" },
      { text: "Climb over the wall", nextScene: "caught" }
    ]
  },
  bridge: {
    title: "The Bridge",
    text: "The highway ends at a long bridge. Something tall and thin stands in the middle of it, not moving. Your headlights flicker.",
    choices: [
      { text: "Floor the gas pedal", nextScene: "escape" },
      { text: "Stop and step out of the car", nextScene: "caught" }
    ]
  },
  finalroad: {
    title: "The Final Road",
    text: "The gate swings open onto a quiet road leading out of town. The sky is turning gray. Behind you, a voice calls your name.",
    choices: [
      { text: "Keep walking toward the sunrise", nextScene: "freedom" },
      { text: "Look back", nextScene: "trapped" }
    ]
  },
  escape: {
    title: "Escape",
    text: "You roar across the bridge and leave the town behind as the sun rises. The nightmare is finally over. You made it.",
    result: "win"
  },
  freedom: {
    title: "Freedom",
    text: "You walk out of the gate without looking back. A bright light fills the sky and the curse breaks. You wake up safe in your own bed.",
    result: "win"
  },
  sunrise: {
    title: "The Break of Dawn",
    text: "The bell rings one last time and the sun finally rises over the town. The shadows burn away, and the streets are filled with light. You are free.",
    result: "win"
  },
  caught: {
    title: "Caught",
    text: "A tall shadow steps out of the dark and grabs you before you can scream. The creature has found you.",
    result: "lose"
  },
  trapped: {
    title: "Trapped Forever",
    text: "Every door leads back to the same place. The town closes around you and you are never leaving.",
    result: "lose"
  },
  fog: {
    title: "Lost in the Fog",
    text: "A thick white fog swallows you. You walk for hours, but every step leads you back to the start. You are lost forever.",
    result: "lose"
  },
  lockheld: {
    title: "The Lock Holds",
    text: "The lock does not budge. Behind you the footsteps stop, and a cold whisper says that gates only open for those who carry a key. A tiny hut leans against the wall nearby.",
    choices: [
      { text: "Search the gatekeeper's hut", nextScene: "hut" },
      { text: "Climb over the wall", nextScene: "caught" }
    ]
  },
  hut: {
    title: "The Gatekeeper's Hut",
    text: "Dust covers everything. An old key hangs from a nail by the door, and under the bed something is breathing.",
    choices: [
      { text: "Take the key and run to the gate", nextScene: "gate" },
      { text: "Look under the bed", nextScene: "caught" }
    ]
  },
  ringpower: {
    title: "The Ring's Power",
    text: "The ring blazes with light. Your reflection screams and the mirror shatters into a thousand pieces. Behind the broken glass, a hidden door opens onto the road out of town.",
    choices: [
      { text: "Run through the hidden door", nextScene: "finalroad" },
      { text: "Pick up a shard of mirror", nextScene: "trapped" }
    ]
  },
  madness: {
    title: "Lost to Madness",
    text: "The whispers stop being scary. You answer them, then you agree with them, and then you cannot remember your own name. Midnight keeps you.",
    result: "lose"
  }
};

const defaultImage = {
  src: "images/default.jpg",
  alt: "A dark, empty town at midnight"
};

const sceneImages = {
  start: { src: "images/start.jpg", alt: "A moonlit deserted town street with a lone figure standing under a flickering lamp" },
  street: { src: "images/street.jpg", alt: "A silent street lined with dark buildings, glowing lamps and drifting fog" },
  building: { src: "images/building.jpg", alt: "An abandoned house at night with glowing windows and a bare tree beside it" },
  car: { src: "images/car.jpg", alt: "Headlights cutting through fog on a dark road, seen from inside a car" },
  alley: { src: "images/alley.jpg", alt: "A narrow alley with a lantern on the wall and an eerie green glow at the far end" },
  upstairs: { src: "images/upstairs.jpg", alt: "A dusty upstairs hallway with a door at the end glowing blood red" },
  basement: { src: "images/basement.jpg", alt: "A damp basement with old crates, pipes and a dark tunnel opening" },
  gasstation: { src: "images/gasstation.jpg", alt: "An empty gas station under glowing lights with an abandoned tow truck beside the pumps" },
  forest: { src: "images/forest.jpg", alt: "A foggy forest road beneath tall dark pine trees and the moon" },
  lantern: { src: "images/lantern.jpg", alt: "A glowing old lantern surrounded by strange floating symbols" },
  graveyard: { src: "images/graveyard.jpg", alt: "A moonlit graveyard with crooked headstones, bare trees and a small church" },
  mirror: { src: "images/mirror.jpg", alt: "A tall ornate mirror with a smiling reflection that has glowing red eyes" },
  rooftop: { src: "images/rooftop.jpg", alt: "A rooftop view over the sleeping town with a tow truck driving below" },
  tunnel: { src: "images/tunnel.jpg", alt: "A cold wet tunnel with a rusty ladder and water on the floor" },
  boxes: { src: "images/basement.jpg", alt: "Old crates in a dim basement, holding a flashlight, rope and a map" },
  shop: { src: "images/shop.jpg", alt: "A gas station shop with empty shelves and a crackling radio on the counter" },
  truck: { src: "images/truck.jpg", alt: "A yellow tow truck facing the viewer with glowing headlights in the fog" },
  cabin: { src: "images/cabin.jpg", alt: "A lonely log cabin in the woods with a warm glowing window" },
  swamp: { src: "images/swamp.jpg", alt: "A misty swamp with dead trees and glowing green lights floating over the water" },
  clocktower: { src: "images/clocktower.jpg", alt: "A tall clock tower with its clock frozen at midnight under a full moon" },
  church: { src: "images/church.jpg", alt: "An empty church with a candle-lit aisle leading to a silver cross on the altar" },
  crypt: { src: "images/crypt.jpg", alt: "A cold blue crypt with a stone coffin and a gold ring on the floor" },
  mirrorworld: { src: "images/mirrorworld.jpg", alt: "A reversed teal hallway with two doors and your reflection standing beside you" },
  sewer: { src: "images/sewer.jpg", alt: "A green sewer tunnel with a barred grate glowing at the far end" },
  radio: { src: "images/radio.jpg", alt: "A glowing vintage radio with its dial lit up in the dark" },
  backroom: { src: "images/backroom.jpg", alt: "A back room with a frosted freezer door that glows and has a red crack of light" },
  highway: { src: "images/highway.jpg", alt: "An empty highway at night with warning signs that say turn back" },
  keyroom: { src: "images/keyroom.jpg", alt: "A heavy glowing key on a table beside a hidden door filled with light" },
  fireside: { src: "images/fireside.jpg", alt: "A stone fireplace with a warm fire burning in a dark cabin" },
  boat: { src: "images/boat.jpg", alt: "A small rowboat on black water facing rows of glowing red eyes in the distance" },
  bell: { src: "images/bell.jpg", alt: "A huge golden bell in the clock tower against a pink dawn sky" },
  topfloor: { src: "images/topfloor.jpg", alt: "The open top floor of the tower looking out over the town at night" },
  altar: { src: "images/altar.jpg", alt: "A glowing golden key resting on a church altar between two candles" },
  coffin: { src: "images/coffin.jpg", alt: "A golden ring with a blue gem glowing beside a rising stone stairway" },
  reflection: { src: "images/reflection.jpg", alt: "You face your reflection, which holds out its hand and grins with red eyes" },
  grate: { src: "images/grate.jpg", alt: "A view of the moonlit sky and town through a round sewer grate" },
  townsquare: { src: "images/townsquare.jpg", alt: "A dry fountain in the town square with glowing lamps and an iron gate in the distance" },
  fountain: { src: "images/fountain.jpg", alt: "A fountain filled with dark water and a silver coin glowing at the bottom" },
  gate: { src: "images/gate.jpg", alt: "A huge iron gate covered in chains and locked with a gold padlock" },
  bridge: { src: "images/bridge.jpg", alt: "A long bridge at night with a tall thin figure standing in the middle" },
  finalroad: { src: "images/finalroad.jpg", alt: "The town gate swung open onto a road leading to the gray dawn" },
  escape: { src: "images/escape.jpg", alt: "A car crossing a bridge toward the rising sun" },
  freedom: { src: "images/freedom.jpg", alt: "A figure walking into a bright white light as the curse breaks" },
  sunrise: { src: "images/sunrise.jpg", alt: "The sun rising over the town as the shadows burn away" },
  caught: { src: "images/caught.jpg", alt: "A giant shadow creature with glowing red eyes towering over a small figure" },
  trapped: { src: "images/trapped.jpg", alt: "An endless hallway of doors that all lead back to the same place" },
  lockheld: { src: "images/gate.jpg", alt: "The huge iron gate stays locked as shadows gather behind you" },
  hut: { src: "images/cabin.jpg", alt: "A tiny dusty hut with a warm window beside the town wall" },
  ringpower: { src: "images/ringpower.jpg", alt: "A glowing gold ring and shattering shards of mirror" },
  madness: { src: "images/madness.jpg", alt: "Dozens of red eyes staring from the darkness around a single huge eye" },
  fog: { src: "images/fog.jpg", alt: "A lone figure lost in thick white fog" }
};

const items = {
  lantern: { name: "Old Lantern", icon: "🏮" },
  key: { name: "Old Key", icon: "🗝️" },
  ring: { name: "Crypt Ring", icon: "💍" }
};

const sceneItems = {
  lantern: "lantern",
  keyroom: "key",
  altar: "key",
  hut: "key",
  coffin: "ring"
};

const itemChoices = {
  gate: { item: "key", text: "Unlock the gate with your key", nextScene: "finalroad" },
  sewer: { item: "lantern", text: "Hold up the lantern and read the pipe markings", nextScene: "grate" },
  reflection: { item: "ring", text: "Hold up the ring", nextScene: "ringpower" }
};

const sanityChanges = {
  alley: -8, upstairs: -8, basement: -10, graveyard: -12, mirror: -15,
  rooftop: -4, tunnel: -8, radio: -8, backroom: -12, swamp: -10,
  boat: -12, topfloor: -8, crypt: -15, mirrorworld: -15, reflection: -15,
  sewer: -10, gate: -5, lockheld: -15, hut: -10, fountain: -8,
  cabin: 10, church: 10, bell: 10, altar: 8, keyroom: 5, ringpower: 10, coffin: 5, fireside: 5
};

};
