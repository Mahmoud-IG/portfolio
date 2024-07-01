import React from 'react';
import LayoutWithImage from './LayoutWithImage';
import Signature from './Signature';
import overviewImg from '../../imgs/overview.jpg';

const Overview = () => {
  const text = `
    لقد كانت تجربتي في التدريس بمدرسة الشاملة الثانوية تجربة رائعة ومثمرة. عملت مع طاقم تعليمي
    متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على
    مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من
    الإنجازات الأكاديمية.
  `;

  return <LayoutWithImage photoUrls={[overviewImg]} text={text} signature={<Signature />} />;
};

export default Overview;
