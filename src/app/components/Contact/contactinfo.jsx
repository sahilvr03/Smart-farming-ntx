import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <div className="bg-white rounded-3xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90 border border-green-100 group">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-green-50 rounded-full group-hover:scale-110 transition-transform duration-300">
            <MapPin className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Visit Our Farm</h3>
          <p className="text-gray-600">
            123 Farm Road<br />
            Countryside, State 12345
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90 border border-green-100 group">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-green-50 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Clock className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
          <p className="text-gray-600">
            Monday - Saturday<br />
            8:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90 border border-green-100 group">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-green-50 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Phone className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
          <p className="text-gray-600">
            +1 (555) 123-4567<br />
            Mon-Sat, 8AM-6PM
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90 border border-green-100 group">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-green-50 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Mail className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Email</h3>
          <p className="text-gray-600">
            info@farmname.com<br />
            support@farmname.com
          </p>
        </div>
      </div>
    </div>
  );
}