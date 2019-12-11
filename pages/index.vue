<template>
  <div>
    <!-- start intro section-slider -->
    <home-intro />
    <!-- #intro -->
    <about />
    <!-- #about -->
    <features />
    <!-- #features -->
    <!-- <advanced-features /> -->
    <!-- #advanced-features -->
    <call-to-action />
    <!-- #call-to-action -->
    <more-features />
    <!-- #more-features -->
    <clients />
    <!-- #more-features -->
    <products />
    <!-- #pricing -->
    <faq />
    <!-- #faq -->
    <team />
    <!-- #team -->
    <!-- <gallery /> -->
    <!-- #gallery -->
    <contact />
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
    </section> -->
    <!-- #blog -->
  </div>
</template>

<script>
// import PostPreview from "@/components/Blog/PostPreview";

export default {
  data() {
    return {
      posts: [
        {
          title: "A New Beginning",
          previewText: "This will be awesome, don't miss it!",
          thumbnailUrl:
            "http://www.healthyfood.co.uk/wp-content/uploads/2015/01/Cherry-tomato-bocc-olive-basil-pasta.jpg",
          id: "a-new-beginning"
        },
        {
          title: "A Second Beginning",
          previewText: "This will be awesome, don't miss it!",
          thumbnailUrl:
            "http://www.healthyfood.co.uk/wp-content/uploads/2015/01/Cherry-tomato-bocc-olive-basil-pasta.jpg",
          id: "a-second-beginning"
        },
        {
          title: "A Second Beginning",
          previewText: "This will be awesome, don't miss it!",
          thumbnailUrl:
            "http://www.healthyfood.co.uk/wp-content/uploads/2015/01/Cherry-tomato-bocc-olive-basil-pasta.jpg",
          id: "a-second-beginning"
        },
        {
          title: "A Second Beginning",
          previewText: "This will be awesome, don't miss it!",
          thumbnailUrl:
            "http://www.healthyfood.co.uk/wp-content/uploads/2015/01/Cherry-tomato-bocc-olive-basil-pasta.jpg",
          id: "a-second-beginning"
        }
      ]
    };
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
