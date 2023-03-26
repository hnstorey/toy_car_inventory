import { useForm, SubmitHandler } from "react-hook-form";


export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Make" {...register("Make", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Model" {...register("Model", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Color" {...register("Color", {required: true})} />

      <input type="submit" />
    </form>
  );
}

// const EntryForm = () => {
//   return (
//     <div>
//       <form onSubmit={() => console.log('submitted')}>
//         <div>
//           <label htmlFor='name'>Car Name</label>
//           <Input />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default EntryForm
