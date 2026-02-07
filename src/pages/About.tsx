import { PhotoGrid } from '../components/PhotoGrid';
import { Award, Heart, Users, Zap, User, Star, Building, Armchair, Laptop, Leaf, Coffee, Sparkles, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

export function About() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  const doctors = t.about.doctors?.map((doc, index) => {
    const icons = [User, User, User, User];
    return {
      icon: icons[index] || User,
      ...doc
    };
  }) || [];

  const values = [
    {
      icon: Heart,
      ...t.about.values.care,
    },
    {
      icon: Award,
      ...t.about.values.excellence,
    },
    {
      icon: Users,
      ...t.about.values.integrity,
    },
    {
      icon: Zap,
      ...t.about.values.innovation,
    },
  ];

  const clinicPhotoIcons = [Building, Armchair, Laptop, Leaf, Coffee, Sparkles, Palette, Star];
  const clinicPhotos = clinicPhotoIcons.map((icon, index) => ({
    icon,
    label: t.about.clinicPhotos?.labels[index] || ''
  }));

  return (
    <div>
      <section className="bg-gradient-to-br from-neutral-50 via-white to-secondary-light/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-gradient-to-br from-neutral-50 to-secondary-light/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                {/* Doctor Image */}
                <div className="relative h-80 bg-gradient-to-br from-primary-light/10 to-secondary-light/20">
                  <img
                    src={`/images/specialist-${index + 1}.png`}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-1">
                    {doctor.name}
                  </h3>
                  <div className="text-secondary font-semibold mb-1">{doctor.title}</div>
                  <div className="text-sm text-neutral-600 mb-4">{doctor.specialization}</div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Award className="w-4 h-4 text-secondary-dark" />
                      <span className="text-neutral-700">{doctor.education}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Zap className="w-4 h-4 text-secondary-dark" />
                      <span className="text-neutral-700">{doctor.experience}</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-50 to-secondary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.about.story}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                {t.about.storyText}
              </p>
              <p>
                {t.about.missionText}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="bg-gradient-to-br from-secondary-light/20 to-primary-light/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.about.clinicPhotos?.title}
            </h2>
            <p className="text-xl text-neutral-600">
              {t.about.clinicPhotos?.subtitle}
            </p>
          </div>

          <PhotoGrid photos={clinicPhotos} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 text-white text-center mb-12">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-neutral-100 text-lg">{t.about.stats?.years}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-neutral-100 text-lg">{t.about.stats?.patients}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-neutral-100 text-lg">{t.about.stats?.awards}</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={openBooking}
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-50 transition-all shadow-xl hover:shadow-2xl"
            >
              {t.ctaSection.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
