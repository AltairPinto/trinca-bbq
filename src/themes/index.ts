export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    black: string;
    white: string;
    gray: string;
    error: string;
    success: string;
    warning: string;
  };
  typography: {
    fontFamily: string;
    h1: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
    h2: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
    h3: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
    h4: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
    h5: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
    label: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
    p: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
    span: {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
    };
  };
}

const theme: Theme = {
  colors: {
    primary: '#FFD836',
    secondary: '#998220',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#F1F1F1',
    error: '#FF3333',
    success: '#22bb33',
    warning: '#f0ad4e',
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.348rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: '2.348rem',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '2.348rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '2.348rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '.75rem',
      lineHeight: '2.348rem',
    },
    label: {
      fontSize: '1.313rem',
      fontWeight: 700,
      lineHeight: '1.541rem',
    },
    p: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '1.321rem',
    },
    span: {
      fontSize: '1.313rem',
      fontWeight: 700,
      lineHeight: '1.541rem',
    },
  },
};

export default theme;
