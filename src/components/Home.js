import React from 'react';
import LayoutWithImage from './LayoutWithImage';
import Signature from './Signature';
import shamelaImg1 from '../../imgs/shamela-school-01.JPG';
import shamelaImg2 from '../../imgs/shamela-school-01.JPG';

const Home = () => {
  const text = `
    لقد كانت تجربتي في التدريس بمدرسة الشاملة الثانوية تجربة رائعة ومثمرة. عملت مع طاقم تعليمي
    متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على
    مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من
    الإنجازات الأكاديمية.
  `;

  return (
    <LayoutWithImage photoUrls={[shamelaImg1, shamelaImg2]} text={text} signature={<Signature />} />
  );
};

export default Home;
