<template>
  <section v-editable="blok">
    <!-- start intro section-slider -->
    <!-- <home-intro /> -->
    <!-- #intro -->
    <about
    :about_title="about_title"/>
    <!-- #about -->
    <!-- <features /> -->
    <!-- #features -->
    <!-- <advanced-features /> -->
    <!-- #advanced-features -->
    <!-- <call-to-action /> -->
    <!-- #call-to-action -->
    <!-- <more-features /> -->
    <!-- #more-features -->
    <!-- <clients /> -->
    <!-- #more-features -->
    <!-- <products /> -->
    <!-- #pricing -->
    <!-- <faq /> -->
    <!-- #faq -->
    <!-- <team /> -->
    <!-- #team -->
    <!-- <gallery /> -->
    <!-- #gallery -->
    <!-- <contact /> -->
    <!-- #contact -->
    <!-- <section id="posts">
      <post-preview
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :excerpt="post.previewText"
        :thumbnailImage="post.thumbnailUrl"
        :id="post.id"
      />
    </section>-->
    <!-- #blog -->
    <h2>Loading .............................................................................................</h2>
  </section>
</template>

<script>
// import PostPreview from "@/components/Blog/PostPreview";

export default {
  data() {
    return {
      about_title: 'Viridi Solutions (Private) Limited'
    }
  },
  asyncData(context) {
    // Load the JSON from the API
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: "published"
      })
      .then(res => {
        // console.log('tag', res)
        return {
          blok: res.data.story.content,
          about_title: res.data.story.content.about_title
        }
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  mounted() {
    // this.$storybridge.init()
    // this.$storybridge.on("change", () => {
    //   location.reload(true)
    // })
  }
};
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
