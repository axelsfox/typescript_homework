import { renderBlock } from './lib.js';
import { endDayOfMonth, defaultDay, formatDate } from './date.js';
/**
 * @param dateStart {Date} - дата прибытия в отель
 * @param dateOff {Date} - дата отбытия в отель
 */
export function renderSearchFormBlock(dateStart, dateOff) {
    // если не указано, сдвигаем дату прибытия на следующие сутки
    dateStart = dateStart || defaultDay(new Date(), 1);
    //приобразуем полученную дату старта для html
    const startValue = formatDate(dateStart);
    //вычисляем дату отбытия, если она не указана, то через сутки от дефолтной даты заезда
    const endValue = formatDate(dateOff || defaultDay(dateStart, 2));
    const now = formatDate(new Date());
    const lastDayofMonth = formatDate(endDayOfMonth(new Date()));
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${startValue}" min="${now}" max="${lastDayofMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${endValue}" min="${startValue}" max="${lastDayofMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
