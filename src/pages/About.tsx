import { PhotoGrid } from '../components/PhotoGrid';
import { Award, Heart, Users, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const doctors = [
    {
      emoji: '👨‍⚕️',
      name: 'Dr. Alexandru Ionescu',
      title: 'Founder & Lead Dentist',
      specialization: 'Cosmetic & Restorative Dentistry',
      education: 'DMD, Carol Davila University of Medicine',
      experience: '20+ years of experience',
      bio: 'Passionate about creating beautiful, healthy smiles using the latest techniques and technology.',
    },
    {
      emoji: '👩‍⚕️',
      name: 'Dr. Elena Popescu',
      title: 'Orthodontist',
      specialization: 'Orthodontics & Smile Design',
      education: 'DDS, University of Medicine Cluj-Napoca',
      experience: '15+ years of experience',
      bio: 'Specializes in creating perfectly aligned smiles for patients of all ages.',
    },
    {
      emoji: '👨‍⚕️',
      name: 'Dr. Mihai Georgescu',
      title: 'Oral Surgeon',
      specialization: 'Oral Surgery & Implantology',
      education: 'DMD, PhD, Carol Davila University',
      experience: '18+ years of experience',
      bio: 'Expert in dental implants and complex oral surgical procedures.',
    },
    {
      emoji: '👩‍⚕️',
      name: 'Dr. Maria Constantinescu',
      title: 'Pediatric Dentist',
      specialization: 'Children\'s Dentistry',
      education: 'DDS, Grigore T. Popa University',
      experience: '12+ years of experience',
      bio: 'Making dental visits fun and stress-free for children and their families.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Your comfort, health, and satisfaction are our top priorities in everything we do.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and continually invest in advanced education.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Honest communication and ethical treatment recommendations you can trust.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Using the latest technology and techniques to provide superior dental care.',
    },
  ];

  const clinicPhotos = [
    { emoji: '🏥', label: 'Modern Clinic' },
    { emoji: '🪑', label: 'Treatment Rooms' },
    { emoji: '💻', label: 'Digital Technology' },
    { emoji: '🌿', label: 'Relaxing Space' },
    { emoji: '☕', label: 'Waiting Area' },
    { emoji: '🧼', label: 'Sterilization' },
    { emoji: '🎨', label: 'Interior Design' },
    { emoji: '🌟', label: 'Reception' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-start space-x-6">
                  <div className="text-7xl">{doctor.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <div className="text-teal-600 font-semibold mb-1">{doctor.title}</div>
                    <div className="text-sm text-gray-600 mb-4">{doctor.specialization}</div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Award className="w-4 h-4 text-teal-600" />
                        <span className="text-gray-700">{doctor.education}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Zap className="w-4 h-4 text-teal-600" />
                        <span className="text-gray-700">{doctor.experience}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              {t.about.story}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2009, DentaVita has been at the forefront of modern dental care in Bucharest. What started as a vision to provide premium, patient-focused dental services has grown into a trusted practice serving thousands of satisfied patients.
              </p>
              <p>
                Our clinic combines the latest dental technology with a warm, spa-like atmosphere that sets us apart from traditional dental offices. We believe that visiting the dentist should be a comfortable, even enjoyable experience.
              </p>
              <p>
                Every member of our team shares a commitment to excellence, continuous learning, and treating each patient like family. From routine checkups to complex smile transformations, we approach every case with the same dedication and attention to detail.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Clinic
            </h2>
            <p className="text-xl text-gray-600">
              A modern, comfortable space designed with your wellbeing in mind
            </p>
          </div>

          <PhotoGrid photos={clinicPhotos} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 text-white text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-teal-100 text-lg">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100 text-lg">Happy Patients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-teal-100 text-lg">Awards & Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
