import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 relative -bottom-[80vh]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <h2 className="text-lg font-bold text-white">New Shack</h2>
          <p className="text-gray-400 text-sm">Best gadgets for life.</p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-md font-semibold text-white">Company</h3>
          <ul className="space-y-1">
            {["Blog", "About us", "Contact us", "Privacy policy", "Terms and conditions", "Frequently asked questions"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="cursor-pointer text-sm transition-colors duration-200 hover:text-white"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Popular Categories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-md font-semibold text-white">
            Popular categories
          </h3>
          <ul className="space-y-1">
            {[
              "Smart Phones",
              "Tablets",
              "Laptops",
              "Computers",
              "Headphones",
              "Gaming Consoles",
              "Games",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 4, color: "#ffffff" }}
                className="cursor-pointer text-sm transition-colors duration-200 hover:text-white"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Extra Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-md font-semibold text-white invisible lg:visible">
            {/* Invisible to maintain grid spacing on desktop */}
            .
          </h3>
          <ul className="space-y-1">
            {["Smart Watches", "Games", "VR Oculus", "All for Games"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="cursor-pointer text-sm transition-colors duration-200 hover:text-white"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white text-gray-800 text-start text-sm px-3 py-1">
        © New Shack, 2011–2021
      </div>
    </footer>
  );
};



export default Footer





