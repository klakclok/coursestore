<template>

  <div class="course-program">

    <div class="header">
      <h2 class="header-title">Программа курса</h2>

      <div class="header-info">
        <p class="header-info__sections">
          <span class="count">{{ sections }}</span> разделов
        </p>

        <p class="header-info__lectures">
          <span class="count">{{ lectures }}</span> лекций
        </p>

        <p class="header-info__lecture-time">
          более <span class="count">{{ lectureTime }} часов</span>
        </p>
      </div>

    </div>

    <div class="accordion">

      <div class="tabs">

        <div class="tab">
          <input class="hidden-checkbox" type="checkbox" id="cb1" name="cb">
          <label class="tab-label" for="cb1">
            Введение в профессию
            <span class="lesson-count">5 уроков</span>
          </label>
          <div class="tab-content">
            <ol class="tab-content__list">
              <li class="tab-content__list-item">Определение цели проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 1. Границы проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 2.</li>
            </ol>
          </div>
        </div>

        <div class="tab">
          <input class="hidden-checkbox" type="checkbox" id="cb2" name="cb">
          <label class="tab-label" for="cb2">
            Управление проектами
            <span class="lesson-count">5 уроков</span>
          </label>
          <div class="tab-content">
            <ol class="tab-content__list">
              <li class="tab-content__list-item">Определение цели проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 1. Границы проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 2.</li>
              <li class="tab-content__list-item">Расчёт метрик проекта. Методология расчёта метрик.</li>
              <li class="tab-content__list-item">Фиксация требований проекта.</li>
              <li class="tab-content__list-item">Формирование команды проекта.</li>
              <li class="tab-content__list-item">Оценка. Приоритеты. Прототип проекта.</li>
              <li class="tab-content__list-item">Ресурсы проекта. Тендеры. Закупки.</li>
              <li class="tab-content__list-item">Экономика проекта. Операционные и инвестиционные затраты. P&L проекта
              </li>
              <li class="tab-content__list-item">Запуск работ по проекту.</li>
              <li class="tab-content__list-item">Контроль выполнения и качества.</li>
              <li class="tab-content__list-item">Взаимодействие в команде проекта.</li>
              <li class="tab-content__list-item">Стадия приёмки работ.</li>
              <li class="tab-content__list-item">Стадия эксплуатации продукта.</li>
              <li class="tab-content__list-item">Оценка результатов. Подведение итогов по достижению целей.</li>
              <li class="tab-content__list-item">Как понять, что продукт успешен и готов к масштабированию.</li>
              <li class="tab-content__list-item">Завершение проекта.</li>
            </ol>
          </div>
        </div>

        <div class="tab">
          <input class="hidden-checkbox" type="checkbox" id="cb3" name="cb">
          <label class="tab-label" for="cb3">
            Управление продуктом
            <span class="lesson-count">5 уроков</span>
          </label>
          <div class="tab-content">
            <ol class="tab-content__list">
              <li class="tab-content__list-item">Определение цели проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 1. Границы проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 2.</li>
            </ol>
          </div>
        </div>

        <div class="tab">
          <input class="hidden-checkbox" type="checkbox" id="cb4" name="cb">
          <label class="tab-label" for="cb4">
            Team Lead
            <span class="lesson-count">5 уроков</span>
          </label>
          <div class="tab-content">
            <ol class="tab-content__list">
              <li class="tab-content__list-item">Определение цели проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 1. Границы проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 2.</li>
            </ol>
          </div>
        </div>

        <div class="tab">
          <input class="hidden-checkbox" type="checkbox" id="cb5" name="cb">
          <label class="tab-label" for="cb5">
            Управление командами
            <span class="lesson-count">5 уроков</span>
          </label>
          <div class="tab-content">
            <ol class="tab-content__list">
              <li class="tab-content__list-item">Определение цели проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 1. Границы проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 2.</li>
            </ol>
          </div>
        </div>

        <div class="tab">
          <input class="hidden-checkbox" type="checkbox" id="cb6" name="cb">
          <label class="tab-label" for="cb6">
            <p>Финансы для нефинансистов</p>
            <span class="lesson-count">5 уроков</span>
          </label>
          <div class="tab-content">
            <ol class="tab-content__list">
              <li class="tab-content__list-item">Определение цели проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 1. Границы проекта.</li>
              <li class="tab-content__list-item">Разработка концепции проекта. Часть 2.</li>
            </ol>
          </div>
        </div>

      </div>

    </div>

  </div>

</template>
<script>
export default {
  name: 'programCourse',
  data () {
    return {
      sections: 6,
      lectures: 25,
      lectureTime: 60,
    }
  }
}
</script>

