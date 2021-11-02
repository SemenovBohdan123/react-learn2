import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    width: 320,
    height: 775,
    padding: 10,
    backgroundColor: 'silver',
    textAlign: 'center',
    borderRadius: 15,
  },

  good: {
    background: 'green'
  },

  bad: {
    background: 'red'
  }
})

export default useStyles;
