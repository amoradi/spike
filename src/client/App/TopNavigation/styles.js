const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  boxSizing: 'border-box',
  padding: '0 20px'
};

const styles = {
  base: {
    backgroundColor: 'rgb(46, 49, 146)',
    padding: '10px 0',
    transition: '0.4s'
  },
  fixed: {
    position: 'fixed',
    left: 0,
    right: 0,
    width: '100%'
  },
  shadowed: { boxShadow: '0 4px 2px -2px rgba(0,0,0,0.3)' },
  container: {
    display: 'flex',
    alignItems: 'center',
    ...containerStyles
  },
  linkGroup: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '400px',
    justifyContent: 'space-between'
  }
};

export { styles };
