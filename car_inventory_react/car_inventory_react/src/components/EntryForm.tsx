import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useStore } from "react-redux";

import Input from "./Input";
import { server_calls } from "../api/server";
import { chooseMake, chooseModel, chooseColor } from "../redux/slices/RootSlice";


interface EntryFormProps {
  id?: string[],
  data?: {},
}

const EntryForm = (props: EntryFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`)
    console.log(data);
    console.log(errors);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ props.id } ${ data }`)
      setTimeout(() => {window.location.reload()}, 5000);
      event.target.reset()
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseColor(data.color));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 5000);
  }
}
  
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Make" {...register("make", {required: false, maxLength: 80})} />
        <Input placeholder="Model" {...register("model", {required: false, maxLength: 100})} />
        <Input placeholder="Color" {...register("color", {required: true})} />
        <button className="p-3 m-3 bg-slate-300 rounded hover:bg-yellow-400">
        <input type="submit" />
        </button>
      </form>
  );
  }

export default EntryForm
