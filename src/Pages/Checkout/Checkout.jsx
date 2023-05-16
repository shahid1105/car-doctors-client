// import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProviders";
// import Swal from "sweetalert2";

// const Checkout = () => {
//   const services = useLoaderData();
//   const { title, _id, price, img } = services;
//   const { user } = useContext(AuthContext);

//   const checkoutService = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const date = form.date.value;
//     const email = form.email.value;

//     const order = {
//       customerName: name,
//       date,
//       email,
//       img,
//       services: title,
//       services_id: _id,
//       price: price,
//     };

//     console.log(order);
//     fetch("http://localhost:5000/checkout", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "success",
//             text: "inserted successfully",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//         }
//       });
//   };

//   return (
//     <div>
//       <h2 className="text-center text-3xl">Book services: {title}</h2>
//       <div className="card-body">
//         <form onSubmit={checkoutService}>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 defaultValue={user?.displayName}
//                 placeholder="Name"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold">Date</span>
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 placeholder="date"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold">Your Email</span>
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 defaultValue={user?.email}
//                 placeholder="Your Email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold">Due to Price</span>
//               </label>
//               <input
//                 type="text"
//                 name="price"
//                 defaultValue={"$" + price}
//                 placeholder="Due to Price"
//                 className="input input-bordered"
//               />
//             </div>
//           </div>
//           <div className="form-control mt-6">
//             <input
//               className="btn btn-primary btn-block"
//               type="submit"
//               value="Order Confirm"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
