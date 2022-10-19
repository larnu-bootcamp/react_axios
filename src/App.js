//La finalidad de este repositorio es que vayan descomentando paso a paso y vayan viendo como funciona GET/POST/PUT/PATCH/DELETE 
// "https://jsonplaceholder.typicode.com/posts"; //es una api que estaba en internet y sirve para practicar.
//El desafio esta en el readme


///////////////////
///////GET///////
///////////////////

// import axios from "axios"; //suplanta fetch
// import React, { useState, useEffect } from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1"; //es una api que estaba en internet y sirve para practicar.

// export default function App() {
//   const [get, setGet] = useState(null);

//   //GET para ver la información
//   useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setGet(response.data);
//     });
//   }, []); //[] es un array de dependencia

//   if (!get) return null;

//   return (
//     <div>
//       <h1>{get.title}</h1>
//       <p>{get.body}</p>
//     </div>
//   );
// }

///////////////////
///////POST///////
///////////////////

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         title: "aguante Larnu!",
//         body: "hicimos un cambio en el post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No hay un post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <p>{post.id}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }






///////////////////
////PUT / PATCH///
///////////////////

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function updatePost() {
//     axios
//     // .patch
//       .put(`${baseURL}/1`, {
//         title: "Hello World!",
//         body: "This is an updated post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>title: {post.title}</h1>
//       <p>body: {post.body}</p>
//       <p>id: {post.id}</p>
//       <button onClick={updatePost}>Update Post</button>
//     </div>
//   );
// }






///////////////////
//////DELETE///////
///////////////////

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function deletePost() {
//     axios
//       .delete(`${baseURL}/1`)
//       .then(() => {
//         alert("se borro todo");
//         setPost(null)
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }



///////////////////
//Manejar errores//
///////////////////



// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     // invalid url will trigger an 404 error
//     axios.get(`${baseURL}/asdf`).then((response) => {
//       setPost(response.data);
//     }).catch(error => {
//       setError(error);
//     });
//   }, []);
  
//   if (error) return `Error: ${error.message}`;
//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }




////////////////////////
// Crear una instancia//
////////////////////////

// import axios from "axios";
// import React from "react";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts" 
// });

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     client.get("/1").then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function deletePost() {
//     client
//       .delete("/1")
//       .then(() => {
//         alert("Post deleted!");
//         setPost(null)
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }