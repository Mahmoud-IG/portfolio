import React from 'react';
import LayoutWithImage from './LayoutWithImage';
import Signature from './Signature';

// Example photo URL (you can replace this with your own photo URL)
const photoUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84%D8%A9.JPG/1599px-%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84%D8%A9.JPG';

const photoUrl2 =
  'https://scontent.ftlv23-1.fna.fbcdn.net/v/t39.30808-6/306099912_5793362427349448_1978501958025644646_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=RwhCJWGEcroQ7kNvgFS0YOc&_nc_ht=scontent.ftlv23-1.fna&oh=00_AYBEPjEQH4EinT8v5je3mz_cpdsDxJyVV1mq99wzfPnUAg&oe=66879211';

const Home = () => {
  const text = `
    لقد كانت تجربتي في التدريس بمدرسة الشاملة الثانوية تجربة رائعة ومثمرة. عملت مع طاقم تعليمي
    متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على
    مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من
    الإنجازات الأكاديمية.
  `;

  return (
    <LayoutWithImage photoUrls={[photoUrl, photoUrl2]} text={text} signature={<Signature />} />
  );
};

export default Home;
