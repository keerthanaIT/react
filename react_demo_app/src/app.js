//  Example 1
// Normal Function
// function getlocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return "No location"
//   }
// }

// Arrow Function
const getlocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return "No location"
  }
}

//  Exploring JSX and Arrov function
const user = {
  author_name: "John",
  book_name: "The journey",
  location: "Chennai",
  publish_year: "2000",
  cities: ["TN", "Kerala", "Andhra"],
  getCity: function () {
    this.cities.forEach((cities) => {
      console.log(this.author_name + " lives in " + cities)
    })
  }
};
user.getCity();

// JSX Expression
const book_template = (
  <div>
    {user.author_name ? <h1>Author Name: {user.author_name} </h1> : "No name"}{/* terinary operator*/}
    <p>Book Name :{user.book_name}</p>
    {(user.publish_year && user.publish_year >= 2000) && <p>Publish Year: {user.publish_year}</p>}
    {getlocation(user.location)}   {/* if statement*/}
  </div>
);
// Example 1
const demo_values = {
  title: "Demo App",
  sub_title: "Select the options in the list",
  options: []
}
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    demo_values.options.push(option);
    e.target.elements.option.value = '';
    RenderDemoApp();
  }
  console.log("form submitted", option)
}
const removeAll = () => {
  demo_values.options = [];
  RenderDemoApp();
}
const selectOption = () => {
  const rnum = Math.floor(Math.random() * demo_values.options.length);
  const option = demo_values.options[rnum]
  alert(option)
}

const appRoot = document.getElementById('app');

const RenderDemoApp = () => {
  const demo_app = (
    <div>
      <h1>{demo_values.title}</h1>
      {demo_values.sub_title && <p>{demo_values.sub_title}</p>}
      <p>{demo_values.options.length > 0 ? "Here are the options" : " No options"}</p>
      <button disabled={demo_values.options.length === 0} onClick={(selectOption)}>Should I do ?</button>
      <button onClick={(removeAll)}>Remove All</button><br />
      {demo_values.options.length}
      <ol>
        {
          demo_values.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>

      {/* <ul>
        <li>One</li>
        <li>Three</li>
      </ul> */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );
  ReactDOM.render(demo_app, appRoot)
}
RenderDemoApp();