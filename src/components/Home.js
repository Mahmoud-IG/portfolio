import React from "react";
import LayoutWithImage from "./LayoutWithImage";
import Signature from "./Signature";
import shamelaImg1 from "../../imgs/shamela-school-01.jpg";
import shamelaImg2 from "../../imgs/shamela-school-02.jpg";

const Home = () => {
  const text = `
    مرحبًا بكم في بورتفوليو التطبيقات العملية الخاص بي, حيث تتجلى رحلتي التعليمية في علم الحاسوب بكل تفاصيلها. \n\n
    في هذا الموقع، أشارككم تجربتي في المدرسة الشاملة الثانوية في أم الفحم، حيث أمارس وأعمل على تطبق هذه التجارب لأصبح معلمًا في المستقبل. 
    وعبر صفحات هذا الموقع، ستجدون مشاهدات عملية، خطط دروس محكمة، تغذية راجعة بناءة، ونظرة شاملة على العام الدراسي، بالإضافة إلى صور وفيديوهات توثّق هذه الرحلة المليئة بالشغف والتحدي.
    في هذا الموقع ستجدون انعكاسًا حقيقيًا لتجربتي التعليمية, من خلال استكشافكم لهذه الصفحات والاستمتاع برؤية كيف تتكامل النظرية مع التطبيق في رحلتي التعليمية. 
    آمل أن تجدوا في هذه التجربة إلهامًا وتحفيزًا للاستمرار في التعلم والتطوير المستمر.
  `;

  return (
    <LayoutWithImage
      photoUrls={[shamelaImg1, shamelaImg2]}
      text={text}
      signature={<Signature />}
    />
  );
};

export default Home;
