import { renderBlock } from './lib.js';
export function renderSearchFormBlock(dateStart, dateOff) {
    const start = new Date();
    const end = (date) => {
        date.setMonth(date.getMonth() + 2);
        date.setDate(0);
        return date;
    };
    const endvalue = (date) => {
        date.setMonth(date.getMonth() + 2);
        date.setDate(0);
        return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`;
    };
    const commonStr = (date) => {
        date.setDate(date.getDate() + 1);
        return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    };
    const commonFin = (date) => {
        date.setDate(date.getDate() + 1);
        return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    };
    //сравниваем дату начала заезда с сегодня
    const startValue = (start, dateStart) => {
        let userDate = new Date(dateStart);
        if (start.getDate >= userDate.getDate && start.getMonth >= userDate.getMonth && start.getFullYear >= userDate.getFullYear) {
            return `${userDate.getFullYear()}-${('0' + (userDate.getMonth() + 1)).slice(-2)}-${userDate.getDate()}`;
        }
        else {
            return `${start.getFullYear()}-${('0' + (start.getMonth() + 1)).slice(-2)}-${start.getDate()}`;
        }
    };
    //сравниваем дату конца заезда с end последний день следующего месяца
    const endValue = (dateOff) => {
        let finish = end(start);
        let userDate = new Date(dateOff);
        if (finish.getDate >= userDate.getDate && finish.getMonth >= userDate.getMonth && finish.getFullYear >= userDate.getFullYear) {
            return `${userDate.getFullYear()}-${('0' + (userDate.getMonth() + 1)).slice(-2)}-${userDate.getDate()}`;
        }
        else {
            return `${finish.getFullYear()}-${('0' + (finish.getMonth() + 1)).slice(-2)}-${finish.getDate()}`;
        }
    };
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
            <input id="check-in-date" type="date" value="${commonStr(start)}" min="${startValue(start, dateStart)}" max="${endvalue(start)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${commonFin(start)}" min="${commonFin(start)}" max="${endvalue(start)}" name="checkout" />
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
