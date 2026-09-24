import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Trash2, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'We collect financial and personal information that you voluntarily enter into our loan prediction form, including age, income, credit score, employment details, loan amount, and other related financial metrics.',
        'We do not collect any personally identifiable information such as names, email addresses, phone numbers, or social security numbers.',
        'We may collect anonymous usage data such as page visits and interaction patterns to improve our service.',
      ],
    },
    {
      icon: Server,
      title: 'How We Use Your Data',
      content: [
        'Your financial data is used solely for generating loan default predictions through our machine learning models (Logistic Regression and Random Forest).',
        'Data is processed in real-time and is not stored permanently on our servers after the prediction is generated.',
        'We do not use your data for marketing, advertising, or any purpose other than providing the prediction service.',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'All data transmissions between your browser and our servers are encrypted using industry-standard protocols.',
        'We do not store or log your input data beyond the duration of the prediction request.',
        'Our backend API processes your data in-memory and does not write any user-submitted information to disk or database.',
      ],
    },
    {
      icon: Trash2,
      title: 'Data Retention & Deletion',
      content: [
        'Your prediction input data is ephemeral — it exists only for the duration of the API request and is discarded immediately after the response is sent.',
        'No cookies or tracking technologies are used to identify individual users.',
        'Since we do not store your data, there is nothing to delete. Each session is completely stateless.',
      ],
    },
    {
      icon: Shield,
      title: 'Third-Party Sharing',
      content: [
        'We do not sell, trade, or share your financial information with any third parties.',
        'No analytics services receive your input data. Only anonymized usage metrics (page views, etc.) may be collected.',
        'Our machine learning models run entirely on our own servers — no external AI services are used.',
      ],
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-24 pb-20 bg-soft-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-primary/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-emerald-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">Privacy Policy</h1>
          <p className="text-lg text-text-gray max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. This policy explains how LoanPredict AI handles the data you provide.
          </p>
          <div className="mt-4 inline-block bg-emerald-primary/10 text-emerald-primary text-sm font-semibold px-4 py-2 rounded-full">
            Last updated: September 2026
          </div>
        </motion.div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-navy-deep text-white rounded-2xl p-6 md:p-8 mb-10 flex items-start space-x-4"
        >
          <div className="bg-emerald-primary/20 p-3 rounded-xl flex-shrink-0">
            <Lock className="w-6 h-6 text-emerald-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Your Data Never Leaves Your Session</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              LoanPredict AI does not store, log, or share any financial information you enter. All predictions are computed in real-time and discarded immediately. We have no databases, no user accounts, and no data retention.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
            >
              <div className="flex items-center mb-5 pb-4 border-b border-gray-100">
                <div className="bg-emerald-primary/10 p-2.5 rounded-xl mr-4">
                  <section.icon className="w-5 h-5 text-emerald-primary" />
                </div>
                <h2 className="text-xl font-bold text-navy-deep">{section.title}</h2>
              </div>
              <ul className="space-y-4">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-emerald-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-text-gray text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-primary/10 rounded-xl mb-4">
            <Mail className="w-5 h-5 text-emerald-primary" />
          </div>
          <h3 className="text-xl font-bold text-navy-deep mb-2">Questions About Privacy?</h3>
          <p className="text-text-gray text-sm max-w-md mx-auto">
            If you have any concerns about how your data is handled, feel free to reach out. This is an academic project focused on ML-driven risk analysis.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
