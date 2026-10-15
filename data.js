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
      { text: "Hop in the car and drive", nextScene: "escape" },
      { text: "Follow the glowing alley", nextScene: "caught" }
    ]
  },
  building: {
    title: "The Abandoned Building",
    text: "The door slams shut behind you. Inside, a staircase leads up and a heavy door leads down to the basement.",
    choices: [
      { text: "Go up the stairs", nextScene: "trapped" },
      { text: "Run back out the window", nextScene: "street" }
    ]
  },
  escape: {
    title: "Escape",
    text: "The engine roars to life. You speed out of town as the sun rises behind you. You made it.",
    result: "win"
  },
  caught: {
    title: "Caught",
    text: "The glow was a lure. A tall shadow steps out of the dark and grabs you before you can scream.",
    result: "lose"
  },
  trapped: {
    title: "Trapped Forever",
    text: "The stairs vanish behind you. Every door leads back to the same room. You are never leaving.",
    result: "lose"
  }
};