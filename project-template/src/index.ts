import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { User, getUserData, getFavoritesAmount } from './user-info.js'

window.addEventListener('DOMContentLoaded', () => {
  const user: User = getUserData();
  console.log(user);

  renderUserBlock(user.userName, user.userUrl, getFavoritesAmount())
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
