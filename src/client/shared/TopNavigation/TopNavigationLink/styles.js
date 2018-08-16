const styles = {
  base: {
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 700,
    color: 'rgb(255, 255, 255)',
    ':hover': {
      color: 'rgb(255, 0, 0)',
    },
    ':visited': {
      color: 'rgb(255, 255, 255)',
    },
    ':link': {
      color: 'rgb(255, 255, 255)',
    }
  },
  floatLeft: {
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: '16px',
    fontFamily: "'Ubuntu', sans-serif",
    letterSpacing: 0,
    ':before': {
      content: '',
      background: 'red',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0
    }
  },
  logo: {
    marginRight: '10px',
    height: '35px'
  }
};

export { styles };
