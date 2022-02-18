export class User {
  userName: string
  userUrl: string

  constructor(userName: string, userUrl: string) {
    this.userName = userName
    this.userUrl = userUrl
  }
}

export function getUserData() {
  const testuser = {
    userName: 'Masha',
    userUrl: '\\project-template\\public\\img\\avatar.png'
  }
  window.localStorage.setItem('user', JSON.stringify(testuser));
  const userinfo: unknown = JSON.parse(window.localStorage.getItem('user'))

  //console.log(userinfo);

  Object.setPrototypeOf(userinfo, User.prototype);
  if (userinfo instanceof User) {
    return userinfo
  } else {
    console.log('Ошибка');

  }
}


export function getFavoritesAmount() {
  window.localStorage.setItem('favoritesAmount', JSON.stringify('10'));
  return Number(JSON.parse(window.localStorage.getItem('favoritesAmount')))
}
