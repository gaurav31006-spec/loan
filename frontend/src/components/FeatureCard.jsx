import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
    >
      <div className="bg-emerald-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="text-emerald-primary w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-navy-deep mb-3">
        {title}
      </h3>
      <p className="text-text-gray leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
