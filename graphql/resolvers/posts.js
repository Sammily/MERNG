//распознаватель - resolvers - говорит где и как получить данные соотвествующие запрашиваемому полю 


const Post = require('../../models/Post');

module.exports = {
    Query: {
        async getPosts() {  //стоит async - значит функция вернет промис
          try { //используем try...catch чтоб "поймать" ошибку, если она вылетит не сразу, а с задержкой. (выполняет try, а в случае ошибки catch)
            const posts = await Post.find();  //await "заставляет" ждать пока не выполнится правая часть, а затем возвращает результат
            return posts;                     //Post.find() - mongoose команда, находит документ (можно добавить фильтры)
          } catch (err) {
            throw new Error(err);
          }
        },
      },
}