<style lang="scss" scoped>
.count {
  color: #007385;
}
.course-program {
  background: #FFFFFF;
  // border: 1px solid #E0E0E0;
  border-radius: 15px;

  margin: 0 auto;
}
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  gap: 20px;
  border: 1px solid #E0E0E0;
  border-radius: 15px 15px 0px 0px;
}
.header-title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
}
.header-info {
  display: flex;
  // flex-wrap: wrap;
  gap: 63px;
  font-weight: 700;
  font-size: 1.2em;
  margin-left: 30px;
  max-width: 494px;
}
.header-info__sections {
  position: relative;
  font-family: 'Inter';
  font-weight: 500;
}
.header-info__sections:before {
  position: absolute;
  left: -30px;
  top: -3px;
  content: url("@/assets/folder-ico.svg");
}
.header-info__lectures {
  position: relative;
  font-family: "Inter";
  font-weight: 500;
}
.header-info__lectures:before {
  position: absolute;
  left: -30px;
  top: -3px;
  content: url("@/assets/web-play-ico.svg");
}
.header-info__lecture-time {
  position: relative;
  font-family: "Inter";
  font-weight: 500;
}
.header-info__lecture-time:before {
  position: absolute;
  left: -30px;
  top: -3px;
  content: url("@/assets/time-clock-ico.svg");
}
/* Accordion styles */
.hidden-checkbox {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tabs {
  overflow: hidden;
}
.lesson-count {
  min-width: 80px;
  height: 30px;
  background: #007385;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #FFFFFF;
}
@media (max-width:1230px){
  .lesson-count{
    display: none;
  }
}
@media (max-width:580px){
  .header-title{
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
  }
}
@media (max-width:525px){
  .header-title{
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
  }
  .header{
    padding: 30px;
  }
  .tab{
    padding: 0px 30px;
  }
}
@media (max-width:460px){
  .header{
    padding: 20px;
  }
}
@media (max-width:400px){
  .header-title{
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
  }


}
@media (max-width:360px){
  .header{
    padding: 10px;
  }
}
@media (max-width:380px){
  .header-info{
    gap: 24px;
  }
}


.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  border: 1px solid #E0E0E0;
  padding: 0 50px;
  font-family: 'Inter';
  font-style: normal;
  &-label {
    position: relative;
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    background: white;
    color: black;
    cursor: pointer;
    column-gap: 10px;
    &:after {
      position: absolute;
      content: '\2716';
      text-align: center;
      transform: rotate(45deg);
      transition: all .35s;
      right: 0;
    }
  }
  &-content {
    max-height: 0;
    color: black;
    background: white;
    transition: all .35s;
    &__list {
      margin-block-start: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 0;
      list-style-position: inside;
      &-item {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 30px;
        }
      }
    }
  }
}

// :checked
.hidden-checkbox:checked {
  ~ .tab-label {
    + &:after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
  }
}
.tab-content__list-item{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */


  color: #000000;
}
@media (max-width:1230px){
  .lesson-count{
    display: none;
  }
}
@media (max-width:580px){
  .header-title{
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
  }
}
@media (max-width:525px){
  .header-title{
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
  }
  .header{
    padding: 30px;
  }
  .tab{
    padding: 0px 30px;
  }
}
@media (max-width:470px){
  .tab-label{
    font-size: 18px;
    font-weight: 500;
  }
}
@media (max-width:460px){
  .header{
    padding: 20px;
  }
  .tab{
    border: none;
    border-top:1px solid #E0E0E0;
    padding: 0px 0px;
  }
  .header{
    border: none;
    padding: 0px;
  }
  .header-info{
    margin-bottom: 30px;
  }
}

@media (max-width:400px){
  .header-title{
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
  }

}
@media (max-width:390px){
  .tab-label{
    // max-width: 141px;
  }
}
@media (max-width:360px){
  // .header{
  //   padding: 10px;
  // }
  p{
    max-width: 212px;
  }
}
@media (max-width:660px){
  .header-info{
    margin-left: 0px;
    margin-top: 35px;
  }
  .header-info__sections:before {
    position: absolute;
    left: 0px;
    top: -30px;
    content: url("@/assets/folder-ico.svg");
  }
  .header-info__lectures:before {
    position: absolute;
    left: 0px;
    top: -30px;
    content: url("@/assets/web-play-ico.svg");
  }

  .header-info__lecture-time:before {
    position: absolute;
    left: 0px;
    top: -30px;
    content: url("@/assets/time-clock-ico.svg");
  }
}
</style>
