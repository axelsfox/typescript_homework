//перенесла сюда весь треш с датами из seach-form
/**вычисление последнего дня следующего месяца
* @param date {Date} дата отсчета для сдвига
* @return date Дата последнего дня следующего месяца
*/
export const endDayOfMonth = (date) => {
    date.setMonth(date.getMonth() + 2);
    date.setDate(0);
    return date;
};
/**дата выезда по умолчанию, дата заезда +2 дня. Переделала сообразно с примером на универсальную
* @param  date {Date} исходная дата
* @param  delayDay {number} количество дней для сдвига
* @return date дата со сдвигом на указаное количество дней
*/
export const defaultDay = (date, delayDay) => {
    date.setDate(date.getDate() + delayDay);
    return date;
};
/*Форматирование даты в строку для рендера слизала как есть */
export const pad = (v) => `0${v}`.slice(-2);
/** Форматировать дату
* @param date {Date} - дата, которую нужно форматировать
* @returns {string} - строка, с отформатированной датой
*/
export const formatDate = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
