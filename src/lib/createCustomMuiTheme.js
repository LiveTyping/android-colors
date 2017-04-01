/**
 * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
 */

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';


export default function createCustomMuiTheme(palette) {
  return {
    spacing,
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 2,
    palette: Object.assign({
      primary1Color: cyan500,
      primary2Color: cyan700,
      primary3Color: grey400,
      accent1Color: pinkA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      secondaryTextColor: fade(darkBlack, 0.54),
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: cyan500,
      clockCircleColor: fade(darkBlack, 0.07),
      shadowColor: fullBlack,
    }, palette),
  };
}
