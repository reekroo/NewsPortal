interface IBaseNews {

  news: Object;
  title: string;
  newsType: string;

  getNews(): void;
}

export { IBaseNews }
