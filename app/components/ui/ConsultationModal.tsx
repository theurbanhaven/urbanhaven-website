// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useModal } from "@/app/context/Modalcontext";
// import ModernBedroom from "@/public/LandingPageImage/Modern-Bedroom.png";
// import CloseIcon from "@/public/LandingPageImage/CloseIcon.png";
// import { motion, AnimatePresence } from "framer-motion";

// import { db } from "@/app/lib/firebase/config";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// export default function ConsultationModal() {
//   const { modalType, closeModal, openThankYouModal } = useModal();

//   const isOpen = modalType === "CONSULT";

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };
//     if (isOpen) window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [isOpen, closeModal]);

//   if (!isOpen) return null;

//   // Handle Form Submit

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       await addDoc(collection(db, "consultations"), {
//         name,
//         email,
//         phone,
//         pincode,
//         createdAt: serverTimestamp()
//       });

//       setName(""), setEmail(""), setPhone(""), setPincode("");
//       closeModal();
//       setTimeout(() => {
//         openThankYouModal();
//       }, 50);
//     } catch (error: any) {
//       console.log("Error submitting form:", error.message);
//       alert("Something went wrong!" + error.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-6 sm:p-8">
//       {/* backdrop */}
//       <div
//         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//         onClick={closeModal}
//       />

//       {/* Modal Panel */}
//       <div className="relative bg-white rounded-xl shadow-xl w-[432px] max-h-[95vh] overflow-y-auto z-10">
//         {/* Top section */}
//         <div className="flex w-full sticky top-0">
//           <div className="w-1/2 h-[180px]">
//             <Image
//               src={ModernBedroom}
//               alt="Modern Bedroom"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="w-1/2 bg-[#31224B] p-5 relative flex items-center justify-center text-center">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-3 bg-white rounded-md p-1 cursor-pointer hover:opacity-80"
//             >
//               <Image
//                 src={CloseIcon}
//                 alt="close"
//                 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer"
//               />
//             </button>

//             <h2 className="text-white font-['Poppins'] text-xl font-medium leading-[25px]">
//               Lets design your <br /> Dream home
//             </h2>
//           </div>
//         </div>

//         {/* FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="px-6 py-6 sm:px-8 sm:py-8 space-y-4"
//         >
//           <input
//             placeholder="Name"
//             className="w-full placeholder:font-['Poppins'] font-[normal] text-[#757575] text-base border border-[#d9d9d9] rounded px-4 py-3"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             placeholder="Email ID"
//             className="w-full placeholder:font-['Poppins'] font-[semibold] text-base text-[#757575] border border-[#d9d9d9] rounded px-4 py-3"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             type="email"
//           />
//           <input
//             placeholder="Phone Number"
//             className="w-full placeholder:font-['Poppins'] font-[semibold] text-base text-[#757575] border border-[#d9d9d9] rounded px-4 py-3"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//           <input
//             placeholder="Pincode"
//             className="w-full placeholder:font-['Poppins'] font-[semibold] text-base text-[#757575] border border-[#d9d9d9] rounded px-4 py-3"
//             value={pincode}
//             onChange={(e) => setPincode(e.target.value)}
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-[220px] p-3 mx-auto h-[40px] bg-[#F95B46] text-white text-lg font-medium font-['Poppins'] rounded-md flex justify-center items-center"
//           >
//             {loading ? "Submitting..." : "Get Free Quotation"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/app/context/Modalcontext";
import ModernBedroom from "@/public/LandingPageImage/Modern-Bedroom.png";
import CloseIcon from "@/public/LandingPageImage/CloseIcon.png";

import { db } from "@/app/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ConsultationModal() {
  const { modalType, closeModal, openThankYouModal } = useModal();
  const isOpen = modalType === "CONSULT";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "consultations"), {
        name,
        email,
        phone,
        pincode,
        createdAt: serverTimestamp()
      });

      setName("");
      setEmail("");
      setPhone("");
      setPincode("");
      closeModal();

      setTimeout(() => {
        openThankYouModal();
      }, 100);
    } catch (error: any) {
      alert("Something went wrong! " + error.message);
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-6 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* MODAL PANEL */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-white rounded-xl shadow-xl w-[432px] max-h-[95vh] overflow-y-auto z-10"
          >
            {/* Top section */}
            <div className="flex w-full sticky top-0">
              <div className="w-1/2 h-[180px]">
                <Image
                  src={ModernBedroom}
                  alt="Modern Bedroom"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-1/2 bg-[#31224B] p-5 relative flex items-center justify-center text-center">
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute top-2 right-3 rounded-md p-1"
                >
                  <motion.div
                    whileHover={{ color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-600"
                  >
                    <Image src={CloseIcon} alt="close" className="w-6 h-6" />
                  </motion.div>
                </motion.button>

                <h2 className="text-white text-xl font-medium leading-[25px]">
                  Lets design your <br /> Dream home
                </h2>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="px-6 py-6 sm:px-8 sm:py-8 space-y-4"
            >
              <input
                placeholder="Name"
                className="w-full border rounded px-4 py-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Email ID"
                type="email"
                required
                className="w-full border rounded px-4 py-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="Phone Number"
                required
                className="w-full border rounded px-4 py-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                placeholder="Pincode"
                required
                className="w-full border rounded px-4 py-3"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="w-[220px] h-[40px] mx-auto bg-[#F95B46] text-white rounded-md flex justify-center items-center"
                >
                  {loading ? "Submitting..." : "Get Free Quotation"}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
