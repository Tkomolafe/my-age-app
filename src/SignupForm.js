import React from 'react';

const SignupForm = ({ onNavigate }) => {
  const handleSignIn = () => {
    if (onNavigate) {
      onNavigate('loginForm');
    } else {
      console.error('onNavigate is not defined');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>AGE ESTIMATOR</h1>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="username">
            Username
          </label>
          <input
            style={styles.input}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <div style={styles.passwordContainer}>
            <input
              style={styles.input}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <span style={styles.eyeIcon}>👁️</span>
          </div>
        </div>
        <div style={styles.rememberMeContainer}>
          <input type="checkbox" id="terms" name="terms" style={styles.checkbox} />
          <label style={styles.rememberMeLabel} htmlFor="terms">
            I accept the terms & conditions
          </label>
        </div>
        <button type="submit" style={styles.button}>SIGN UP</button>
      </form>
      <p style={styles.signupText}>
        Own an Account? <span style={styles.signupLink} onClick={handleSignIn}>SIGN IN</span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  header: {
    color: '#28a745',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  form: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#888',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    cursor: 'pointer',
  },
  rememberMeContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  checkbox: {
    marginRight: '10px',
  },
  rememberMeLabel: {
    color: '#888',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  signupText: {
    marginTop: '20px',
    color: '#888',
  },
  signupLink: {
    color: '#28a745',
    cursor: 'pointer',
  },
};

export default SignupForm;