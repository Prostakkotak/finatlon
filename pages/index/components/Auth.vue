<template>
  <div class="app-block app-block_colored index-page__auth">
    <div class="app-action-block__text text-primary-bg">
      <p>
        Участие в Олимпиаде «Финатлон для старшеклассников» - это, прежде всего,
        ценный опыт, проба своих сил, новые знания и интересные знакомства.
        Победители и призеры Олимпиады получают Дипломы, а участники финала -
        Сертификаты финалистов.
      </p>
      <p>
        Дипломанты Всероссийской Олимпиады по финансовой грамотности,
        устойчивому развитию и защите прав потребителей финансовых услуг -
        «Финатлона для старшеклассников», получат возможность встретиться с
        руководителями комитетов Государственной Думы, Банка России,
        руководством ведущих банков страны и финансовых компаний Победителями
        становятся сильнейшие, но каждый участник приобретает знания,
        необходимые не только в профессии финансиста, но и в жизни – ведь мы
        живем в рыночной экономике и являемся потребителями товаров и услуг.
      </p>
    </div>
    <a href="http://olimp-test.ru/">
      <Button
        class="app-action-block__button text-primary-bg border-radius-lg"
        label="Регистрация/Личный кабинет >"
        outlined
      />
    </a>
  </div>
</template>
<style scoped lang="scss">
.index-page {
  &__auth {
    display: grid;
    grid-template-columns: 0.7fr 0.3fr;
    gap: var(--layout-gap-xxl);

    a {
      margin-left: auto;
      display: flex;
      height: 100%;
    }
  }

  @media (max-width: 800px) {
    &__auth {
      grid-template-columns: 1fr;

      a {
        width: 100%;

        button {
          width: 100%;
          height: 100px;
        }
      }
    }
  }
}
</style>
