<template>
  <div :class="'section-' + title">
    <h2
      class=" flex mb-5 uppercase before:contents-[''] before:relative before:top-1 before:mr-1 before:w-6 before:h-6 before:bg-orange-400 before:inline-block font-bold text-sm">
      {{ title }}
    </h2>
    <div class="content">
      <article v-for="(post, index) in $limitPosts(posts, limit)" :key="index" class="mb-6 grid"
        :class="checkStyle(style) ? 'grid-flow-col grid-cols-[38%,1fr] lg:grid-cols-[100px,1fr] gap-1' : ''">
        <NuxtLink :href="post.slugname" class="mb-2 block">
          <ImageCustom :thumbnail="$getThumbnail(post.contents)" :title="post.title" />
        </NuxtLink>
        <NuxtLink :href="post.slugname">
          <h5 class="font-bold" :class="checkStyle(style) ? 'text-xs' : 'text-md'">
            {{ post.title }}
          </h5>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
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
const props = defineProps(['title', 'style'])
const limit = ref(3)
const { $getThumbnail, $limitPosts } = useNuxtApp()

const checkStyle = (style: string) => {
  return style === 'horizontal'
}
</script>

<style scoped></style>