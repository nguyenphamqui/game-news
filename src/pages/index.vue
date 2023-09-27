<template>
  <div class="content-container">
    <div class="max-w-7xl mx-auto px-3 md:px-3 lg:px-0 ">
      <section class="feature-wrapper w-full overflow-hidden lg:grid lg:gap-5"
        :class="featureList.length > 3 ? 'lg:grid-cols-7' : 'lg:grid-cols-6'">
        <Article :articleList="featureList" :type="'feature'"/>
      </section>
      <section class="content-wrapper lg:grid lg:grid-cols-4 gap-2 mt-6">
        <section class="left-side col-span-3 mt-5">
          <Article :articleList="latestList" :type="'latest'" :title="'Latest'"/>
        </section>
        <section class="right-side lg:px-3 mt-5 w-full">
          <SubSection :title="'Popular'" :style="'vertical'" />
          <SubSection :title="'Trending'" :style="'horizontal'" />
        </section>
      </section>
    </div>

  </div>
</template>
<script setup lang="ts">
const featureList = [
  {
    title: "All Confirmed Features for The Lord of the Rings: Return to Moria",
    author: "nintendo",
    timeAt: '12/11/2023',
    contents: [
      {
        name: "text",
        content: "event",
        typeName: 1,
        _id: "abc123"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/dbd-8.jpg?q=50&fit=crop&w=535&h=442&dpr=1.5",
        typeName: 2,
        _id: "abc321"
      }
    ],
    categoryType: 1,
    slugname: "/lord-of-the-rings-return-to-moria-all-confirmed-features",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "One Gen 9 Pokedex Entry is a Chekhov's Gun for Pokemon Scarlet and Violet's Next DLC",
    author: "nintendo 2",
    timeAt: '12/01/2023',
    contents: [
      {
        name: "i",
        content: "event",
        typeName: 1,
        _id: "abc1223"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/pokemon-scarlet-violet-glimmora-dlc.jpg?q=50&fit=crop&w=365&h=212&dpr=1.5",
        typeName: 2,
        _id: "abc3221"
      }
    ],
    categoryType: 2,
    slugname: "/pokemon-scarlet-violet-dlc-gen-9-pokedex-chekhovs-gun",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Notable Mortal Kombat Characters Still Missing in Liu Kang's New Era",
    author: "nintendo-4",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "i",
        content: "event",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/mortal-kombat-1-roster-characters-missing.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 3,
    slugname: "/mortal-kombat-1-mk1-character-roster-list-missing-kabal-nightwolf-jade/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "The Case for Red Dead Redemption 3 to Break the Franchise's Most Defining Tradition",
    author: "nintendo-5",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "i",
        content: "event",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/red-dead-redemption-2-horse-dies-anticlimatic-way.jpeg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/red-dead-redemption-3-franchise-defining-tradition-protagonist-death/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Fallout: New Vegas and Fallout 4 Both Point to the Same Setting for the Fifth Game",
    author: "nintendo-5",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "i",
        content: "event",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/fallout-new-vegas-4-5-san-francisco-setting-rumors-in-game-evidence",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  }

]
const latestList = [
  {
    title: "Red Dead Redemption 2 PS5, Xbox Series X Ports Might Be Too Little, Too Late at this Point",
    author: "Jake Selway",
    timeAt: '12/11/2023',
    contents: [
      {
        name: "text",
        content: "PS5 and Xbox Series X ports of Red Dead Redemption 2 have been long demanded by fans, but Rockstar may have missed the boat for such a release.",
        typeName: 1,
        _id: "abc123"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/red-dead-redemption-2-ps5-series-x.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc321"
      }
    ],
    categoryType: 1,
    slugname: "/red-dead-redemption-2-ps5-xbox-ports-too-late/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "New Hideo Kojima Picture Sparks PlayStation State of Play Rumors",
    author: "Dominik Bošnjak",
    timeAt: '12/01/2023',
    contents: [
      {
        name: "text",
        content: "A seemingly mundane photo of Hideo Kojima sparks rumors that yet another PlayStation State of Play broadcast is already on the horizon.",
        typeName: 1,
        _id: "abc1223"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/pokemon-scarlet-violet-glimmora-dlc.jpg?q=50&fit=crop&w=365&h=212&dpr=1.5",
        typeName: 2,
        _id: "abc3221"
      }
    ],
    categoryType: 2,
    slugname: "/hideo-kojima-picture-playstation-state-of-play-rumors/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Genshin Impact Leak Reveals Complete Model for Version 4.2 World Boss",
    author: "Berat Özkan",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "A new Genshin Impact leak reveals the complete model of a mysterious world boss, which will allegedly be added in version 4.2.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/genshin-impact-4-0-release-date-fontaine-castle.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 3,
    slugname: "/genshin-impact-leak-model-version-4-2-world-boss",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Dune: Spice Wars - How to Create a Private Match",
    author: "Umama Ali",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "Private matches in Dune: Spice Wars allow players to compete against their friends, and here's how players can create one.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/Dune-Spice-Wars-Featured.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/dune-spice-wars-how-create-private-match",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Mortal Kombat 1's Biggest Unanswered Questions",
    author: "nintendo-5",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "Mortal Kombat 1 concludes in grand fashion, but it still leaves players with many unanswered questions on the fate of the franchise moving forward.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/mortal-kombat-1-unanswered-questions.jpg?q=50&fit=crop&w=448&h=260&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/mortal-kombat-1-biggest-unanswered-questions/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Roleplaying, Art, and Charity on the Menu at Final Fantasy 14's A Feast Reborn",
    author: "Katelyn Kivel",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "Roleplayers in Final Fantasy 14 are gathering for a weekend to talk about food and fight real-world hunger at A Feast Reborn.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/ffxiv-afr-splash-1.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/final-fantasy-14-a-feast-reborn-charity-art-community-event/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "6 Things Payday 3 Does Better Than Payday 2",
    author: "Jake Fillery",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "Payday 3 has many improvements over Payday 2, and here are a few of them.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/collage-maker-26-sep-2023-10-53-am-6602.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/things-payday-3-better-payday-2/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "7 Forgotten Spider-Man Games",
    author: "Oliver Roberts",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "With Spider-Man games becoming more and more popular as the years go by, it's easy to see why some of them have been forgotten.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/forgotten-spider-man-games.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/forgotten-spider-man-games",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Red Dead Redemption 2 PS5, Xbox Series X Ports Might Be Too Little, Too Late at this Point",
    author: "Jake Selway",
    timeAt: '12/11/2023',
    contents: [
      {
        name: "text",
        content: "PS5 and Xbox Series X ports of Red Dead Redemption 2 have been long demanded by fans, but Rockstar may have missed the boat for such a release.",
        typeName: 1,
        _id: "abc123"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/red-dead-redemption-2-ps5-series-x.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc321"
      }
    ],
    categoryType: 1,
    slugname: "/red-dead-redemption-2-ps5-xbox-ports-too-late/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "New Hideo Kojima Picture Sparks PlayStation State of Play Rumors",
    author: "Dominik Bošnjak",
    timeAt: '12/01/2023',
    contents: [
      {
        name: "text",
        content: "A seemingly mundane photo of Hideo Kojima sparks rumors that yet another PlayStation State of Play broadcast is already on the horizon.",
        typeName: 1,
        _id: "abc1223"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/pokemon-scarlet-violet-glimmora-dlc.jpg?q=50&fit=crop&w=365&h=212&dpr=1.5",
        typeName: 2,
        _id: "abc3221"
      }
    ],
    categoryType: 2,
    slugname: "/hideo-kojima-picture-playstation-state-of-play-rumors/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Genshin Impact Leak Reveals Complete Model for Version 4.2 World Boss",
    author: "Berat Özkan",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "A new Genshin Impact leak reveals the complete model of a mysterious world boss, which will allegedly be added in version 4.2.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/genshin-impact-4-0-release-date-fontaine-castle.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 3,
    slugname: "/genshin-impact-leak-model-version-4-2-world-boss",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Dune: Spice Wars - How to Create a Private Match",
    author: "Umama Ali",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "Private matches in Dune: Spice Wars allow players to compete against their friends, and here's how players can create one.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/Dune-Spice-Wars-Featured.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/dune-spice-wars-how-create-private-match",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Mortal Kombat 1's Biggest Unanswered Questions",
    author: "nintendo-5",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "Mortal Kombat 1 concludes in grand fashion, but it still leaves players with many unanswered questions on the fate of the franchise moving forward.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/mortal-kombat-1-unanswered-questions.jpg?q=50&fit=crop&w=448&h=260&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/mortal-kombat-1-biggest-unanswered-questions/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "Roleplaying, Art, and Charity on the Menu at Final Fantasy 14's A Feast Reborn",
    author: "Katelyn Kivel",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "Roleplayers in Final Fantasy 14 are gathering for a weekend to talk about food and fight real-world hunger at A Feast Reborn.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/ffxiv-afr-splash-1.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/final-fantasy-14-a-feast-reborn-charity-art-community-event/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "6 Things Payday 3 Does Better Than Payday 2",
    author: "Jake Fillery",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "Payday 3 has many improvements over Payday 2, and here are a few of them.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/collage-maker-26-sep-2023-10-53-am-6602.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/things-payday-3-better-payday-2/",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  },
  {
    title: "7 Forgotten Spider-Man Games",
    author: "Oliver Roberts",
    timeAt: '12/05/2023',
    contents: [
      {
        name: "text",
        content: "With Spider-Man games becoming more and more popular as the years go by, it's easy to see why some of them have been forgotten.",
        typeName: 1,
        _id: "abc1213"
      },
      {
        name: "a",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/fallout_4_nuka-world_hubologists.jpg?q=50&fit=crop&w=737&h=450&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      },
      {
        name: "image",
        content: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/forgotten-spider-man-games.jpg?q=50&fit=crop&w=400&h=220&dpr=1.5",
        typeName: 2,
        _id: "abc3211"
      }
    ],
    categoryType: 2,
    slugname: "/forgotten-spider-man-games",
    _id: "6521abc",
    createAt: "2023-09-06T11:08:09.452Z",
    _v: 0
  }

]
</script>