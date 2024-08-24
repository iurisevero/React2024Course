export default function UserInput({ title, onChange, ...props }) {
  return (
    <div id="user-input">
      <label>{title}</label>
      <input
        onChange={(event) => {
          onChange(event.target.value);
        }}
        {...props}
      />
    </div>
  );
}
