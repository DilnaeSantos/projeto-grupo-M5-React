import styled from 'styled-components';
import Input from '../../common/Input/Input';

const Textfield = ({
  label,
  name,
  type,
  required,
  placeholder,
  value,
  onChange,
  hasError,
}) => {
  return (
    <StyleTextfield>
      <label htmlFor={name}>{label}</label>

      {type === 'textarea' ? (
        <StyledTextArea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          name={name}
          desabled={false}
          required={required}
        />
      ) : (
        <Input
          hasError={hasError}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          name={name}
          type={type}
          desabled={false}
          required={required}
        />
      )}
    </StyleTextfield>
  );
};

export default Textfield;

const StyleTextfield = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin-bottom: 10px;
  margin-top: 10px;

  > label {
    color: black;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 132px;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  resize: none;
  border: none;
  font-size: 24px;
  margin-bottom: 15px;
`;
