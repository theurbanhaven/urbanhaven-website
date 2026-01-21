export default function VisitUsMap() {
  return (
    <div className="w-full flex justify-center py-8 sm:py-8 md:py-8 lg:py-16">
      <div className="w-full">
        <h2 className="text-center text-2xl sm:text-2xl md:text-2xl lg:text-5xl font-semibold font-['Poppins']">
          Visit Us
        </h2>
        <p className="text-center text-[#495057] text-xs sm:text-xs md:text-xs lg:text-base font-normal font-['Poppins'] mt-2">
          Our studio showroom is open by appointment. Drop by to view our work,
          talk about your space, and see sample materials.
        </p>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.8042209986027!2d77.377135!3d28.614968999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7e41dce349%3A0x33cc48de6190c5da!2sCoZen!5e0!3m2!1sen!2sin!4v1733306382101!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
