import UserInput from "./UserInput";

export default function UserInputGroup({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          title={"Initial Investment"}
          value={userInput.initialInvestment}
          onChange={(newValue) => {
            onChange("initialInvestment", newValue);
          }}
          type="number"
          required
        />
        <UserInput
          title={"Annual Investment"}
          value={userInput.annualInvestment}
          onChange={(newValue) => {
            onChange("annualInvestment", newValue);
          }}
          type="number"
          required
        />
      </div>
      <div className="input-group">
        <UserInput
          title={"Expected Return"}
          value={userInput.expectedReturn}
          onChange={(newValue) => {
            onChange("expectedReturn", newValue);
          }}
          type="number"
          required
        />
        <UserInput
          title={"Duration"}
          value={userInput.duration}
          onChange={(newValue) => {
            onChange("duration", newValue);
          }}
          type="number"
          required
        />
      </div>
    </section>
  );
}
