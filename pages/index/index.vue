<template>
  <div class="index-page">
    <ImagesSlider />

    <Auth />

    <Heading> Этапы реализации проекта </Heading>

    <div class="index-page__stages">
      <Card>
        <template #title> Регистрация </template>
        <template #subtitle> Регистрация </template>
        <template #content>
          Регистрация участников осуществляется на сайте Олимпиады «Финатлон для
          старшеклассников» (olimp-test.ru) с 1 сентября 2023г. по 1 декабря
          2023г.
        </template>
      </Card>
      <Card>
        <template #title> Первый Этап </template>
        <template #subtitle> ПЕРВЫЙ ЭТАП. ОТБОРОЧНЫЙ </template>
        <template #content>
          Проводится в форме on-line тестирования с применением дистанционных
          образовательных технологий в декабре 2023г. По завершении регистрации
          участников. On-line тестирование проводится в личном кабинете
          зарегистрированного участника Олимпиады
        </template>
      </Card>
      <Card>
        <template #title> Второй Этап </template>
        <template #subtitle> ВТОРОЙ ЭТАП. ФИНАЛ </template>
        <template #content>
          Проводится в один и тот же день во всех местах его проведения в очной
          форме. Февраль-март 2023 Состоит из трех туров: 1.Творческое эссе по
          предложенной Оргкомитетом тематике, Письменная работа – 2. Решение
          задач и 3. Кейсов.
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
          <Card>
            <template #header>
              <img src="@/static/news01.png" alt="" />
            </template>
            <template #title> Банки вернут украденные деньги </template>
            <template #subtitle> ОТР Отражение, эфир 09.01.2024 </template>
            <template #content>
              <p>Игорь Костиков</p>

              <p>доктор экономических наук, председатель «Финпотребсоюза»</p>

              <p>
                Банки начнут возвращать деньги, украденные у их клиентов
                мошенниками. К этому кредитно-финансовые учреждения обяжет новый
                закон. Когда он вступает в силу и как будет работать?
              </p>
            </template>
          </Card>
          <Card>
            <template #title>
              Продление срока регистрации участников Олимпиады «Финатлон для
              старшеклассников» до 20 января 2024 г.
            </template>
            <template #subtitle> 28 Декабря, 2023 </template>
            <template #content>
              Оргкомитет XIX Всероссийской олимпиады по финансовой грамотности,
              устойчивому развитию и защите прав потребителей финансовых услуг
              Финатлон для старшеклассников принял решение о продлении срока
              регистрации участников Олимпиады сезона 2023-2024 учебного года до
              20 января 2024 г.
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
          <Card>
            <template #header>
              <iframe
                loading="lazy"
                src="https://rutube.ru/play/embed/7ac5cf98d61d939317a143d3d26efdd4"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </template>
            <template #title>
              Школьники Кузбасса об участии в олимпиаде «Финатлон для
              старшеклассников
            </template>
          </Card>
          <Card>
            <template #header>
              <iframe
                loading="lazy"
                src="https://rutube.ru/play/embed/b59037f6ad1e4b2a8538ace9e0c55a1a"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </template>
            <template #title>
              «Личные финансы». Региональный финал Всероссийской олимпиады по
              финансовой грамотности для старшеклассников в Ярославле
            </template>
          </Card>
          <Card>
            <template #header>
              <iframe
                loading="lazy"
                src="https://rutube.ru/play/embed/b59037f6ad1e4b2a8538ace9e0c55a1a"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </template>
            <template #title>
              РБК Новости башкортостана эфир 20.02.2023
            </template>
          </Card>
          <Card>
            <template #header>
              <iframe
                loading="lazy"
                src="https://rutube.ru/play/embed/ada9d63948d07f3a82f26c28100a8439"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </template>
            <template #title>
              Интервью победителя XVI Олимпиады «Финатлон для старшеклассников»
              2020-2021г.г. — Маслова Владислава
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
