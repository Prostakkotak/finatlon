<template>
  <div class="contacts app-default-page l-column">
    <Heading> Контакты </Heading>

    <Card>
      <template #content>
        <span class="text-bold">
          127018, г. Москва, ул. Сущевский Вал, 16с4
        </span>
      </template>
    </Card>
    <Card>
      <template #content>
        Секретарь: <span class="text-bold">+7 495 369-04-02</span>
      </template>
    </Card>
    <Card>
      <template #content>
        Оргкомитет Олимпиады: <span class="text-bold">доб. 131, 133</span>
      </template>
    </Card>
    <Card>
      <template #content>
        Эл. почта: <span class="text-bold">olimpiada@ifru.ru</span>
      </template>
    </Card>

    <div class="contacts__map">
      <a
        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
        style="color: #eee; font-size: 12px; position: absolute; top: 0px"
        >Москва</a
      ><a
        href="https://yandex.ru/maps/213/moscow/?from=mapframe&ll=37.603148%2C55.791408&source=mapframe&utm_medium=mapframe&utm_source=maps&z=16"
        style="color: #eee; font-size: 12px; position: absolute; top: 14px"
        >Яндекс Карты — транспорт, навигация, поиск мест</a
      ><iframe
        src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.603148%2C55.791408&source=mapframe&utm_source=mapframe&z=16"
        allowfullscreen="true"
        style="position: relative"
      ></iframe>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="scss">
iframe {
  border: none;
  border-radius: var(--border-radius-lg);
  width: 100%;
  height: 400px;
}
</style>
