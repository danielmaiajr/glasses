import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const MyTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#AAA'
		},
		'& .MuiInputBase-input': {
			color: '#FFF',
			fontSize: 14
		},
		'& .MuiFormLabel-root': {
			color: '#AAA',
			fontSize: 14
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderRadius: 0,
				borderColor: 'rgba(255, 255, 255, 0)',
				backgroundColor: 'rgba(255, 255, 255, 0.2)'
			},
			'&:hover fieldset': {
				borderColor: 'rgba(255, 255, 255, 0.2)'
			},
			'&.Mui-focused fieldset': {
				borderColor: '#555',
				backgroundColor: 'rgba(255, 255, 255, 0)'
			}
		}
	}
})(TextField);

export default MyTextField;
