<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 space-y-5">
      <div v-for="item in articles" :key="item.id">
        <ArticleItem :article="item" />
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <ArticlePageHandle :total="total" :size="size" @pageChange="pageChange" />
    </div>
  </div>
</template>

<script setup lang="ts">

const { pageArticle } = useArticle()

const queryPage = ref(1)
const total = ref(0)
const size = ref(5)

const articles = ref<Article[]>()

const getArticles = async () => {
  const { data } = await pageArticle(queryPage.value,size.value) as result
  articles.value = data.records
  total.value = data.total
}

const pageChange = (page: number) => {
  queryPage.value = page
  getArticles()
}


onMounted(() => {
  nextTick(() => {
    getArticles()
  })
})

</script>

<style scoped>
@media (min-width: 640px) {
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
