<template>
  <div class="container">
    <article class="article">
      <header class="article_heading ">
        <h1 class="heading_title">
          {{ initNewsData.title }}
        </h1>
        <p class="heading_excerpt">
          {{ initNewsData.metaContent }}
        </p>
        <div class="heading_meta">
          <div class="w-author">
            <span class="meta_txt author lighter">By</span>
            <a class="meta_txt author"> {{ initNewsData.author }}</a>
          </div>
          <span class="meta_txt"><time :datetime="initNewsData.createdAt">{{ getDatePublic }}</time></span>
        </div>
        <div v-if="getMetaImg" class="heading_image responsive-img" :data-img-url="getMetaImg"
          data-modal-id="single-image-modal" data-modal-container-id="single-image-modal-container"
          data-img-caption="&quot;&quot;">
          <figure>
            <picture>
              <source :srcset="getMetaImg">
              <img width="1800" height="900" alt="Surprised Pikachu looking at Weedle" :data-img-url="getMetaImg"
                class="img-meta">
            </picture>
            <figcaption class="item-img-caption"></figcaption>
          </figure>
        </div>
      </header>
      <section class="article-body" itemprop="articleBody">
        <div class="content-block">
          <template v-for="(el, idx) in initNewsData.newsContent" :key="idx">
            <div v-if="el.type === 'image'" class="body-img">
              <div class="responsive-img img-article-item" :data-img-url="el.content" data-modal-id="single-image-modal"
                data-modal-container-id="single-image-modal-container" data-img-caption="&quot;&quot;">
                <figure>
                  <picture>
                    <source :srcset="el.content">
                    <img width="1800" height="900" alt="Surprised Pikachu looking at Weedle" :data-img-url="el.content"
                      class="img-meta">
                  </picture>
                  <figcaption class="item-img-caption"></figcaption>
                </figure>
              </div>
            </div>
            <div v-else-if="el.type === 'iframe'" class="w-iframe">
                <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" height="500" width="640" :src="el.content"/>
            </div>
            <h2 v-else-if="el.type === 'h2'">{{ el.content }}</h2>
            <p v-else>{{ el.content }}</p>
          </template>
        </div>
        <SharingSocial :url="getCurrentUrl" :title="initNewsData.title" :media="getMetaImg"/>
      </section>
      <aside class="sidebar ads-rail-container">
        <div class="section-header">
            <h3 class="section-title">Trending Now</h3>
        </div>
      </aside>
    </article>

  </div>
</template>
<script setup lang="ts">
import { INewsContent } from '../utils/model';
import moment from 'moment';
interface Props {
  title: string,
  author: string,
  timeAt: string,
  categoryType: number,
  createdAt: string,
  contents: INewsContent[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Pokemon Art Turns Pikachu into a Bug-Type',
  author: 'CAMERON SWAN',
  timeAt: '2023-09-24',
  categoryType: 1,
  createdAt: '2023-09-24T12:00:00Z',
  contents: () => [
    {
      type: 'text',
      name: 'meta',
      content: 'A talented Pokemon fan draws a creative take on Pikachu as a Bug-type pocket monster, in addition to envisioning one of its moves.'
    },
    {
      type: 'image',
      name: 'image-meta',
      content: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/surprised-pikachu-looking-at-weedle.jpg'
    },
    {
      type:'h2',
      name: 'text',
      content: "The most common types of Pokemon"
    },
    {
      type: 'p',
      name: 'text',
      content: 'One Pokemon fan and talented artist recently went through the effort of envisioning Pikachu as an Electric/Bug-type pocket monster. The end result of his endeavor later made the rounds on social media, adding to the ever-growing pile of impressive Pokemon fan reimaginings.'
    },
    {
      type: 'image',
      name: 'image-meta',
      content: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/surprised-pikachu-looking-at-weedle.jpg'
    },
    {
      type: 'p',
      name: 'text',
      content: 'The most common types of Pokemon fan art aiming to shake up iconic creature designs generally fall into one of two categories: fusions and typing variations. Both approaches can yield some truly peculiar results, although many artists find eye-catching Pokemon fusions to be more straightforward to create, not least because they always come down to combining features of existing Pokemon.'
    },
    {
      type: 'p',
      name: 'text',
      content: "Nevertheless, YouTuber JJonnyDraws recently opted for a much bigger challenge, having decided to turn Pikachu into a dual-type Pokemon based on a random wheel spin. And while the content creator wasn't hoping to roll a Bug type, he still did an admirable job of following through on that peculiar combination. He dubbed the resulting concept Pikabee, using mimicry insects like phasmids for inspiration. Their unique creature is thus effectively a bug covered in a Pikachu-like pattern, whose red cheeks are actually its eyes. JJonnyDraws even went through the effort of designing a shiny version of this Pikachu clone, which he mostly painted dark brown, perhaps as a reference to the shiny Alolan Raichu palette."
    },
    {
      type: 'iframe',
      name: 'reddit',
      content: "https://embed.reddit.com/r/pokemon/comments/16s1o9j/i_drew_a_bug_type_pikachu/?embed=true&ref_source=embed&ref=share&utm_medium=widgets&utm_source=embedv2&utm_term=23&utm_name=post_embed&embed_host_url=https%3A%2F%2Fgamerant.com%2Fpokemon-bug-type-pikachu-fan-art%2F"
    },
    {
      type: 'p',
      name: 'text',
      content: "Reflecting on his accomplishment, the YouTuber revealed that he didn't want to go the creepy Pokemon route by turning Pikachu into a centipede or otherwise making it more insectoid than necessary. The amount of thought that went into this design is also evidenced by the fact that JJonnyDraws even decided on one of Pikabee's moves, Compound Eyes. That accuracy-boosting skill has long been a staple of Bug-type Pokemon throughout the series."
    },
    {
      type: 'iframe',
      name: 'reddit',
      content: "https://www.youtube.com/embed/jge5U0MjIHQ"
    },
    {
      type: 'p',
      name: 'text',
      content: "This distinct Pikachu redesign also serves as a reminder that the Pokemon franchise has yet to introduce an Electric/Bug dual-type pocket monster after almost three decades of existence. Granted, there are four creatures—Joltik, Galvantula, Charjabug, and Vikavolt—that fit that rough typing combination, but all of them are primarily bugs with a secondary Electric type."
    },
    {
      type: 'p',
      name: 'text',
      content: "While no entry in the franchise ever made a gameplay distinction between primary and secondary half-types, their order has always been important in determining the overall appearance of a given pocket monster. This means that an Electric/Bug Pokemon would have to look not like an insect, but like something that draws from the much more varied pool of potential Electric Pokemon inspirations, which is easier said than done."
    }
  ]

});
const initNewsData = computed(() => {
  let metaContent = props.contents[0].content;
  let newsContent = props.contents.filter(e => !['meta', 'image-meta'].includes(e.name));
  let result = {
    title: props.title,
    author: props.author,
    createdAt: props.createdAt,
    metaContent,
    newsContent
  }
  return result
})
const getDatePublic = computed(() => {
  let datePublic = new Date(props.createdAt);
  let result = Math.ceil((new Date().getTime() - datePublic.getTime()) / (24 * 60 * 60 * 1000));
  if (result <= 31) return `Published ${result} days ago`;
  else return `Published ${moment(props.createdAt).format("YYYY-MM-DD")}`;
})
const getMetaImg = computed(() => {
  const result = props.contents.find((element) => element.name == 'image-meta');
  return result?.content || '';
})

const getCurrentUrl = computed(() => {
  const route = useRoute();
  const url = 'http://localhost:3000'
  return url + route.fullPath;
})
</script>