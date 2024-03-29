const Input = ({ label, type, placeholder }) => {
  return (
    <label class="form-control w-full mt-2">
      <span class="label label-text font-bold text-sm">{label}</span>
      <div class="flex items-center input input-bordered input-primary w-full flex-2 text-sm">
        <input
          type={`${type}`}
          placeholder={`Enter ${placeholder}`}
          class=" grow"
          required
        />
      </div>
    </label>
  );
};

export default Input;
