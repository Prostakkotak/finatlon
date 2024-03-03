<template>
  <div class="index-page">
    <ImagesSlider />

    <Auth />

    <Heading> Этапы реализации проекта </Heading>

    <div class="index-page__stages">
      <Card v-for="stage in data.stages" :key="stage.name">
        <template #title>{{ stage.name }}</template>
        <template #subtitle> {{ stage.content.title }} </template>
        <template #content>
          {{ stage.content.text }}
        </template>
      </Card>
    </div>

    <Heading> Дополнительная информация </Heading>

    <div class="index-page__stages">
      <Card>
        <template #header>
          <img src="@/static/russia.webp" />
        </template>
        <template #title> География олимпиады </template>
        <template #content>
          За время проведения Олимпиады в ней приняли участие более 320 тысяч
          школьников из 85 субъектов РФ и стран СНГ
        </template>
      </Card>
      <Card>
        <template #header>
          <img src="@/static/books.png" alt="" />
        </template>
        <template #title> Преимущества для участников</template>

        <template #content>
          Интересные статьи и материалы для тех, кто интересуется олимпиадами
          школьников, экономическим образованием, финансовыми рынками и
          повышением финансовой и инвестиционной грамотности. Всероссийская
          олимпиада для старшеклассников по финансовой грамотности, финансовому
          рынку и защите прав потребителей финансовых услуг вошла в Перечень
          олимпиад школьников на 2018/19 учебный год, утвержденный Приказом
          Министерства науки и высшего образования РФ от 28 августа 2018 г. N
          32н под номером 4. Ей присвоен II уровень. А это означает, что
          победители и призеры олимпиады получат льготы при поступлении в лучшие
          экономические вузы страны.
        </template>
      </Card>
      <Card>
        <template #title>
          <a href="https://ifru.ru/">Образовательный центр</a>
        </template>

        <template #header>
          <img src="@/static/graduation-hat.png" alt="" />
        </template>
        <template #content>
          Новое в экономическом образовании, профессиональный рост.
        </template>
      </Card>
    </div>

    <PartnersSlider />

    <div class="index-page__divided-space">
      <div>
        <Heading
          ><i class="pi pi-align-left index-page__news-icon"></i> Последние
          Новости</Heading
        >

        <div class="index-page__news">
          <Card v-for="news in data.news.slice(-4)" :key="news.name">
            <template #header>
              <img :src="news.content.content" alt="" />
            </template>
            <template #title> {{ news.content.title }} </template>
            <template #subtitle> {{ news.content.source }} </template>
            <template #content>
              <div v-html="news.content.html"></div>
            </template>
          </Card>
        </div>
        <Card class="index-page__about-card">
          <template #header>
            <img src="@/static/studenti-big.jpg" alt="studenti" />
          </template>
          <template #title> О проекте </template>
          <template #content>
            <p>
              Олимпиада помогает найти талантливых, заинтересованных в получении
              знаний молодых людей, способных творчески решать поставленные
              задачи, нестандартно и оригинально мыслить, предлагать свои пути
              решения, опираясь на теоретические знания.
            </p>

            <p>
              Ежегодно во Всероссийской Олимпиаде по финансовой грамотности,
              финансовому рынку и защите прав потребителей финансовых услуг для
              старшеклассников принимает большое количество учащихся
              образовательных учреждений. В этом году оно составило более 79000
              человек
            </p>

            <p>
              Олимпиада проводится ежегодно с 01 сентября по 31 марта для
              старшеклассников (8-11 классы), интересующихся историей и
              функционированием финансового рынка, экономикой и управлением.
            </p>

            <p>
              Принять участие в Олимпиаде на добровольной основе могут
              обучающиеся образовательных учреждений, осваивающие
              общеобразовательные программы среднего (полного) общего
              образования, а также дополнительные образовательные программы в
              области экономики и финансов, независимо от гражданства.
            </p>
          </template>
        </Card>
      </div>
      <div>
        <Heading>Лента событий</Heading>

        <div class="index-page__events">
          <Card v-for="event in data.events.slice(-4)" :key="event.name">
            <template #header>
              <iframe
                v-if="event.content.content.includes('rutube')"
                loading="lazy"
                :src="event.content.content"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              ></iframe>
              <iframe
                v-else
                loading="lazy"
                :src="event.content.content"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </template>
            <template #title>
              {{ event.content.desc }}
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Auth from './components/Auth.vue'
import ImagesSlider from './components/ImagesSlider.vue'
import PartnersSlider from './components/PartnersSlider.vue'

export default {
  components: {
    Auth,
    ImagesSlider,
    PartnersSlider,
  },
  computed: {
    data() {
      const elements = this.$store.main.elements
      return {
        stages: elements.stages ?? [],
        news: elements.news ?? [],
        events: elements.events ?? [],
      }
    },
  },
}
</script>
<style scoped lang="scss">
.index-page {
  display: flex;
  flex-direction: column;
  gap: var(--layout-gap-xxs);
  margin: var(--layout-gap-xxs) 0;

  &__divided-space {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--layout-gap-xxl);

    > div:first-child {
      grid-area: span 1 / span 2;
    }
  }

  &__events {
    display: flex;
    flex-direction: column;
    gap: var(--layout-gap-xxl);
  }

  &__about-card {
    margin-top: var(--layout-gap-xxl);

    :deep {
      img {
        height: auto;
      }
    }
  }

  &__news {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--layout-gap-xxl);

    &-icon {
      font-size: 1.5rem;
    }
  }

  &__stages {
    margin: var(--layout-gap) 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--layout-gap-xxl);

    .p-card {
      max-height: 260px;
      overflow: hidden;
      cursor: pointer;
      transition: 500ms;

      &:hover {
        max-height: 100vh;
      }
    }
  }

  @media (max-width: 800px) {
    &__divided-space {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  @media (max-width: 600px) {
    &__news {
      grid-template-columns: 1fr;
    }

    &__stages {
      grid-template-columns: 1fr;
    }
  }
}
</style>
