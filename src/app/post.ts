/**
 * Classe d'un post avec date de création par défaut
 */
export class Post {
    title : string;
    content : string;
    loveIts : number;
    create_at : Date;
    constructor (title, content, loveIts) {
      this.title = title;
      this.content = content;
      this.loveIts = loveIts;
      this.create_at = new Date();
    }
  }