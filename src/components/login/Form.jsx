import Input from "../shared/Input";

const Form = () => {
  return (
    <form className="w-full">
      <Input label="Enter Email" type="email" placeholder="EmailAddress" />
      <Input label="Enter Password" type="password" placeholder="Password"  />
      <button
        type="submit"
        class="btn bg-indigo-700 w-full mt-4 text-white text-base"
      >
        Member Login
      </button>
    </form>
  );
};

export default Form;
