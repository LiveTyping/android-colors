import React from 'react';
import './Modal.css';

const code = `<?xml version="1.0" encoding="utf-8"?>
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
        <item name="colorControlHighlight">@color/colorControlHighlight</item>
        <item name="android:colorButtonNormal">@color/colorButtonNormal</item>
        <item name="android:textColorHint">@color/textColorHint</item>
    </style>
</resources>`;

const Modal = () => (
  <div className="modal">
    {code}
  </div>
);

export default Modal;
