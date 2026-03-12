export default function ReplioLandingPage() {
  const features = [
    {
      title: "ردود ذكية 24/7",
      description:
        "خلي Replio يرد على أسئلة العملاء المتكررة في أي وقت، بدون ما يضيع منك lead مهم.",
    },
    {
      title: "مصمم للشركات العربية",
      description:
        "واجهة واضحة، وتجربة مناسبة للعربي، ورسائل تساعد العيادات والعقارات والمطاعم والشركات المحلية.",
    },
    {
      title: "جمع العملاء المحتملين",
      description:
        "لما البوت ما يلاقيش الإجابة، يجمع اسم العميل ورقمه ويحوّله لفريقك بسرعة.",
    },
    {
      title: "إعداد سريع",
      description:
        "أضف معلومات شركتك والأسئلة الشائعة، وخد بوت جاهز تقدر تركبه على موقعك خلال دقائق.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "أضف معلومات نشاطك",
      description:
        "اكتب وصف الخدمة، مواعيد العمل، الأسعار والأسئلة الشائعة التي يسألها العملاء دائمًا.",
    },
    {
      number: "02",
      title: "أنشئ البوت",
      description:
        "Replio يبني لك مساعد ذكي يفهم نشاطك ويجهز ردود مناسبة لعملائك.",
    },
    {
      number: "03",
      title: "ركّبه على موقعك",
      description:
        "انسخ الكود البسيط وضعه في موقعك، وابدأ تستقبل محادثات وعملاء محتملين فورًا.",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      note: "للتجربة",
      features: ["بوت واحد", "50 رسالة شهريًا", "لوحة تحكم أساسية"],
      cta: "ابدأ مجانًا",
      featured: false,
    },
    {
      name: "Starter",
      price: "$15",
      note: "/ شهر",
      features: ["رسائل أكثر", "جمع leads", "دعم عربي كامل", "إعداد أسرع"],
      cta: "ابدأ الآن",
      featured: true,
    },
    {
      name: "Pro",
      price: "$29",
      note: "/ شهر",
      features: ["عدة بوتات", "محادثات أكثر", "تحليلات أفضل", "أولوية في الدعم"],
      cta: "احجز Demo",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-bold text-white shadow-sm">
              ✦
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">Replio</div>
              <div className="text-xs text-slate-500">AI replies for Arabic businesses</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-950">المميزات</a>
            <a href="#how" className="transition hover:text-slate-950">كيف يعمل</a>
            <a href="#pricing" className="transition hover:text-slate-950">الأسعار</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 md:inline-flex">
              تسجيل الدخول
            </button>
            <button className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
              ابدأ مجانًا
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(124,58,237,0.12),_transparent_24%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="order-2 lg:order-1">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-sm text-blue-700 shadow-sm">
                <span className="text-base">⚡</span>
                مساعد ذكي يرد على العملاء بدلًا منك
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                خلّي <span className="bg-gradient-to-l from-blue-600 to-violet-600 bg-clip-text text-transparent">Replio</span> يرد على عملاء شركتك 24/7
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                بوت AI للمواقع يساعد الشركات العربية على الرد على الأسئلة المتكررة، جمع بيانات العملاء، وتحويل الزوار إلى leads بشكل أسرع وأسهل.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:opacity-95">
                  ابدأ مجانًا
                </button>
                <button className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  شاهد النسخة التجريبية
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <div>بدون تعقيد تقني</div>
                <div>•</div>
                <div>مناسب للشركات العربية</div>
                <div>•</div>
                <div>إطلاق سريع</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mx-auto max-w-xl rounded-[28px] border border-white/70 bg-white p-4 shadow-2xl shadow-slate-200">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <div>
                    <div className="text-sm font-semibold">Replio Demo</div>
                    <div className="text-xs text-slate-500">مساعد ذكي لموقع عيادة أسنان</div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Live
                  </div>
                </div>

                <div className="space-y-3 rounded-3xl bg-slate-50 p-4">
                  <div className="mr-auto max-w-[85%] rounded-2xl rounded-tr-md bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                    هل يوجد حجز اليوم؟
                  </div>

                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tl-md bg-gradient-to-l from-blue-600 to-violet-600 px-4 py-3 text-sm text-white shadow-sm">
                    نعم، يوجد مواعيد متاحة اليوم الساعة 7 مساءً و9 مساءً. هل تحب أسجّل لك موعد؟
                  </div>

                  <div className="mr-auto max-w-[85%] rounded-2xl rounded-tr-md bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                    كم سعر الكشف؟
                  </div>

                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tl-md bg-gradient-to-l from-blue-600 to-violet-600 px-4 py-3 text-sm text-white shadow-sm">
                    سعر الكشف 200 جنيه. لو تحب، أقدر أطلب منك الاسم ورقم الموبايل وفريق العيادة يتواصل معك.
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-100 p-3">
                  <div className="mb-2 text-xs font-medium text-slate-500">رسالة العميل</div>
                  <div className="flex items-center gap-2">
                    <input
                      readOnly
                      value="اكتب سؤالك هنا..."
                      className="h-11 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-400 outline-none"
                    />
                    <button className="h-11 rounded-xl bg-slate-950 px-4 text-sm font-medium text-white">
                      إرسال
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
              لماذا Replio؟
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              كل اللي تحتاجه لبدء دعم عملاء ذكي
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              ركّز على فريقك ومبيعاتك، وسيب الأسئلة المتكررة والردود الأولية على Replio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-xl">
                  ✨
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="border-y border-slate-200 bg-white/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                  كيف يعمل
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  من معلومات نشاطك إلى بوت جاهز خلال دقائق
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  التجربة بسيطة جدًا: عرّف Replio على شركتك، ثم انسخ كود صغير إلى موقعك وابدأ استقبال المحادثات مباشرة.
                </p>
              </div>

              <div className="grid gap-4">
                {steps.map((step) => (
                  <div key={step.number} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
              الأسعار
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              ابدأ مجانًا ثم اختر الخطة المناسبة
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              مناسب للبداية السريعة، مع خطط أبسط للشركات الصغيرة وخطط أقوى عند التوسع.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-8 shadow-sm ${
                  plan.featured
                    ? "border-slate-950 bg-slate-950 text-white shadow-xl"
                    : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className={`mt-2 text-sm ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>
                      {plan.note}
                    </p>
                  </div>
                  {plan.featured && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                      الأكثر طلبًا
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.note !== "للتجربة" && (
                    <span className={plan.featured ? "text-slate-300" : "text-slate-500"}>{plan.note}</span>
                  )}
                </div>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm">
                      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${plan.featured ? "bg-white/10" : "bg-slate-100"}`}>
                        ✓
                      </span>
                      <span className={plan.featured ? "text-slate-100" : "text-slate-600"}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-8 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[32px] bg-gradient-to-l from-blue-600 to-violet-600 px-8 py-12 text-white shadow-2xl shadow-blue-200 lg:px-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  ابدأ باستخدام الذكاء الاصطناعي في خدمة عملائك اليوم
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
                  جرّب Replio مجانًا، وابدأ بتحويل زيارات موقعك إلى محادثات وعملاء محتملين بشكل أسرع.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                  ابدأ مجانًا
                </button>
                <button className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  احجز Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Replio. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-800">Privacy</a>
            <a href="#" className="hover:text-slate-800">Terms</a>
            <a href="#" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
