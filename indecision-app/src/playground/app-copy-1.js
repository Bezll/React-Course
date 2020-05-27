const user = {
    name: 'Andrew',
    age: 26,
    location: 'Philadelphia'
};
const getLocation = (location) => {
    console.log(location);
    if (location) { 
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (

    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);