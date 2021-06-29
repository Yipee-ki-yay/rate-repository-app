import { Platform } from "react-native";

const theme = {
  colors: {
    primary: '#24292e',
    secondary: '#ffffff',
    tertiary: '#e1e4e8',
    quaternary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: 'white',
    textTertiary: '#333',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  images: {
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
  },
  flex: {
    flexContainerReverse: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    flexContainerRow: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  button: {
    standard: {
      backgroundColor: '#0366d6',
      borderRadius: 5,
      padding: 10,
      textAlign: 'center',
    }
  }
};

export default theme;