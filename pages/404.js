import React from "react";

function Error404() {
  return <div>404</div>;
}

export default Error404;

//just for test how use server side rendering if you uncomment this code you will have error with 404 pag
// because you use getServerSideProps and return initial value props...
// export async function getServerSideProps(context) {
//   return {
//     props: {
// props for your component
//     },
//   };
// }
