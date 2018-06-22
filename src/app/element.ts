export class Element {
    private imdbID;
    private title;
    private year;
    private cover;
    private resume;
    private relase;
    private runTime;
    private genre;
    private director;
    private rating;
    private type;

    // tslint:disable-next-line:max-line-length
    constructor(imdbID: String, title: String, year: number, cover: String, resume?: String, relase?: Date, runtime?: String, genre?: String, director?: String, raitng?: String, type?: String) { 
        this.cover = cover;
        this.director = director;
        this.genre = genre;
        this.imdbID = imdbID;
        this.rating = raitng;
        this.relase = relase;
        this.resume = resume;
        this.runTime = runtime;
        this.title = title;
        this.type = type;
        this.year = year;
    }

    getType(): string {
        return this.type;
    }

}
