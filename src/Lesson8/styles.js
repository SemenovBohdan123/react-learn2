import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    width: 720,
    height: 300,
    padding: 10,
    backgroundColor: 'silver',
    textAlign: 'center',
    borderRadius: 15,
    bottom: '35%'
  },

  test: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0,
  },

  button: {
    position: 'absolute',
    left: 285,
    right: 0,
    margin: 'auto',
    bottom: 0,
  },

  good: {
    background: 'green'
  },

  bad: {
    background: 'red'
  }
}) // TODO выровнять тесты по разным сторонам


export default useStyles;
