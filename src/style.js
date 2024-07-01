import { css } from '@emotion/react';

export const MAIN_BG_COLOR = '#2980b9';
export const SECONDARY_BG_COLOR = '#3498db';
export const MAIN_TEXT_COLOR = '#ecf0f1';
export const SECONDARY_TEXT_COLOR = '#34495e';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Mada:wght@200..900&family=Noto+Nastaliq+Urdu:wght@400..700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    direction: rtl;
  }

  body {
    direction: rtl;
    color: ${SECONDARY_TEXT_COLOR};
    font-family: 'Amiri', serif;
  }
`;
