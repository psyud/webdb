import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

export default withStyles({
    iconFilled: {
      color: '#6b6b6b',
    },
    sizeSmall: {
        fontSize: 12
    }

  })(Rating);