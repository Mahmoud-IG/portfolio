import React from 'react';
import Section from './Section';
import { FaChalkboardTeacher } from 'react-icons/fa';





// Example text for each section
const sections = [
  {
    id: 'id1',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'الدرس الاول: "مفهوم الـ "algorithm""',
    text: `
في يوم 23 يناير 2024، قمت بتقديم أول الدورس للطلاب في مساق "التجربة العملية" تحت إشراف المعلمة فاطمة كبها. كان عنوان الدرس "مفهوم الـ Algorithm"، واستهدف طلاب الصف العاشر لمدة 45 دقيقة.

بدأت الدرس باستقبال الطلاب وتقديم أهداف الدرس، حيث شرحت لهم أهمية فهم الـ Algorithm في علم الحاسوب وأثره في حياتهم اليومية. هدفت هذه المرحلة إلى جذب انتباه الطلاب وتحفيزهم على المشاركة الفعّالة.

تم تشغيل فيديو تعليمي يوضح مفهوم الـ Algorithm بشكل ممتع ومضحك. الفيديو كان عبارة عن سلسلة من المشاهد التي تشرح كيفية تنفيذ الحاسوب للخطوات بشكل دقيق وتفصيلي، حتى الأمور البديهية التي لا يتطلب الأمر التفكير فيها بالنسبة للبشر، لكنها خطوات أساسية للحاسوب. هذا الأسلوب الطريف جذب انتباه الطلاب وجعلهم يضحكون، مما خلق جواً من المتعة والإيجابية في الصف. أثناء عرض الفيديو، كنت أوجه عملية المشاهدة وأحث الطلاب على التركيز على الطريقة التي يتبعها الحاسوب في تنفيذ التعليمات خطوة بخطوة.

بعد انتهاء الفيديو، قمت بتقديم مجموعة من الأسئلة التفاعلية والتمارين الصغيرة لتقييم مدى فهم الطلاب للمفاهيم التي شاهدوا. كانت هذه المرحلة مليئة بالتفاعل والحماس، حيث حاول الطلاب بجدية حل التمارين وطرح أسئلة للتأكد من فهمهم. ومن بين الأسئلة، كان هناك لغز يتحدى قدراتهم على التفكير النقدي والإبداعي: "تخيل أنك تقف أمام باب مغلق وفي جانب الباب من الجهة اليمنى هنالك 3 أزرار، أحد هذه الأزرار الثلاثة مسؤول عن إنارة الغرفة المغلقة. كيف تستطيع معرفة أي الأزرار الثلاثة هو المسؤول عن إنارة الغرفة بعد دخولك للغرفة عبر الباب لمرة واحدة؟" قبل دخول الغرفة، لديك عدد محاولات لا نهائي في تغيير وضعية الأزرار بين (on/off). بعد دخول الغرفة، تنتهي محاولاتك في تغيير وضعية الأزرار بين (on/off). كان التلميح هو أن مصباح الغرفة يعد من المصابيح القديمة.

شعرت بحماس الطلاب وهم يتفاعلون مع اللغز، حيث كانت الأجواء مليئة بالتحدي والإبداع. اختتمت الدرس بمراجعة الأفكار الرئيسية التي تمت مناقشتها في الفيديو والنقاش، وشجعت الطلاب على استكمال الفهم من خلال المراجعة الشخصية أو طلب المساعدة الإضافية عند الحاجة. كانت هذه اللحظة بمثابة تتويج لجهودهم، حيث لاحظت في وجوههم شعور الإنجاز والفخر.

هذا الدرس كان يهدف إلى تعزيز فهم الطلاب لمفهوم الـ Algorithm من خلال مشاهدة فيديو تعليمي ومناقشة مفصلة. الطلاب تفاعلوا بشكل فعّال مع الموضوع من خلال النقاش والتقييم الفوري لفهمهم. كانت استجابة الطلاب نشطة ومتفاعلة خلال النقاش، حيث قدموا أمثلة من واقعهم لتطبيقات الـ Algorithm في حياتهم اليومية. بعض الطلاب احتاجوا إلى دعم إضافي لفهم بعض المفاهيم الأساسية، لذا قمت بتقديم شروحات إضافية وأمثلة توضيحية لهم. كان هذا الدرس الأول بمثابة بداية رحلة تعليمية مثيرة، حيث شعرت بأنني نجحت في إلهام الطلاب وإثارة فضولهم نحو عالم البرمجة والحاسوب
      `,
      links: [
        { href: 'https://docs.google.com/document/d/1P5nCClAKUr-8V4Wdr7c8id5R35FRW5DPTOAoNFGOp4k/edit', title: 'مستند: "مخطط الدرس"' },
        { href: 'https://docs.google.com/document/d/1y5eIFXezmS3b_3OP5WK_xflyuM6V1B0L3q2bGUxmuSc/edit', title: 'مستند: "مجرى الدرس"' },
      ],
  },
  {
    id: 'id2',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'الدرس الثاني: "فهم مفهوم الـ Algorithm وتطبيقه في لعبة Tower of Hanoi"',
    text: `    في يوم 23 يناير 2024، قدمت درسًا شيقًا وممتعًا للطلاب في مساق "التجربة العملية" تحت إشراف المعلمة فاطمة كبها، وكان عنوان الدرس "فهم مفهوم الـ Algorithm وتطبيقه في لعبة Tower of Hanoi". استهدف الدرس طلاب الصف العاشر واستمر لمدة 45 دقيقة.

بدأت الدرس باستقبال الطلاب بحفاوة وتقديم أهداف الدرس، موضحة لهم أهمية فهم الـ Algorithm في علم الحاسوب وأثره في حل المشكلات المعقدة. هدفت هذه المرحلة إلى إثارة اهتمام الطلاب وتحفيزهم على المشاركة الفعّالة.

بعد ذلك، قمت بشرح لعبة Tower of Hanoi وأهميتها في تطبيق التفكير اللوجستي والتخطيط الاستراتيجي. كان الشرح تفاعليًا ومليئًا بالأمثلة العملية التي ساعدت في توضيح الفكرة. رأيت في عيون الطلاب بريق الفضول وهم يتعرفون على كيفية استخدام اللعبة في تعلم مفاهيم البرمجة.

ثم وجهت الطلاب لتجربة لعبة Tower of Hanoi بأنفسهم، محاولين حل تحدي الحركة الأقل لنقل الأقراص من عمود لآخر. كان الجو مليئًا بالتحدي والحماس، حيث تفاعل الطلاب مع اللعبة بشكل فعّال، محاولين تطبيق الاستراتيجيات المختلفة التي تعلموها. كانت هذه المرحلة ممتعة جدًا، حيث لاحظت روح التنافس والتعاون بين الطلاب، مما ساعدهم على فهم المفاهيم بطريقة عملية ومسلية.

بعد أن انتهى الطلاب من تجربة اللعبة، قمت بتقديم مجموعة من الأسئلة التفاعلية لتقييم مدى فهمهم للمفاهيم التي تعلموها. كان الطلاب متحمسين للإجابة على الأسئلة ومشاركة استراتيجياتهم، مما جعل هذه المرحلة مليئة بالتفاعل والحماس.

اختتمت الدرس بمراجعة الأفكار الرئيسية التي تمت مناقشتها خلال الدرس، وشجعت الطلاب على مشاركة أفكارهم وتجاربهم في حل الألغاز البرمجية. لاحظت في وجوههم شعور الإنجاز والفخر وهم يستعرضون تجاربهم ونجاحاتهم في حل التحديات.

كان هذا الدرس يهدف إلى تعزيز فهم الطلاب لمفهوم الـ Algorithm وتطبيق التفكير اللوجستي من خلال لعبة تفاعلية. تفاعل الطلاب بشكل فعّال مع اللعبة وتنافسوا لحل التحديات بأقل عدد من الخطوات، مما ساهم في تعزيز مهاراتهم في التفكير النقدي والتحليل المنطقي.

استجابة الطلاب كانت نشطة ومليئة بالحماس، حيث أظهروا اهتمامًا كبيرًا خلال حل تحديات اللعبة. بعض الطلاب تمكنوا من تطبيق استراتيجيات مختلفة لحل المشكلة، مما أثر إيجابيًا على تعلمهم وتفكيرهم اللوجستي. هذا الدرس كان بداية ناجحة لرحلة تعليمية ممتعة ومليئة بالتحديات، حيث شعرت بأنني نجحت في إثارة فضول الطلاب نحو عالم البرمجة وتطبيقات الـ Algorithm.
  `,
    links: [
      { href: 'https://docs.google.com/document/d/1k5y9L1o0Jp41lAAsMNfMN7GP7BdQTfqNEW2Z8IxAjA4/edit', title: 'مستند: "مخطط الدرس"' },
      { href: 'https://docs.google.com/document/d/1exD29_2plSoXtJrCJWuMPS9b_RY98y4FlUze3o6NIQk/edit', title: 'مستند: "مجرى الدرس"' },
    ],
  },
  {
    id: 'id3',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'الدرس الثالث: "توضيح طريقة فهم الحاسوب لنا"',
    text: `   في يوم 25 يناير 2024، قدمت أنا وزملائي من طلاب أكاديمية القاسمي: غزل غانم، آلاء حامد، سدن حرز الله، آية جزماوي، وأشرف مصاروة، درسًا تفاعليًا لطلاب الصف العاشر في مساق "التجربة العملية" تحت إشراف المعلمة فاطمة كبها. كان الدرس بعنوان "مفهوم الـ Algorithm وتطبيقه في لعبة Tower of Hanoi"، كبداية لسلسلة ثلاث دروس الدرس الاول استمر لمدة 45 دقيقة في الصف. هذا الدرس كان مشابهًا لدرس سابق لكنه موجه لشعبة أخرى من الصف العاشر.
بدأت الحصة باستقبال حار للطلاب وتقديم أهداف الدرس، حيث شرحت لهم أهمية فهم الـ Algorithm في علم الحاسوب وأثره في حياتهم اليومية. هدفت هذه المرحلة إلى جذب انتباه الطلاب وتحفيزهم على المشاركة الفعّالة.
غزل قامت بتقديم مقدمة الفيديو التعليمي الذي يوضح مفهوم الـ Algorithm بشكل ممتع ومضحك. الفيديو أظهر سلسلة من المشاهد التي تشرح كيفية تنفيذ الحاسوب للخطوات بشكل دقيق وتفصيلي، حتى الأمور البديهية التي لا يتطلب الأمر التفكير فيها بالنسبة للبشر، لكنها خطوات أساسية للحاسوب. هذا الأسلوب الطريف جذب انتباه الطلاب وجعلهم يضحكون، مما خلق جواً من المتعة والإيجابية في الصف. أثناء عرض الفيديو، كنا نوجه عملية المشاهدة ونحث الطلاب على التركيز على الطريقة التي يتبعها الحاسوب في تنفيذ التعليمات خطوة بخطوة.
بعد انتهاء الفيديو، آلاء تولت قيادة النقاش، حيث قدمت مجموعة من الأسئلة التفاعلية والتمارين الصغيرة لتقييم مدى فهم الطلاب للمفاهيم التي شاهدوا. كانت هذه المرحلة مليئة بالتفاعل والحماس، حيث حاول الطلاب بجدية حل التمارين وطرح أسئلة للتأكد من فهمهم. من بين الأسئلة، كان هناك لغز جديد يتحدى قدراتهم على التفكير النقدي والإبداعي: "تخيل أنك في متاهة تحتاج للوصول إلى الخروج بأقل عدد من الخطوات الممكنة. هناك أربعة اتجاهات يمكنك التحرك فيها: اليمين، اليسار، الأمام، والخلف. كيف يمكنك الوصول إلى الخروج بأقل عدد من الخطوات؟". هذا اللغز أثار فضول الطلاب وشجعهم على التفكير بطرق مبتكرة.
ثم قامت سدن بشرح لعبة Tower of Hanoi وأهميتها في تطبيق التفكير اللوجستي والتخطيط الاستراتيجي. الشرح كان تفاعليًا ومليئًا بالأمثلة العملية التي ساعدت في توضيح الفكرة. رأيت في عيون الطلاب بريق الفضول وهم يتعرفون على كيفية استخدام اللعبة في تعلم مفاهيم البرمجة.
آية تولت توجيه الطلاب لتجربة اللعبة بأنفسهم، محاولين حل تحدي الحركة الأقل لنقل الأقراص من عمود لآخر. الجو كان مليئًا بالحماس والتحدي، حيث تفاعل الطلاب مع اللعبة بشكل فعّال، محاولين تطبيق الاستراتيجيات المختلفة التي تعلموها. كانت هذه المرحلة ممتعة جدًا، حيث لاحظت روح التنافس والتعاون بين الطلاب، مما ساعدهم على فهم المفاهيم بطريقة عملية ومسلية.
بعد أن انتهى الطلاب من تجربة اللعبة، تولى أشرف تقديم مجموعة من الأسئلة التفاعلية لتقييم مدى فهمهم للمفاهيم التي تعلموها. كان الطلاب متحمسين للإجابة على الأسئلة ومشاركة استراتيجياتهم، مما جعل هذه المرحلة مليئة بالتفاعل والحماس.
اختتمنا الدرس بمراجعة الأفكار الرئيسية التي تمت مناقشتها خلال الدرس، حيث قمت بتلخيص النقاط الرئيسية وشجعت الطلاب على مشاركة أفكارهم وتجاربهم في حل الألغاز البرمجية. لاحظت في وجوههم شعور الإنجاز والفخر وهم يستعرضون تجاربهم ونجاحاتهم في حل التحديات.
هذا الدرس كان يهدف إلى تعزيز فهم الطلاب لمفهوم الـ Algorithm وتطبيق التفكير اللوجستي من خلال لعبة تفاعلية. تفاعل الطلاب بشكل فعّال مع اللعبة وتنافسوا لحل التحديات بأقل عدد من الخطوات، مما ساهم في تعزيز مهاراتهم في التفكير النقدي والتحليل المنطقي. استجابة الطلاب كانت نشطة ومليئة بالحماس، حيث أظهروا اهتمامًا كبيرًا خلال حل تحديات اللعبة. بعض الطلاب تمكنوا من تطبيق استراتيجيات مختلفة لحل المشكلة، مما أثر إيجابيًا على تعلمهم وتفكيرهم اللوجستي. هذا الدرس كان بداية ناجحة لرحلة تعليمية ممتعة ومليئة بالتحديات، حيث شعرنا جميعًا بأننا نجحنا في إثارة فضول الطلاب نحو عالم البرمجة وتطبيقات الـ Algorithm.

وفي الختام تم تجهيز غرف الحاسوب لفعالية الدرسين التاليين.
   `,
    links: [
      { href: 'https://docs.google.com/document/d/1MaBDEYgpNO5w5EI75IyeMbUM_eAkJ0H_V-9gLGP70LM/edit', title: 'مستند: "مخطط الدرس"' },
      { href: 'https://docs.google.com/document/d/1jM6nKNb5ewJHR42OtjeZxKulu0RhiRIfPUw8F1Kxd5A/edit', title: 'مستند: "مجرى الدرس"' },
      { href: 'https://docs.google.com/presentation/d/1lPzx1qlhKXSXHa0mLvfS0OpoKT2DQia6RoOSRkq9Tuw/edit#slide=id.p', title: 'مستند: "معروضة الدرس"' },
    ],
  },
  {
    id: 'id4',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'الدرس الرابع: "مقدمة إلى مفاهيم البرمجة من خلال الألعاب"',
    text: `   في يوم 25 يناير 2024، قدمت أنا وزملائي من طلاب أكاديمية القاسمي: غزل غانم، آلاء حامد، سدن حرز الله، آية جزماوي، وأشرف مصاروة، درسًا تفاعليًا آخر لطلاب الصف العاشر في مساق "التجربة العملية" تحت إشراف المعلمة فاطمة كبها. كان الدرس بعنوان "مقدمة إلى مفاهيم البرمجة من خلال الألعاب"، واستمر لمدة 45 دقيقة. هذا الدرس هو الدرس الثاني من سلسلة ثلاث دروس، وكان بمثابة تكملة للدرس السابق.

بدأت الحصة بتحية الطلاب وتقديم أهداف الدرس، حيث شرحت لهم أهمية تعلم البرمجة وأثرها في حياتهم اليومية. كان الهدف من هذه المرحلة هو إثارة اهتمام الطلاب وتحفيزهم على المشاركة الفعّالة.

غزل بدأت بتقديم الألعاب الموجودة على منصة Hour of Code، موضحة كيفية استخدام كل لعبة لتعلم أساسيات البرمجة. بدأت بـ Flappy Bird، حيث أظهرت كيف يمكن استخدام البرمجة لتحديد حركة الطائر في اللعبة. رأينا في عيون الطلاب بريق الفضول وهم يتابعون خطوات غزل بحماس.

ثم تولت آلاء توجيه الطلاب لتجربة الألعاب بأنفسهم. كانت هذه المرحلة مليئة بالتفاعل، حيث اختار بعض الطلاب لعبة Mario، بينما اختار آخرون Frozen وAngry Birds. الأجواء كانت مليئة بالمرح والتحدي، حيث حاول الطلاب تطبيق المفاهيم البرمجية التي تعلموها من خلال الألعاب.

سدن قادت النشاط التالي، حيث تحدت الطلاب لتصميم أو تعديل لعبة بسيطة باستخدام المفاهيم التي تعلموها. كانت هذه المرحلة مثيرة، حيث عمل الطلاب على تصميم ألعابهم، معتمدين على إبداعهم وابتكارهم. الجو كان مليئًا بالحماس والتشجيع، حيث تبادل الطلاب الأفكار والتجارب.

بعد أن انتهى الطلاب من تصميم ألعابهم، تولت آية تقديم مجموعة من الأسئلة التفاعلية لتقييم مدى فهمهم للمفاهيم التي تعلموها. كان الطلاب متحمسين للإجابة على الأسئلة ومشاركة استراتيجياتهم، مما جعل هذه المرحلة مليئة بالتفاعل والحماس.

اختتم أشرف الدرس بمراجعة الأفكار الرئيسية التي تمت مناقشتها خلال الدرس، مشجعًا الطلاب على مشاركة أفكارهم وتجاربهم في تصميم الألعاب. لاحظنا في وجوههم شعور الإنجاز والفخر وهم يستعرضون تجاربهم ونجاحاتهم في تصميم الألعاب.

هذا الدرس كان يهدف إلى تعزيز فهم الطلاب لمفاهيم البرمجة من خلال الأنشطة التفاعلية على منصة Hour of Code. تفاعل الطلاب بشكل فعّال مع الألعاب، وتنافسوا لتصميم وتعديل الألعاب بأفكارهم الإبداعية، مما ساهم في تعزيز مهاراتهم في التفكير النقدي والتحليل المنطقي. كانت استجابة الطلاب نشطة ومليئة بالحماس، حيث أظهروا اهتمامًا كبيرًا خلال الأنشطة التفاعلية. بعض الطلاب تمكنوا من تطبيق المفاهيم بطرق مبتكرة، مما أثر إيجابيًا على تعلمهم وتفكيرهم الإبداعي. هذا الدرس كان بداية ناجحة لرحلة تعليمية ممتعة ومليئة بالتحديات، حيث شعرنا جميعًا بأننا نجحنا في إثارة فضول الطلاب نحو عالم البرمجة وتطبيقاتها الممتعة.
   `,
    links: [
      { href: 'https://docs.google.com/document/d/1099OG3sXS4G6TQSfiffg9AS7Fx8G3jjYsrkzVudXf3w/edit', title: 'مستند: "مخطط الدرس"' },
      { href: 'https://docs.google.com/document/d/17H-LmaL3AlIR3UchDVmXhSQucW9TeTMlX9CVt_gGA30/edit', title: 'مستند: "مجرى الدرس"' },
      { href: 'https://docs.google.com/presentation/d/1lPzx1qlhKXSXHa0mLvfS0OpoKT2DQia6RoOSRkq9Tuw/edit#slide=id.p', title: 'مستند: "معروضة الدرس"' },
    ],
  },
  {
    id: 'id5',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'الدرس الخامس: "التقييم والتأمل في مفاهيم البرمجة"',
    text: `   في يوم 25 يناير 2024، قدمت أنا وزملائي من طلاب أكاديمية القاسمي: غزل غانم، آلاء حامد، سدن حرز الله، آية جزماوي، وأشرف مصاروة، الدرس الثالث والأخير في سلسلة دروس البرمجة لطلاب الصف العاشر في مساق "التجربة العملية" تحت إشراف المعلمة فاطمة كبها. كان عنوان الدرس "التقييم والتأمل في مفاهيم البرمجة"، واستمر لمدة 45 دقيقة.

غزل قامت بإدارة الجزء الأول من الدرس، حيث استكملنا نشاط Hour of Code الذي بدأناه في الدرس السابق. قدمت غزل شرحاً موجزاً للألعاب المختلفة مثل Flappy Bird، Mario، Frozen، Angry Birds، وMinecraft، موضحة كيفية استخدام كل لعبة لتعلم المفاهيم البرمجية الأساسية. شجعت الطلاب على الاستمرار في استكشاف هذه الألعاب وتطبيق ما تعلموه.

ثم تولت آلاء قيادة النقاش حول التحديات التي واجهها الطلاب والإنجازات التي حققوها خلال تعلمهم للبرمجة. أدار النقاش بطريقة تفاعلية، مما أتاح للطلاب مشاركة تجاربهم والتعلم من بعضهم البعض. تمثلت هذه المرحلة في فرصة للطلاب للتعبير عن الصعوبات التي واجهوها وكيفية تجاوزها، مما أثار حماسهم واهتمامهم.

سدن ركزت على توجيه الطلاب للتفكير في تطبيقات البرمجة في حياتهم اليومية ومستقبلهم المهني. شرحت سدن كيفية استخدام البرمجة في مختلف المجالات، بدءاً من تطوير الألعاب والتطبيقات إلى حلول المشكلات العملية في الحياة اليومية. هذا الجزء أثار خيال الطلاب وألهمهم للتفكير في إمكانيات البرمجة المستقبلية.

آية تولت توجيه النشاط العملي، حيث تم تحدي الطلاب لتصميم أو تعديل لعبة بسيطة باستخدام المفاهيم التي تعلموها. كان الجو مليئًا بالحماس والإبداع، حيث عمل الطلاب على تصميم ألعابهم الخاصة، متبادلين الأفكار والتجارب، مما ساعدهم على تطبيق المعرفة بطريقة تفاعلية وممتعة.

في نهاية الدرس، قاد أشرف جلسة التقييم والتأمل، حيث استخدمنا استبيانًا إلكترونيًا لتقييم مخرجات التعلم وردود فعل الطلاب. قام أشرف بتوجيه الطلاب حول كيفية ملء الاستبيان، وجمع الردود لتحليلها لاحقًا. كانت هذه الخطوة حاسمة في الحصول على تغذية راجعة حول مدى فهم الطلاب للمفاهيم التي تم تدريسها ومدى تفاعلهم مع الأنشطة.

اختتمنا الدرس بمراجعة شاملة للمفاهيم التي تم تعلمها، وتشجيع الطلاب على التفكير في التطبيقات المستقبلية للبرمجة. أظهر الطلاب اهتمامًا كبيرًا وتفاعلًا إيجابيًا، مما جعلنا نشعر بالرضا عن جهودنا والنجاح الذي حققناه في إثارة فضولهم نحو عالم البرمجة.

كان هذا الدرس يهدف إلى تعزيز فهم الطلاب لمفاهيم البرمجة من خلال الأنشطة التفاعلية والتأمل في التعلم. تفاعل الطلاب بشكل فعّال مع الأنشطة، وأظهروا إبداعًا وابتكارًا في تصميم الألعاب. استجابة الطلاب كانت نشطة ومليئة بالحماس، حيث أبدوا اهتمامًا كبيرًا بمستقبلهم في مجال علوم الحاسوب. هذا الدرس كان تتويجًا ناجحًا لسلسلة دروس تعليمية ممتعة ومليئة بالتحديات، حيث شعرنا جميعًا بأننا نجحنا في إثارة فضول الطلاب نحو البرمجة وتحفيزهم على استكشاف هذا العالم المثير.
   `,
    links: [
      { href: 'https://docs.google.com/document/d/1EZ3jHy3Xn5EPCmeqkw2-qUPBz1H864gpPkgADScOqfM/edit', title: 'مستند: "مخطط الدرس"' },
      { href: 'https://docs.google.com/document/d/12o7lKc4lVnCEvrf9LVZ6zRw7mqXh4ch4kcqkVCnj190/edit', title: 'مستند: "مجرى الدرس"' },
      { href: 'https://docs.google.com/presentation/d/1lPzx1qlhKXSXHa0mLvfS0OpoKT2DQia6RoOSRkq9Tuw/edit#slide=id.p', title: 'مستند: "معروضة الدرس"' },
    ],
  },
  {
    id: 'id6',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'الدرس السادس: "مفهوم الخصوصية والأمان"',
    text: `في يوم 16 مايو 2024، قمت بتقديم درس حول "مفهوم الخصوصية والأمان" لطلاب الصف العاشر في مساق "التجربة العملية" تحت إشراف المعلمة فاطمة كبها. استمر الدرس لمدة 45 دقيقة وكان مليئًا بالتفاعلات والنقاشات المثمرة.

بدأت الحصة بالترحيب بالطلاب وتقديم موضوع الدرس. قمت بإدارة نشاط تفاعلي باستخدام تطبيق Kahoot لتقييم مدى معرفة الطلاب بمفهوم الخصوصية والأمان وجذب انتباههم للموضوع. كان النشاط مليئًا بالحماس والتفاعل، حيث تنافس الطلاب للإجابة على الأسئلة بأسرع وقت ممكن.

بعد ذلك، شرحت مفهوم الخصوصية والأمان وأهميتهما في العصر الرقمي. استخدمت عرضًا تقديميًا لشرح النقاط الأساسية وتوضيح المفاهيم بطرق بسيطة ومفهومة. قدمت أمثلة واقعية وسردت قصة مؤثرة عن تسريب صور المشاهير وكيف أثر ذلك على حياتهم الشخصية، مما جعل الطلاب يدركون مدى خطورة انتهاك الخصوصية. أشرت إلى أن الخصوصية لا تتعلق فقط بالمعلومات الشخصية، بل تشمل الأمان النفسي والاجتماعي وتعزيز الثقة في العلاقات.

تفاعلت مع الطلاب من خلال طرح أسئلة تحفز التفكير النقدي، مما شجعهم على المشاركة بفعالية في النقاش. ناقشنا أهمية حماية المعلومات الشخصية وطرق القيام بذلك، بما في ذلك استخدام كلمات مرور قوية وعدم مشاركة المعلومات الشخصية على الإنترنت بشكل عشوائي.

ثم انتقلنا إلى جزء التقييم، حيث طرحت مجموعة من الأسئلة للنقاش حول أهمية الخصوصية وطرق حمايتها. كانت هذه المرحلة مليئة بالتفاعل، حيث شارك الطلاب بآرائهم وتجاربهم الشخصية، مما أضاف عمقًا للفهم الجماعي للمفهوم.

اختتمت الدرس بمراجعة الأفكار الرئيسية التي تم تناولها والتأكيد على أهمية الخصوصية في العصر الرقمي. شجعت الطلاب على مراجعة المفاهيم التي تعلموها والاستمرار في التفكير في كيفية حماية خصوصيتهم على الإنترنت.

كان الدرس يهدف إلى زيادة وعي الطلاب بمفهوم الخصوصية وأهميته، وتعريفهم بالمخاطر التي تواجه بياناتهم الشخصية، وتعزيز فهمهم لإجراءات الوقاية بشكل مبسط. من خلال النقاشات التفاعلية والأمثلة الواقعية، استطعت أن أنقل المفاهيم بطريقة تثير اهتمام الطلاب وتحفزهم على التفكير النقدي.

لاحظت تفاعلًا إيجابيًا من الطلاب واهتمامًا بحل التحديات المتعلقة بحماية الخصوصية. كانت استجابة الطلاب نشطة ومليئة بالحماس، حيث أظهروا اهتمامًا كبيرًا بمفهوم الخصوصية والأمان وكيفية تطبيقه في حياتهم اليومية. هذا الدرس كان بداية ناجحة لرحلة تعليمية مثيرة، حيث شعرت بأنني نجحت في إلهام الطلاب وزيادة وعيهم حول أهمية الخصوصية في العصر الرقمي.
`,
    links: [
      { href: 'https://docs.google.com/document/d/1-LfzfrHRY5QRrzeP68iCsyZHXl2QO7JMOB770cRc9qc/edit', title: 'مستند: "مخطط الدرس"' },
      { href: 'https://docs.google.com/document/d/1t4L0O4mwoSR6S0iRk0YuUX5K8wYcB5j0NId90FoNYD4/edit', title: 'مستند: "مجرى الدرس"' },
      { href: 'https://docs.google.com/presentation/d/1VW8EqdRaPbPaGSMgt2EJ48S_jKvdUS4yKPwQP69TssA/edit#slide=id.p', title: 'مستند: "معروضة الدرس"' },
    ],
  },
  {
    id: 'id7',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'الدرس السابع: "مخاطر اختراق الخصوصية و أنواع الإختراقات"',
    text: `في يوم 16 مايو 2024، قمت بتقديم درس حول "مخاطر اختراق الخصوصية وأنواع الاختراقات" لطلاب الصف العاشر في مساق "التجربة العملية" تحت إشراف المعلمة فاطمة كبها. استمر الدرس لمدة 45 دقيقة وكان مليئًا بالتفاعلات والنقاشات المثمرة.

بدأت الحصة بالترحيب بالطلاب وتقديم موجز عن أهمية الخصوصية وتزايد مخاطر الاختراق في العصر الرقمي. طرحت أسئلة تحفيزية حول تجارب الطلاب مع الخصوصية عبر الإنترنت، مما شجعهم على المشاركة وتبادل خبراتهم الشخصية. كان من الواضح أن العديد من الطلاب قد واجهوا مواقف مختلفة أثرت على فهمهم لأهمية حماية بياناتهم الشخصية.

بعد ذلك، انتقلنا إلى شرح مفهوم الاختراق وأنواعه المختلفة. استخدمت عرضًا تقديميًا لشرح النقاط الأساسية، وتناولت التنصت الصوتي والتجسس عبر الكاميرات وتتبع النشاطات عبر الإنترنت. قدمت أمثلة واقعية لتوضيح مدى خطورة هذه الأنواع من الاختراقات وكيف يمكن أن تؤثر على حياتهم الشخصية. كان الطلاب منتبهين ومهتمين، حيث طرحوا العديد من الأسئلة واستفسروا عن كيفية حماية أنفسهم من هذه التهديدات.

لم يكن الدرس مجرد عرض معلومات، بل تضمن أيضًا مشاهدة مقتطفات من فيديو توضيحي حول الاختراقات الإلكترونية. بعد مشاهدة الفيديو، طرحت مجموعة من الأسئلة للتأكد من فهم الطلاب للمفاهيم الرئيسية. كان النقاش حيويًا، حيث أبدى الطلاب فهمًا عميقًا وأظهروا اهتمامًا كبيرًا بالتفاصيل. قمت بتصحيح المفاهيم الخاطئة وتعزيز الفهم من خلال الشرح الإضافي.

في نهاية الدرس، قمت بتلخيص النقاط الرئيسية وربطها بحياتهم اليومية. قدمت ورقة عمل تفاعلية لتلخيص الدرس والتأكيد على النقاط الهامة. شارك الطلاب في ملء ورقة العمل، مما ساعدهم على تثبيت المعلومات في أذهانهم والتفكير النقدي حول كيفية حماية خصوصيتهم.

لاحظت تفاعلًا إيجابيًا من الطلاب واهتمامًا كبيرًا بحماية بياناتهم الشخصية. قدموا تجاربهم الشخصية بشكل محترم ومفيد، مما أضاف قيمة كبيرة للنقاشات. كما شجعتهم على مشاركة تجاربهم مع احترام خصوصيتهم وتقديم موارد إضافية للطلاب الذين أبدوا اهتمامًا بمعرفة المزيد عن أمن المعلومات.

في الختام، كان هذا الدرس فرصة رائعة لتعزيز وعي الطلاب بمخاطر اختراق الخصوصية وأهمية حماية معلوماتهم الشخصية. كانت الأجواء مليئة بالحماس والتفاعل، حيث شعرت بأنني نجحت في إيصال المفاهيم بطرق ممتعة ومثيرة للاهتمام، مما ساعد الطلاب على استيعاب المعلومات بشكل أفضل وترك انطباعًا إيجابيًا لديهم حول أهمية الأمان الرقمي في حياتهم اليومية.
`,
    links: [
      { href: 'https://docs.google.com/document/d/1Vvs4ViPEgn5DX4KtNt2OObnn8BwvxtBMAbU89_aPHN4/edit', title: 'مستند: "مخطط الدرس"' },
      { href: 'https://docs.google.com/document/d/19vSBhdoWBBbm3tyCB29aGvd2LyXnaqR0YAkKLuhDMNk/edit', title: 'مستند: "مجرى الدرس"' },
      { href: 'https://docs.google.com/presentation/d/1X1S9hpi-01oU8J7zsx9JhzLxI0HTUnINpD37nGLb1a0/edit#slide=id.g2e91965dc05_0_957', title: 'مستند: "معروضة الدرس"' },
    ],
  },
  {
    id: 'id8',
    icon: <FaChalkboardTeacher size={30} />,
    title: 'الدرس الثامن: "שפת סף"',
    text: `   في يوم 6 فبراير 2024، قمت بتقديم درس حول "لغة التجميع" (Assembly) لطلاب الصف العاشر في مساق "التجربة العملية" تحت إشراف المعلمة فاطمة كبها. استمر الدرس لمدة 45 دقيقة وكان مليئًا بالتفاعل والحماس. كما قامت المعلمة فاطمة كبها بمراقبة الدرس لتقييمه وتقديم ملاحظاتها، وشارك المعلم مهند أيضًا في مشاهدة بعض أجزاء من الدرس.
بدأت الحصة بتحية الطلاب وتقديم ملخص حول ما يعرفوه عن لغة التجميع وأنظمة الأعداد المختلفة، مثل النظام الثنائي والنظام العشري. كانت هذه المقدمة تهدف إلى تنشيط ذاكرتهم وتحفيزهم للمشاركة. كانت المقدمة طويلة بعض الشيء بناءً على ملاحظات المعلمة فاطمة، ولكنها كانت شاملة ومفيدة,انتقلت بعد ذلك إلى شرح مفصل عن أنظمة الأعداد المختلفة (ثنائي، ثماني، سداسي عشري) وكيفية تحويل الأعداد بينها. استخدمت عارضة لتقديم أمثلة عملية، وشرحت كل خطوة بشكل واضح ومبسط. تفاعل الطلاب بشكل جيد مع الأمثلة العملية، وطرحوا العديد من الأسئلة لفهم النقاط غير الواضحة.
خلال الشرح، لاحظت أن هناك طالبًا كثير الحركة. قررت استغلال طاقته بإشراكه في تحدي على اللوح لتحويل عدد من النظام العشري إلى النظام الثنائي. قدمت له المسألة وساعدته في البداية، ثم تركته ليكمل بنفسه. عندما نجح في حل السؤال، شعرت بفرحه وفخره، وشجعته أمام زملائه مما زاد من ثقته بنفسه.
كما لاحظت بعض الطالبات اللاتي كن في عزلة ولم يشاركن في النقاش. اقتربت منهن وطرحت عليهن سؤالًا بسيطًا يتعلق بشيء يحببنه، مثل استخدام سؤال عام خارج موضوع الدرس لدفعهن للحديث باي الامور والمعلومات التي تخطر وتجول في مخيلتهن، لتحفيزهن على المشاركة. هذا السؤال كسر جو الصمت لديهن وجعلهن يبدأن بالمشاركة بفعالية في النقاش عام ثم تحويل هذا النقاش بشكل تدريجي الى مجرى الدرس.
بعد الانتهاء من الشرح، وزعت ورقة عمل على الطلاب لتحويل الأعداد بين الأنظمة المختلفة. تجولّت بين الطلاب لتقديم المساعدة والتأكد من فهمهم. واجه بعض الطلاب صعوبة في التحويل بين الأنظمة، ولكن مع تقديم المساعدة الفردية، تمكنوا من الفهم وحل التمارين.
اختتمت الدرس بمراجعة النتائج والنقاط الرئيسية، وطرحت أسئلة لتأكيد الفهم وتقديم تغذية راجعة. كان التفاعل إيجابيًا، حيث قدم الطلاب ملاحظات مفيدة وأبدوا استعدادهم لتطبيق ما تعلموه في المستقبل.
في دروس اخرى تتبع لنفس المجال.
أبدت المعلمة فاطمة إعجابها بالطريقة التي تم بها تقديم الدرس وفقًا للمخطط، مشيرة إلى أن المقدمة كانت طويلة بعض الشيء ولكن بقية النقاط كانت جيدة، مثل التفاعل مع الطلاب، استخدام الأمثلة العملية، وتشجيع المشاركة الفعّالة. كانت مشاركة المعلم مهند أيضًا مثمرة، حيث أضاف بعض الملاحظات البناءة لتحسين الدروس المستقبلية.
هذا الدرس كان فرصة رائعة لتعزيز مهارات التفكير النقدي والابتكاري لدى الطلاب، وربط المفاهيم البرمجية بلغة التجميع. شعرت بالفخر لنجاحي في إيصال المعلومات بطريقة ممتعة ومفيدة، مما ساعد الطلاب على فهم واستخدام لغة التجميع بشكل أفضل.
   `,
    links: [
      { href: 'https://docs.google.com/document/d/1bWEFFCXaLZdPYSf2QF-UKzdiezFS5MSM7CdQRIxZmYQ/edit', title: 'مستند: "مخطط الدرس"' },
      { href: 'https://docs.google.com/document/d/1q-LLF_ZKGDYNY7JoxnPE7CzvCt6l6e-g-ZKdi1J4MiM/edit', title: 'مستند: "مجرى الدرس"' },
      { href: 'https://docs.google.com/presentation/d/1F1TG0q_yr6AfX_eIsZpS2SkQEzZ1hTED5ntf7GtvHAM/edit#slide=id.p', title: 'مستند: "معروضة الدرس"' },
    ],
  },
];

const LessonPlanning = () => {
  return (
    <div style={{ paddingTop: 65 }}>
      {sections.map((section, index) => (
        <Section
          id={section.id}
          key={index}
          icon={section.icon}
          title={section.title}
          date={section.date}
          text={section.text}
          links={section.links}
        />
      ))}
    </div>
  );
};

export default LessonPlanning;
