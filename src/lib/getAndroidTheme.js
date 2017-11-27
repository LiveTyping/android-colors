export default function getAndroidTheme(palette) {
  return {
    'colors.xml': `
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <color name="colorPrimary">${palette.PRIMARY.color}</color>
  <color name="colorPrimaryDark">${palette.DARK_PRIMARY.color}</color>
  <color name="colorAccent">${palette.ACCENT.color}</color>
  <color name="colorTextPrimary">${palette.PRIMARY_TEXT.color}</color>
  <color name="colorTextPrimaryDisabled">${palette.DISABLED_SECONDARY_TEXT.color}</color>
  <color name="colorDisableOnlyText">#e728339c</color>
  <color name="colorDisableDisableOnlyText">#546438ff</color>
  <color name="colorTextPrimaryInverse">${palette.INVERSED_PRIMARY_TEXT.color}</color>
  <color name="colorTextSecondary">${palette.SECONDARY_TEXT.color}</color>
  <color name="colorTextSecondaryDisabled">${palette.DISABLED_SECONDARY_TEXT.color}</color>
  <color name="colorTextSecondaryInverse">${palette.INVERSED_SECONDARY_TEXT.color}</color>
  <color name="textColorHint">${palette.HINT_TEXT.color}</color>
  <color name="colorControlNormal">${palette.NORMAL_CONTROL.color}</color>
  <color name="colorControlActivated">${palette.ACTIVATED_CONTROL.color}</color>
  <color name="colorButtonNormal">${palette.BUTTON_NORMAL.color}</color>
</resources>
    `,
    // <color name="colorControlHighlight">${palette.HIGHLIGHT_CONTROL.color}</color>

    'styles.xml': `
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <style name="Theme.Project" parent="Theme.Project.Base"/>
  <style name="Theme.Project.Base" parent="Theme.AppCompat.Light.NoActionBar">
    <item name="colorPrimary">@color/colorPrimary</item>
    <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
    <item name="colorAccent">@color/colorAccent</item>
    <item name="android:textColorPrimary">@drawable/selector_color_primary</item>
    <item name="android:textColorPrimaryInverse">@color/colorTextPrimaryInverse</item>
    <item name="android:textColorSecondary">@drawable/selector_color_secondary</item>
    <item name="android:textColorSecondaryInverse">@color/colorTextSecondaryInverse</item>
    <item name="colorControlNormal">@color/colorControlNormal</item>
    <item name="colorControlActivated">@color/colorControlActivated</item>
    <item name="android:colorButtonNormal">@color/colorButtonNormal</item>
    <item name="android:textColorHint">@color/textColorHint</item>
  </style>
</resources>
    `,
    // <item name="colorControlHighlight">@color/colorControlHighlight</item>
  };
}
