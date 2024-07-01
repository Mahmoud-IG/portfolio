import React from 'react';
import LayoutWithImage from './LayoutWithImage';
import Signature from './Signature';

// Example photo URL (you can replace this with your own photo URL)
const photoUrl =
  'https://cdn.prod.website-files.com/621594d45d719e0f9cffb843/62daff7f5c8b5c251732a08c_pov-feature.jpeg';

const Overview = () => {
  const text = `
    لقد كانت تجربتي في التدريس بمدرسة الشاملة الثانوية تجربة رائعة ومثمرة. عملت مع طاقم تعليمي
    متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على
    مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من
    الإنجازات الأكاديمية.
  `;

  return <LayoutWithImage photoUrls={[photoUrl]} text={text} signature={<Signature />} />;
};

export default Overview;
