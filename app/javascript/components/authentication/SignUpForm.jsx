import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../common/form/TextField';
import PasswordField from '../common/form/PasswordField';
import SubmitField from '../common/form/SubmitField';
import ErrorMessage from '../common/form/ErrorMessage';

const SignUpForm = ({
  user, onChange, onSubmit, saving, errors,
}) => (
  <form className="ui form" onSubmit={onSubmit}>
    <ErrorMessage errors={errors} />
    <div className="two fields">
      <TextField
        name="first_name"
        label="Prénom"
        placeholder="Prénom"
        onChange={onChange}
        value={user.first_name}
      />
      <TextField
        name="last_name"
        label="Nom"
        placeholder="Nom"
        onChange={onChange}
        value={user.last_name}
      />
    </div>
    <TextField
      name="email"
      label="Email"
      placeholder="Email"
      onChange={onChange}
      value={user.email}
    />
    <PasswordField
      name="password"
      label="Mot de passe"
      placeholder="Mot de passe"
      onChange={onChange}
      value={user.password}
    />
    <PasswordField
      name="password_confirmation"
      label="Confirmation du mot de passe"
      placeholder="Confirmation du mot de passe"
      onChange={onChange}
      value={user.password_confirmation}
    />
    <SubmitField label={saving ? 'Saving' : 'Save'} disabled={saving} />
  </form>
);

SignUpForm.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    password_confirmation: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SignUpForm;
