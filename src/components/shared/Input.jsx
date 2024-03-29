const Input = ({ label, type, placeholder }) => {
  return (
    <label class="form-control w-full">
      <span class="label label-text font-bold text-sm">{label}</span>
      <div class="flex space-x-4 max-w-full">
        <input
          type={`${type}`}
          placeholder={`Enter ${placeholder}`}
          class="input input-bordered input-primary w-full flex-2 text-sm"
          required
        />
      </div>
    </label>
  );
};

export default Input;
