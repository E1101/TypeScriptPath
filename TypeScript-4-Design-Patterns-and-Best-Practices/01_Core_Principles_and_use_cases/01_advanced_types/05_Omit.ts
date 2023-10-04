/**
 * [Omit]
 *
 * This is the exact opposite of the Pick type. We utilize this type to generate another type
 * with the specified property or properties excluded from this list instead.
 * This is very practical if you want to take all existing properties of a type
 * but redeclare a few of them with a distinctive signature:
 */
type OriginalThemProps = {
  colors: string[];
  elevations: string[];
  margins: string[];
  defaultTypography: string;
};

type CustomThemeProps = {
  colors: Set<string>;
};

type ThemeProps = Omit<OriginalThemProps, "colors"> & {
  colors?: CustomThemeProps;
};
