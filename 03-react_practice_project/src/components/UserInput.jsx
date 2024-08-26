export default function UserInput({ title, value, onChange, ...props }) {
  return (
    <p>
      <label>{title}</label>
      <input
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        {...props}
      />
    </p>
  );
}
