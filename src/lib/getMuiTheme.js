/* eslint-disable import/no-extraneous-dependencies, object-curly-spacing, no-param-reassign */
import merge from 'lodash.merge';
import {darken, fade, emphasize, lighten} from 'material-ui/utils/colorManipulator';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import zIndex from 'material-ui/styles/zIndex';
import autoprefixer from 'material-ui/utils/autoprefixer';
import callOnce from 'material-ui/utils/callOnce';
import rtl from 'material-ui/utils/rtl';
import compose from 'recompose/compose';
import typography from 'material-ui/styles/typography';
import {
  red500, grey400, grey500, grey600, grey700,
  transparent, lightWhite, white, darkWhite, lightBlack, black,
} from 'material-ui/styles/colors';

/**
 * Get the MUI theme corresponding to a base theme.
 * It's possible to override the computed theme values
 * by providing a second argument. The calculated
 * theme will be deeply merged with the second argument.
 */
export default function getMuiTheme(muiTheme, ...more) {
  muiTheme = merge({
    zIndex,
    isRtl: false,
    userAgent: undefined,
  }, lightBaseTheme, muiTheme, ...more);

  const {spacing, fontFamily, palette} = muiTheme;
  const baseTheme = {spacing, fontFamily, palette};

  const {
    PRIMARY, INVERSED_PRIMARY_TEXT, SECONDARY_TEXT, NORMAL_CONTROL, ACTIVATED_CONTROL, PRIMARY_TEXT,
    DISABLED_PRIMARY_TEXT, ACCENT, BUTTON_NORMAL, DARK_PRIMARY, HINT_TEXT,
    canvasColor, alternateTextColor, textColor, primary1Color, primary2Color, primary3Color,
    accent1Color, accent2Color, accent3Color, disabledColor, shadowColor, borderColor, secondaryTextColor,
    clockCircleColor, pickerHeaderColor,
  } = palette;

  muiTheme = merge({
    appBar: {
      // color: primary1Color,
      // textColor: alternateTextColor,
      // height: spacing.desktopKeylineIncrement,
      // titleFontWeight: typography.fontWeightNormal,
      // padding: spacing.desktopGutter,

      color: PRIMARY.color,
      textColor: INVERSED_PRIMARY_TEXT.color,
      height: spacing.desktopKeylineIncrement,
      titleFontWeight: typography.fontWeightNormal,
      padding: spacing.desktopGutter,
    },
    avatar: {
      color: canvasColor,
      backgroundColor: emphasize(canvasColor, 0.26),
    },
    badge: {
      color: alternateTextColor,
      textColor,
      primaryColor: primary1Color,
      primaryTextColor: alternateTextColor,
      secondaryColor: accent1Color,
      secondaryTextColor: alternateTextColor,
      fontWeight: typography.fontWeightMedium,
    },
    bottomNavigation: {
      // backgroundColor: canvasColor,
      // unselectedColor: fade(textColor, 0.54),
      // selectedColor: primary1Color,
      // height: 56,
      // unselectedFontSize: 12,
      // selectedFontSize: 14,

      backgroundColor: canvasColor,
      unselectedColor: SECONDARY_TEXT.color,
      selectedColor: PRIMARY.color,
      height: 56,
      unselectedFontSize: 12,
      selectedFontSize: 14,
    },
    button: {
      height: 36,
      minWidth: 88,
      iconButtonSize: spacing.iconSize * 2,
    },
    card: {
      titleColor: fade(textColor, 0.87),
      subtitleColor: fade(textColor, 0.54),
      fontWeight: typography.fontWeightMedium,
    },
    cardMedia: {
      color: darkWhite,
      overlayContentBackground: lightBlack,
      titleColor: darkWhite,
      subtitleColor: lightWhite,
    },
    cardText: {
      textColor,
    },
    checkbox: {
      // boxColor: textColor,
      // checkedColor: primary1Color,
      requiredColor: primary1Color,
      disabledColor,
      labelColor: textColor,
      labelDisabledColor: disabledColor,

      boxColor: NORMAL_CONTROL.color,
      checkedColor: ACTIVATED_CONTROL.color,
    },
    chip: {
      backgroundColor: emphasize(canvasColor, 0.12),
      deleteIconColor: fade(textColor, 0.26),
      textColor: fade(textColor, 0.87),
      fontSize: 14,
      fontWeight: typography.fontWeightNormal,
      shadow: `0 1px 6px ${fade(shadowColor, 0.12)},
        0 1px 4px ${fade(shadowColor, 0.12)}`,
    },
    datePicker: {
      color: primary1Color,
      textColor: alternateTextColor,
      calendarTextColor: textColor,
      selectColor: primary2Color,
      selectTextColor: alternateTextColor,
      calendarYearBackgroundColor: canvasColor,
    },
    dialog: {
      titleFontSize: 22,
      bodyFontSize: 16,
      bodyColor: fade(textColor, 0.6),
    },
    dropDownMenu: {
      accentColor: borderColor,
    },
    enhancedButton: {
      tapHighlightColor: transparent,
    },
    flatButton: {
      // color: transparent,
      // buttonFilterColor: '#999999',
      // disabledTextColor: fade(textColor, 0.3),
      // textColor: textColor,
      // primaryTextColor: primary1Color,
      // secondaryTextColor: accent1Color,
      // fontSize: typography.fontStyleButtonFontSize,
      // fontWeight: typography.fontWeightMedium,

      color: transparent,
      buttonFilterColor: '#999999',
      // NORMAL FLAT BUTTON
      textColor: PRIMARY_TEXT.color,
      disabledTextColor: DISABLED_PRIMARY_TEXT.color,
      // COLORED FLAT BUTTON
      primaryTextColor: ACCENT.color,
      // @NOTE this color is being handled in RasiedButtonWrapper
      disabledPrimaryTextColor: lighten(SECONDARY_TEXT.color, 0.75),
      // TYPOGRAPHY
      fontSize: typography.fontStyleButtonFontSize,
      fontWeight: typography.fontWeightMedium,
    },
    floatingActionButton: {
      // buttonSize: 56,
      // miniSize: 40,
      // color: primary1Color,
      // iconColor: alternateTextColor,
      // secondaryColor: accent1Color,
      // secondaryIconColor: alternateTextColor,
      // disabledTextColor: disabledColor,
      // disabledColor: emphasize(canvasColor, 0.12),

      // NORMAL FLOATING ACTION BUTTON
      color: ACCENT.color,
      iconColor: INVERSED_PRIMARY_TEXT.color,
      disabledColor: lighten(BUTTON_NORMAL.color, 0.75),
      disabledTextColor: lighten(PRIMARY_TEXT.color, 0.75),
      // TYPOGRAPHY
      buttonSize: 56,
      miniSize: 40,
    },
    gridTile: {
      textColor: white,
    },
    icon: {
      color: canvasColor,
      backgroundColor: primary1Color,
    },
    inkBar: {
      backgroundColor: accent1Color,
    },
    drawer: {
      width: spacing.desktopKeylineIncrement * 4,
      color: canvasColor,
    },
    listItem: {
      nestedLevelDepth: 18,
      secondaryTextColor,
      leftIconColor: grey600,
      rightIconColor: grey600,
    },
    menu: {
      backgroundColor: canvasColor,
      containerBackgroundColor: canvasColor,
    },
    menuItem: {
      dataHeight: 32,
      height: 48,
      hoverColor: fade(textColor, 0.1),
      padding: spacing.desktopGutter,
      selectedTextColor: accent1Color,
      rightIconDesktopFill: grey600,
    },
    menuSubheader: {
      padding: spacing.desktopGutter,
      borderColor,
      textColor: primary1Color,
    },
    overlay: {
      backgroundColor: lightBlack,
    },
    paper: {
      color: textColor,
      backgroundColor: canvasColor,
      zDepthShadows: [
        [1, 6, 0.12, 1, 4, 0.12],
        [3, 10, 0.16, 3, 10, 0.23],
        [10, 30, 0.19, 6, 10, 0.23],
        [14, 45, 0.25, 10, 18, 0.22],
        [19, 60, 0.30, 15, 20, 0.22],
      ].map((d) => (
        `0 ${d[0]}px ${d[1]}px ${fade(shadowColor, d[2])},
         0 ${d[3]}px ${d[4]}px ${fade(shadowColor, d[5])}`
      )),
    },
    radioButton: {
      // borderColor: textColor,
      // backgroundColor: alternateTextColor, // not used
      // checkedColor: primary1Color,
      requiredColor: primary1Color,
      disabledColor,
      size: 24,
      labelColor: textColor,
      labelDisabledColor: disabledColor,

      borderColor: NORMAL_CONTROL.color,
      checkedColor: ACTIVATED_CONTROL.color,
    },
    raisedButton: {
      // color: alternateTextColor,
      // textColor: textColor,
      // primaryColor: primary1Color,
      // primaryTextColor: alternateTextColor,
      // secondaryColor: accent1Color,
      // secondaryTextColor: alternateTextColor,
      // disabledColor: darken(alternateTextColor, 0.1),
      // disabledTextColor: fade(textColor, 0.3),
      // fontSize: typography.fontStyleButtonFontSize,
      // fontWeight: typography.fontWeightMedium,

      // NORMAL RAISED BUTTON
      color: BUTTON_NORMAL.color,
      textColor: PRIMARY_TEXT.color,
      disabledColor: BUTTON_NORMAL.color,
      disabledTextColor: DISABLED_PRIMARY_TEXT.color,
      // COLORED RAISED BUTTON
      primaryColor: ACCENT.color,
      primaryTextColor: INVERSED_PRIMARY_TEXT.color,
      // @NOTE these colors are being handled in RasiedButtonWrapper
      disabledPrimaryColor: lighten(BUTTON_NORMAL.color, 0.75),
      disabledPrimaryTextColor: lighten(PRIMARY_TEXT.color, 0.75),
      // TYPOGRAPHY
      fontSize: typography.fontStyleButtonFontSize,
      fontWeight: typography.fontWeightMedium,
    },
    refreshIndicator: {
      strokeColor: borderColor,
      loadingStrokeColor: primary1Color,
    },
    ripple: {
      color: fade(textColor, 0.87),
    },
    slider: {
      // trackSize: 2,
      // trackColor: primary3Color,
      // trackColorSelected: accent3Color,
      // handleSize: 12,
      // handleSizeDisabled: 8,
      // handleSizeActive: 18,
      // handleColorZero: primary3Color,
      // handleFillColor: alternateTextColor,
      // selectionColor: primary1Color,
      // rippleColor: primary1Color,
      trackSize: 2,
      trackColor: NORMAL_CONTROL.color,
      trackColorSelected: NORMAL_CONTROL.color,
      handleSize: 12,
      handleSizeDisabled: 8,
      handleSizeActive: 18,
      handleColorZero: primary3Color,
      handleFillColor: alternateTextColor,
      selectionColor: ACTIVATED_CONTROL.color,
      rippleColor: ACTIVATED_CONTROL.color,
    },
    snackbar: {
      textColor: alternateTextColor,
      backgroundColor: textColor,
      actionColor: accent1Color,
    },
    subheader: {
      color: fade(textColor, 0.54),
      fontWeight: typography.fontWeightMedium,
    },
    statusBar: {
      color: DARK_PRIMARY.color,
      labelColor: INVERSED_PRIMARY_TEXT.color,
    },
    stepper: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: fade(black, 0.06),
      iconColor: primary1Color,
      hoveredIconColor: grey700,
      inactiveIconColor: grey500,
      textColor: fade(black, 0.87),
      disabledTextColor: fade(black, 0.26),
      connectorLineColor: grey400,
    },
    svgIcon: {
      color: textColor,
    },
    table: {
      backgroundColor: canvasColor,
    },
    tableFooter: {
      borderColor,
      textColor: accent3Color,
    },
    tableHeader: {
      borderColor,
    },
    tableHeaderColumn: {
      textColor: accent3Color,
      height: 56,
      spacing: 24,
    },
    tableRow: {
      hoverColor: accent2Color,
      stripeColor: fade(lighten(primary1Color, 0.5), 0.4),
      selectedColor: borderColor,
      textColor,
      borderColor,
      height: 48,
    },
    tableRowColumn: {
      height: 48,
      spacing: 24,
    },
    tabs: {
      backgroundColor: primary1Color,
      textColor: fade(alternateTextColor, 0.7),
      selectedTextColor: alternateTextColor,
    },
    textField: {
      // textColor: textColor,
      // hintColor: disabledColor,
      // floatingLabelColor: disabledColor,
      // disabledTextColor: disabledColor,
      // errorColor: red500,
      // focusColor: primary1Color,
      // backgroundColor: 'transparent',
      // borderColor: borderColor,

      textColor: PRIMARY_TEXT.color,
      hintColor: HINT_TEXT.color,
      floatingLabelColor: HINT_TEXT.color,
      disabledTextColor: disabledColor,
      errorColor: red500,
      focusColor: ACTIVATED_CONTROL.color,
      backgroundColor: 'transparent',
      borderColor: NORMAL_CONTROL.color,
    },
    timePicker: {
      color: alternateTextColor,
      textColor: alternateTextColor,
      accentColor: primary1Color,
      clockColor: textColor,
      clockCircleColor,
      headerColor: pickerHeaderColor || primary1Color,
      selectColor: primary2Color,
      selectTextColor: alternateTextColor,
    },
    toggle: {
      // thumbOnColor: primary1Color,
      // thumbOffColor: accent2Color,
      thumbDisabledColor: borderColor,
      thumbRequiredColor: primary1Color,
      // trackOnColor: fade(primary1Color, 0.5),
      // trackOffColor: primary3Color,
      trackDisabledColor: primary3Color,
      labelColor: textColor,
      labelDisabledColor: disabledColor,
      trackRequiredColor: fade(primary1Color, 0.5),

      trackOffColor: NORMAL_CONTROL.color,
      trackOnColor: lighten(ACTIVATED_CONTROL.color, 0.75),
      thumbOffColor: lighten(NORMAL_CONTROL.color, 0.75),
      thumbOnColor: ACTIVATED_CONTROL.color,
    },
    toolbar: {
      color: fade(textColor, 0.54),
      hoverColor: fade(textColor, 0.87),
      backgroundColor: darken(accent2Color, 0.05),
      height: 56,
      titleFontSize: 20,
      iconColor: fade(textColor, 0.4),
      separatorColor: fade(textColor, 0.175),
      menuHoverColor: fade(textColor, 0.1),
    },
    tooltip: {
      color: white,
      rippleBackgroundColor: grey700,
    },
  }, muiTheme, {
    baseTheme, // To provide backward compatibility.
    rawTheme: baseTheme, // To provide backward compatibility.
  });

  const transformers = [autoprefixer, rtl, callOnce]
    .map((t) => t(muiTheme))
    .filter((t) => t);

  muiTheme.prepareStyles = compose(...transformers);

  return muiTheme;
}
