import productSwapSmall from "../assets/productSwapSmall.png"
import h2ohSmall from "../assets/h2ohSmall.png"
import blogSmall from "../assets/blogSmall.png"
import toDoSmall from "../assets/toDoSmall.png"


export const projects = [
    {
        id: 1,
        title: "Product exchange App",
        description: `A site for listing unwanted items, or gaining an item on offer from another user. The frontend is built with react.js utilizing hooks and redux, the backend is built with node express.js. The database used is Postgres Elephant (SQL), allowing for the user, role and product tables to be related. User authentication managed with Auth0.
The application has three levels of user roles: unregistered user (view only), registered user (add and manage items, contact other users) and site administrator (monitor and delete all product entries and users). The different access/ views allowed for each level are protected.`,
        image: productSwapSmall,
        link: "https://gumtree-swap.netlify.app/",
        stack: "Javascript, React.js, PostgresSQL, Node.js Express, Firebase"
    }, {
        id: 2,
        title: "To Do App",
        description: `A todo app where users can log tasks they need to do and view tasks with filter by date, search or view all. User authentication managed with firebase. Back end created with Node.js Express and using MongoDB. The frontend is created with React.js using redux and styled using TailWind. A previous to do exercise using reducers and contexts manually can be found at my gitHub`,
        image: toDoSmall,
        link: "https://todo-dorian.netlify.app/",
        stack: "Javascript, React.js, MongoDB, Node.js Express, Firebase"
    }, {
        id: 3,
        title: "H2Oh Políticas azules",
        description: `This project consisted of building the arquitecture for a product designed by a user experience team, including exact replication of supplied figma views and implementation of requested functionalities. The project also included collaboration with a team of data scientists and compliance with the recommendations of the cybersecurity team. Front end is built with react.js, also utilising leaflet, chart.js and more, and the back end is built with node express.js.`,
        image: h2ohSmall,
        link: "https://h20h.netlify.app/",
        stack: "Javascript, React.js, MongoDB, Node.js Express, Auth0"
    }, {
        id: 4,
        title: "News Blog",
        description: "A blog website where authors can log in and post articles. Authors can edit or delete their entries, and unregistered site visitors can search and read articles. Author login and authetication is managed with JWT. This site was an exercise in Node.js Express; both the back and front end are made using this framework , the front using the ejs template engine to create views.",
        image: blogSmall,
        link: "https://blog-dk-e24eedc7b082.herokuapp.com/",
        stack: "Javascript, PostgresSQL, Node.js Express, EJS, JWT"
    }
]