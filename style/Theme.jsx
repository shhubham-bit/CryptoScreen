import { typoGraphy } from "./Typography"
import { colorPalette } from "./color"
import { spacing } from "./spacing"
import { shape } from "./shape"


const DarkColorScheme = {
    primary: colorPalette.black,
    onPrimary: colorPalette.white,
    borderStroke: colorPalette.grey
}

const LightColorScheme = {
    primary: colorPalette.white,
    onPrimary: colorPalette.black,
    borderStroke: colorPalette.grey
}

const theme = {
    color: DarkColorScheme,
    typoGraphy: typoGraphy,
    space: spacing,
    shape: shape
}

export {LightColorScheme, DarkColorScheme, theme}