class BookName {
  constructor(book_name , year){
    this.book_name = book_name;
    this.year = year;
  }
  getPublishYear(){
    return `${this.book_name} is published at ${this.year}`
  }
  getBookLocation(){
    return `Hi My Book is ${this.book_name}`
  }
}
class Books extends BookName{
  constructor(book_name , year, author_name){
    super(book_name , year);
    this.author_name = author_name;
  }
  getAuthorName(){
    return this.author_name
  }
  getPublishYear(){
    let publish_year = super.getPublishYear();
    if(this.getAuthorName()){
      publish_year += `and the name of the author is ${this.author_name}`
    }
    return publish_year
  }

}

class BookLocation extends BookName{
  constructor(book_name,year,author_name,location){
    super(book_name,year,author_name);
    this.location = location;
  }
  getLocation(){
return this.location
  }
getBookLocation(){
  let book_location = super.getBookLocation();
  if(this.getLocation){
    book_location += ` and is located ${this.location}`
  }else{
    book_location
  }
  return  book_location
}
}





// const book_location = new BookLocation()
// console.log("---book-",book_location.getBookLocation())
const book_details = new BookLocation('The Jourbey','2020' ,'John','table')
console.log("----",book_details.getBookLocation())